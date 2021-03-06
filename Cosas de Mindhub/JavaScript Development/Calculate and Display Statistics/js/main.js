let tbody = document.querySelector("tbody")
let members = data.results[0].members

function checkbox(){
  document.getElementById("table-data").innerHTML = ""
  let state = document.getElementById("inputState").value
  let party = document.getElementsByClassName("congress")
  let select = []
  let dFilter = []

//party filter
    for (let i = 0; i <party.length; i++) {
      if (party[i].checked) {
        dFilter = members.filter(e => e.party == party[i].value);

        members.filter(e => e.party == party[i].value && (e.state == state || state == "all")). forEach(member => {
        let row = tbody.insertRow(-1);

          if (member.url == "") {
            row.innerHTML = `<td class="text-left pl-5">${member.first_name} ${member.middle_name || ""} ${member.last_name}</td>
            <td>${member.party}</td>
            <td>${member.state}</td>
            <td>${member.seniority}</td>
            <td>${member.votes_with_party_pct+'%'}</td>`
          }else {
            row.innerHTML = `<td class="text-left pl-5"><a href=${member.url}>${member.first_name} ${member.middle_name || ""} ${member.last_name}</td>
            <td>${member.party}</td>
            <td>${member.state}</td>
            <td>${member.seniority}</td>
            <td>${member.votes_with_party_pct+'%'}</td>`
          }
        });
      }

//state filter
      dFilter.forEach (e => {
        if (select.indexOf(e.state)== (-1)) {
          select.push(e.state)
        }
      });

      document.getElementById("inputState").innerHTML = `<option value = "all">all</option>`
      select.forEach (e => {document.getElementById("inputState").innerHTML += `<option value ="${e}">${e}</option>`});
      document.getElementById("inputState").value = state
    }
  }

//checkbox
    document.getElementById("dem").addEventListener("click", checkbox)
    document.getElementById("rep").addEventListener("click", checkbox)
    document.getElementById("ind").addEventListener("click", checkbox)
    checkbox()
    document.getElementById("inputState").addEventListener("change", checkbox)
