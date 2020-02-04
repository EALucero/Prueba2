const members = data.results[0].members
const tbody = document.querySelector("sag")

//object
/*let statics = {
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
*/

    let votes_with_party_pct = "%";
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
    let total = data.results[0].num_results

    members.forEach(e => {

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
  //  let tptotal = parseFloat((vDem+vRep+vInd)/total).tofixed(2);

    sag.innerHTML = `<tr><td>Democrats</td><td>${nDem}</td><td>${vDem}</td></tr>
    <tr><td>Republicans</td><td>${nRep}</td><td>${vRep}</td></tr>
    <tr><td>Independents</td><td>${nInd}</td><td>${vInd}</td></tr>
    <tr><td>Total</td><td>${total}</td><td>${tptotal}</td></tr>`

  })
