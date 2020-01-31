const members = data.results[0].members

const tbody = document.querySelector("tbody")

members.forEach(member => {
let row = tbody.insertRow(-1)

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
}) //seguro que esto se podría hacer con menos lineas.

function filterData() {
    var filteredData = [];
    for (i = 0; i < members.length; i++) {
        document.getElementById('alert').style.display = "none";
        if (select.value == members[i].state || select.value == 'all') {
            if (independent.checked == true && members[i].party == "I") {
                filteredData.push(members[i]);
            }
            if (democrat.checked == true && members[i].party == "D") {
                filteredData.push(members[i]);
            }
            if (republican.checked == true && members[i].party == "R") {
                filteredData.push(members[i]);
            } else if (independent.checked == false && democrat.checked == false && republican.checked == false) {
                document.getElementById('alert').style.display = 'block';
            }


        }
    }
    return filteredData;
}

function filterStates() {
    var filteredStates = [];

    for (h = 0; h < members.length; h++) {
        filteredStates.push(members[h].state);
    }
    console.log(filteredStates);
    return filteredStates.sort();
}

filter: function () {

    select = document.getElementById("state-filter");
    independent = document.getElementById("independent");
    democrat = document.getElementById("democrat");
    republican = document.getElementById("republican");
    alert = document.getElementById("alert");

    var members = main.allMembers;
    main.members = [];
    document.getElementById('alert').style.display = "none";
    for (i = 0; i < members.length; i++) {
        if (select.value == members[i].state || select.value == 'all') {
            if (independent.checked == true && members[i].party == "I") {
                main.members.push(members[i]);
            }
            if (democrat.checked == true && members[i].party == "D") {
                main.members.push(members[i]);
            }
            if (republican.checked == true && members[i].party == "R") {
                main.members.push(members[i]);

            } else if (independent.checked == false && democrat.checked == false && republican.checked == false) {
                document.getElementById('alert').style.display = 'block';
            }
        }
    }

},
filterStates: function () {

    var members = this.allMembers;
    this.states = [];
    for (h = 0; h < members.length; h++) {
        if (!this.states.includes(members[h].state)) {
            main.states.push(members[h].state);
        }

    }
    main.states.sort();
}

}
}
