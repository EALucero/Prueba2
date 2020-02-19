const members = data.results[0].members
const tbody = document.querySelector("tbody")

function createDropdown(){
let states = []
let select = document.getElementById("states")
let members = data.result[0].members

  for(let i = 0; i < members.length; i++){
    if (!states.includes(members.length; i++)) {
      states.push(members[i].state)

    }
  }

  states.sort()
  select.innerHTML = `<option value="all"> All </option>
                      ${states.map(state => `<option value="${state}">${state}</option>`).join("")}`

}

function createTable(){
let tbody = document.getElementById("congress-data")
let members = data.result[0].members
let checkedParties = Array.from(document.querySelectorAll("input[name=party]:checked")).map(input => input.value)
let selectedState = document.getElementById("states").value
let table = ""

  for(let i = 0; i < members.length; i++){

    if (checkedParties.includes(members[i].party) && (selectedState == members[i].state || selectedState == "all")) {
      table += `<tr>
                  <td>${member.first_name} ${member.middle_name || ""} ${member.last_name}</td>
                  <td>${member.party}</td>
                  <td>${member.state}</td>
                  <td>${member.seniority}</td>
                  <td>${member.votes_with_party_pct+'%'}</td>`
      }
    }

    tbody.innerHTML = table
  }

  createDropdown()
  createTable()

  document.querySelectorAll("input[name=party]").forEach(input => {
  input.onchange = createTable
  })

  document.getElementById("states").onchange = createTable
