const members = data.results[0].members

const tbody = document.querySelector("tbody")

function checkbox(){
  document.getElementById("table-data").innerHTML = ""
  let state = document.getElementById("inputState").value
  let party = document.getElementsByClassName("congress")
  let select = []
  let dFilter = []

    for (let i = 0; i <party.length; i++) {
      if (party[i].checked) {
        dFilter = members.filter(e => e.party == party[i].value)

        members.filter(e => e.party == party[i].value && (e.state == state || state == "all")). forEach(member => {
          let row = tbody.insertRow(-1);
          
          if (member.middle_name == null) {
              if (member.url == "") {
                row.innerHTML = `<td>${member.first_name} ${member.last_name}</td>
                <td>${member.party}</td>
                <td>${member.state}</td>
                <td>${member.seniority}</td>
                <td>${member.votes_with_party_pct+'%'}</td>`
              }else {
                row.innerHTML = `<td><a href=${member.url}>${member.first_name} ${member.last_name}</td>
                <td>${member.party}</td>
                <td>${member.state}</td>
                <td>${member.seniority}</td>
                <td>${member.votes_with_party_pct+'%'}</td>`
              }
          }else {
            if (member.url == "") {
              row.innerHTML = `<td>${member.first_name} ${member.middle_name} ${member.last_name}</td>
              <td>${member.party}</td>
              <td>${member.state}</td>
              <td>${member.seniority}</td>
              <td>${member.votes_with_party_pct+'%'}</td>`
            }else {
              row.innerHTML = `<td><a href=${member.url}>${member.first_name} ${member.middle_name} ${member.last_name}</td>
              <td>${member.party}</td>
              <td>${member.state}</td>
              <td>${member.seniority}</td>
              <td>${member.votes_with_party_pct+'%'}</td>`
            }
          }
        })
      }
      dFilter.forEach (e => {
        if (select.indexOf(e.state)== (-1)) {
          select.push(e.state)
        }
      })
      document.getElementById("inputState").innerHTML = `<option value = "all">all</option>`
      select.forEach (e => {document.getElementById("inputState").innerHTML += `<option value ="${e}">${e}</option>`})
      document.getElementById("inputState").value = state
    }
}

    document.getElementById("dem").addEventListener("click", checkbox)
    document.getElementById("rep").addEventListener("click", checkbox)
    document.getElementById("ind").addEventListener("click", checkbox)
    checkbox()
    document.getElementById("inputState").addEventListener("change", checkbox)
