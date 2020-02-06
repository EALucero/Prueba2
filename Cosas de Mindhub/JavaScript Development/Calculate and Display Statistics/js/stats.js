  const tbody1 = document.querySelector("sag")
  const members = data.results[0].members//.filter(e => e.total_votes !=0)

    let nDem = 0;
    let nRep = 0;
    let nInd = 0;
    let vDem = 0;
    let vRep = 0;
    let vInd = 0;
    let tpDem = [];
    let tpRep = [];
    let tpInd = [];
    let tptotal = [];
    let total = data.results[0].num_results;

    members.forEach(e => {

  //    if (e.party == "D" || e.party == "R" || e.party == "I")

      if (e.party == "D") {
        nDem++
        vDem += e.votes_with_party_pct;
      }else if (e.party == "R") {
        nRep++
        vRep += e.votes_with_party_pct;
      }else {
        nInd++
        vInd += e.votes_with_party_pct;
      }

    let tpDem = parseFloat(vDem/nDem).toFixed(2);
    let tpRep = parseFloat(vRep/nRep).toFixed(2);
    let tpInd = parseFloat(vInd/nInd).toFixed(2);
    let tptotal = parseFloat((vDem+vRep+vInd)/total).toFixed(2);

    sag.innerHTML = `<tr><td>Democrats</td><td>${nDem}</td><td>${tpDem}</td></tr>
    <tr><td>Republicans</td><td>${nRep}</td><td>${tpRep}</td></tr>
    <tr><td>Independents</td><td>${nInd}</td><td>${tpInd}</td></tr>
    <tr><td>Total</td><td>${total}</td><td>${tptotal}</td></tr>`
    })
/*
//Atendance


const tbody2 = document.getElementById("llbp")

lLoy = 0;


 lLoy.filter = members.sort(function(a,b) {a.votes_with_party_pct - b.votes_against_party_pct}


})

let lLn = (members.length*0.1).toFixed(1);
let sArray = members.slice().sort(function (a,b) {return (a-b)}).slice(0, lLn)

  lLn.forEach (e => {


/*for (var i = 0; i < members.length; i++) {
  members[i]

let lLoyal = members[i].votes_with_party_pct;


let lLn = lLoyal.length;
let sArray = lLn.sort(function (a,b) {
  return (a-b)})

let lL = sArray.length;
let lL10 = (Math.round(sArray.length*10/100));

let lMin = sArray[lL-lL10];
let lMax = sArray[lL-1];

console.log(lMin);
console.log(lMax);
}

mPercent: function (array, key, fArray) {
  for (var i = 0; i < array.length; i++) {
    array[i]
    if (i < array.length/10) {
      fArray.push(array[i]);
    }else if (array[i][key] == array[i-1][key]) {
      fArray.push(array[i]);
    }else {
      break
    }
    return fArray
  }
}
*/


//const tbody = document.querySelector("mltp")
