  const tbody1 = document.querySelector("sag")
  const members = data.results[0].members

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

    sag.innerHTML = `<tr><td>Democrats</td><td>${nDem}</td><td>${tpDem+"%"}</td></tr>
    <tr><td>Republicans</td><td>${nRep}</td><td>${tpRep+"%"}</td></tr>
    <tr><td>Independents</td><td>${nInd}</td><td>${tpInd+"%"}</td></tr>
    <tr><td>Total</td><td>${total}</td><td>${tptotal+"%"}</td></tr>`
    })


    let lLoyal = [];
    let mLoyal = [];
    let lAtten =[];
    let mAtten = [];

    members.sort((a, b) => a.votes_with_party_pct - b.votes_with_party_pct)

      for (i = 0; i < members.length*0.1 || members[i-1].votes_with_party_pct == members[i].votes_with_party_pct; i++){
	       lLoyal.push(members[i])
       }

    members.sort((a, b) => b.votes_with_party_pct - a.votes_with_party_pct)

      for (i = 0; i < members.length*0.1 || members[i-1].votes_with_party_pct == members[i].votes_with_party_pct; i++){
	       mLoyal.push(members[i])
       }

    members.sort((a, b) => b.missed_votes_pct - a.missed_votes_pct)

      for (i = 0; i < members.length*0.1 || members[i-1].missed_votes_pct == members[i].missed_votes_pct; i++){
	       lAtten.push(members[i])
       }

    members.sort((a, b) => a.missed_votes_pct - b.missed_votes_pct)

      for (i = 0; i < members.length*0.1 || members[i-1].missed_votes_pct == members[i].missed_votes_pct; i++){
         mAtten.push(members[i])
        }

       if(document.getElementById("matten") != null){
         const table2 = document.getElementById("matten")

         for (i = 0; i < lAtten.length; i++) {
	          let row2 = table2.insertRow(-1);
	           row2.innerHTML=`<td><a href="${lAtten[i].url}">${lAtten[i].first_name} ${lAtten[i].last_name}<a></td>
             <td>${lAtten[i].missed_votes}</td>
             <td>${lAtten[i].missed_votes_pct+"%"}</td>`
           }

         const table3 = document.getElementById("latten")

         for (i = 0; i < mAtten.length; i++) {
	          let row3 = table3.insertRow(-1);
	           row3.innerHTML=`<td><a href="${mAtten[i].url}">${mAtten[i].first_name} ${mAtten[i].last_name}<a></td>
             <td>${mAtten[i].missed_votes}</td>
             <td>${mAtten[i].missed_votes_pct+"%"}</td>`
           }
         }else{
           const table4 = document.getElementById("mloyal")

           for (i = 0; i < mLoyal.length; i++) {
	            let row4 = table4.insertRow(-1);
	             row4.innerHTML=`<td><a href="${mLoyal[i].url}">${mLoyal[i].first_name} ${mLoyal[i].last_name}<a></td>
               <td>${(lLoyal[i].votes_with_party_pct * mLoyal[i].total_votes/100).toFixed(0)}</td>
               <td>${mLoyal[i].votes_with_party_pct+"%"}</td>`
             }

           const table5 = document.getElementById("lloyal")

           for (i = 0; i < lLoyal.length; i++) {
	            let row5 = table5.insertRow(-1);
	             row5.innerHTML=`<td><a href="${lLoyal[i].url}">${lLoyal[i].first_name} ${lLoyal[i].last_name}<a></td>
               <td>${(lLoyal[i].votes_with_party_pct * lLoyal[i].total_votes/100).toFixed(0)}</td>
               <td>${lLoyal[i].votes_with_party_pct+"%"}</td>`
             }
           }
