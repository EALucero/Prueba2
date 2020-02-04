const members = data.results[0].members
const tbody = document.querySelector("tbody")

//object
let statics = {
      nDem: 0,
      nRep: 0,
      nInd: 0,
      total: 0,
      pDem: 0,
      pRep: 0,
      pInd: 0,
      leastComp: [],
      mostComp: [],
      leastLoyal: [],
      mostLoyal: []
    }

//porcentaje
function calcule(data){

  let members = data;
  let attArrray = [];
  let loyArray = [];
  let states = [];
  let vParty = "";
  let nDem = 0;
  let nRep = 0;
  let nInd = 0;
  let pDem = 0;
  let pRep = 0;
  let pInd = 0;
  let total = 0;
  let pSupr = [];

  for (let i = 0; i <members.length; i++) {

    vParty = members[i].party;
    attArray[i] = members[i].missed_votes_pct;
    loyArray[i] = members[i].votes_with_party_pct;
    states[i] = members[i].state;


      if (vParty == "D") {
        nDem++
        console.log(nDem);
        row.innerHTML = `<td>${member.nDem}</td>
        <td>${member.votes_with_party_pct+'%'}</td>`
      }else if (vParty == "R") {
        nRep++
        console.log(nRep)
        row.innerHTML = `<td>${member.nRep}</td>
        <td>${member.votes_with_party_pct+'%'}</td>`
      }else {
        nInd++
        console.log(nInd)
        row.innerHTML = `<td>${member.nInd}</td>
        <td>${member.votes_with_party_pct+'%'}</td>`
      }
    }
  }

let total = nDem+nRep+nInd;
let tpDem = parsefloat(nDem*100/total)
let tpRep = parsefloat(nRep*100/total)
let tpInd = parsefloat(nInd*100/total)
