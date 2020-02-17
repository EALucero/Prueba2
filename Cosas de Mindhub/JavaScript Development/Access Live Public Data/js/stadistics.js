let live
document.getElementById("sag")!= null ? live = "https://api.propublica.org/congress/v1/113/senate/members.json" : live = "https://api.propublica.org/congress/v1/113/house/members.json"
const app = new Vue({
    el: '#app',
    data:{
		 url: live,
		 init: {
			 method:'GET',
			 headers: {"X-Api-Key": 'UWw13xqhQGs8N72PqRckDFIE8gXG6xLLSJ54MUtm'}
		 },
	   members: [],
	   nDem: 0,
	   nRep: 0,
	   nInd: 0,
	   tpDem: 0,
	   tpRep: 0,
	   tpInd: 0,
	   total: 0,
	   tpTotal: 0,
	   ptLost: 0,
	   parties: [],
	   lAtten: [],
	   current: 'list',
	},
	created(){
		fetch(this.url, this.init)
		.then(function(res){
			if(res.ok){
				return res.json()
			} else{
				throw new Error(res.status)
			}
		})
		.then(function(json){
			let data = json
			app.members = data.results[0].members
			app.parties = app.getKeyValue(app.members,"party")
			app.nDem = app.numbers(app.members,"party","tpDem","D")
			app.nRep = app.numbers(app.members,"party","tpRep","R")
			app.nInd = app.numbers(app.members,"party","tpInd","I")
			app.total = app.nDem + app.nRep + app.nInd
			app.tpTotal=	app.tpDem + app.tpRep + app.tpInd
			app.tpInd != 0 ? app.ptLost = app.tpTotal / 3 : app.ptLost = app.tpTotal / 2
			app.lAtten = app.votes(app.members)
		})
		.catch(function(error){
			console.log(error)
		})
	},
	methods:{
		getKeyValue(array,key){
			let result = []
			array.forEach(e => !result.includes(e[key]) ? result.push(e[key]) : null)

			return result
		},
		numbers(array,key,key2,letter){
			let sum = 0
			for (i = 0; i < array.length; i++) {
				if (array[i][key] == letter) {
					sum ++
					app[key2]+=array[i].votes_with_party_pct
				}
			}
			app[key2] /= sum
			return sum
		},
		votes(array){
			let attendance = []
			array.sort((a, b) => b.missed_votes_pct - a.missed_votes_pct)
			for (i = 0; i < array.length*0.1 || array[i-1].missed_votes_pct == array[i].missed_votes_pct; i++){
			attendance.push(array[i])
			}
			return atten
		},
	},
})







/*

  const tbody1 = document.querySelector("sag")
  const members = data.results[0].members

let stats = {nDem : 0, nRep : 0, nInd : 0, vDem : 0, vRep : 0, vInd : 0,
    tpDem : [], tpRep : [], tpInd : [], tpTotal : [],
    total : data.results[0].num_results,
    lLoyal : [], mLoyal : [], lAtten : [], mAtten : []}

    members.forEach(e => {

      if (e.party == "D") {
        stats.nDem++
        stats.vDem += e.votes_with_party_pct;
      }else if (e.party == "R") {
        stats.nRep++
        stats.vRep += e.votes_with_party_pct;
      }else {
        stats.nInd++
        stats.vInd += e.votes_with_party_pct;
      }

    let tpDem = parseFloat(stats.vDem/stats.nDem).toFixed(2);
    let tpRep = parseFloat(stats.vRep/stats.nRep).toFixed(2);
    let tpInd = parseFloat(stats.vInd/stats.nInd).toFixed(2);
    let tpTotal = parseFloat((stats.vDem+stats.vRep+stats.vInd)/stats.total).toFixed(2);

//está atado con alambre pero fue lo que salió...
    if (stats.nInd == "") {
      tpInd = 0
    }

    sag.innerHTML = `<tr><td class="text-left pl-3">Democrats</td><td>${stats.nDem}</td><td>${tpDem+"%"}</td></tr>
    <tr><td class="text-left pl-3">Republicans</td><td>${stats.nRep}</td><td>${tpRep+"%"}</td></tr>
    <tr><td class="text-left pl-3">Independents</td><td>${stats.nInd}</td><td>${tpInd+"%"}</td></tr>
    <tr><td class="text-left pl-3">Total</td><td>${stats.total}</td><td>${tpTotal+"%"}</td></tr>`
  })

//ordenando un toke
    members.sort((a, b) =>
    a.votes_with_party_pct - b.votes_with_party_pct)

    let count = 0
      for (i = 0; i < members.length * 0.1 + count || members[i-1].votes_with_party_pct == members[i].votes_with_party_pct; i++){

        if(members[i].votes_with_party_pct == 0.00){
          count++
        }else {
         stats.lLoyal.push(members[i])
         }
       }

    members.sort((a, b) =>
    b.votes_with_party_pct - a.votes_with_party_pct)

      for (i = 0; i < members.length * 0.1 + count || members[i-1].votes_with_party_pct == members[i].votes_with_party_pct; i++){

         if(members[i].votes_with_party_pct == 0.00){
           count++
         }else {
          stats.mLoyal.push(members[i])
          }
        }

    members.sort((a, b) =>
    a.missed_votes_pct - b.missed_votes_pct)
      for (i = 0; i < members.length * 0.1 + count || members[i-1].missed_votes_pct == members[i].missed_votes_pct; i++){

         if(members[i].missed_votes_pct == 0.00){
           count++
         }else {
          stats.lAtten.push(members[i])
          }
        }

    members.sort((a, b) =>
    b.missed_votes_pct - a.missed_votes_pct)
      for (i = 0; i < members.length * 0.1 + count || members[i-1].missed_votes_pct == members[i].missed_votes_pct; i++){

         if(members[i].missed_votes_pct == 0.00){
           count++
         }else {
          stats.mAtten.push(members[i])
          }
        }

//las tablillas
       if(document.getElementById("lower") != null){

         const table2 = document.getElementById("lower")
         for (i = 0; i < stats.lAtten.length; i++) {
            let row2 = table2.insertRow(-1);

            if (stats.lAtten[i].url == "") {
              row2.innerHTML=`<td class="text-left pl-4">${stats.lAtten[i].first_name} ${stats.lAtten[i].middle_name || ""} ${stats.lAtten[i].last_name}</td>
              <td>${stats.lAtten[i].missed_votes}</td>
              <td>${stats.lAtten[i].missed_votes_pct+"%"}</td>`
            }else {
              row2.innerHTML=`<td class="text-left pl-4"><a href="${stats.lAtten[i].url}">${stats.lAtten[i].first_name} ${stats.lAtten[i].middle_name || ""} ${stats.lAtten[i].last_name}<a></td>
              <td>${stats.lAtten[i].missed_votes}</td>
              <td>${stats.lAtten[i].missed_votes_pct+"%"}</td>`
            }
           }

         const table3 = document.getElementById("most")
         for (i = 0; i < stats.mAtten.length; i++) {
            let row3 = table3.insertRow(-1);

            if (stats.mAtten[i].url == "") {
              row3.innerHTML=`<td class="text-left pl-4">${stats.mAtten[i].first_name} ${stats.mAtten[i].middle_name || ""} ${stats.mAtten[i].last_name}</td>
              <td>${stats.mAtten[i].missed_votes}</td>
              <td>${stats.mAtten[i].missed_votes_pct+"%"}</td>`
            }else {
              row3.innerHTML=`<td class="text-left pl-4"><a href="$stats.mAtten[i].url}">${stats.mAtten[i].first_name} ${stats.mAtten[i].middle_name || ""} ${stats.mAtten[i].last_name}<a></td>
              <td>${stats.mAtten[i].missed_votes}</td>
              <td>${stats.mAtten[i].missed_votes_pct+"%"}</td>`
            }
           }
         }else{

           const table4 = document.getElementById("lloyal")
           for (i = 0; i < stats.lLoyal.length; i++) {
              let row4 = table4.insertRow(-1);

              if (stats.lLoyal[i].url == "") {
                row4.innerHTML=`<td class="text-left pl-4">${stats.lLoyal[i].first_name} ${stats.lLoyal[i].middle_name || ""} ${stats.lLoyal[i].last_name}</td>
                <td>${(stats.lLoyal[i].votes_with_party_pct * stats.lLoyal[i].total_votes/100).toFixed(0)}</td>
                <td>${stats.lLoyal[i].votes_with_party_pct+"%"}</td>`
              }else {
                row4.innerHTML=`<td class="text-left pl-4"><a href="${stats.lLoyal[i].url}">${stats.lLoyal[i].first_name} ${stats.lLoyal[i].middle_name || ""} ${stats.lLoyal[i].last_name}<a></td>
                <td>${(stats.lLoyal[i].votes_with_party_pct * stats.lLoyal[i].total_votes/100).toFixed(0)}</td>
                <td>${stats.lLoyal[i].votes_with_party_pct+"%"}</td>`
              }
             }

           const table5 = document.getElementById("mloyal")
           for (i = 0; i < stats.mLoyal.length; i++) {
              let row5 = table5.insertRow(-1);

              if (stats.mLoyal[i].url == "") {
                row5.innerHTML=`<td class="text-left pl-4">${stats.mLoyal[i].first_name} ${stats.mLoyal[i].middle_name || ""} ${stats.mLoyal[i].last_name}</td>
                <td>${(stats.mLoyal[i].votes_with_party_pct * stats.mLoyal[i].total_votes/100).toFixed(0)}</td>
                <td>${stats.mLoyal[i].votes_with_party_pct+"%"}</td>`
              }else {
                row5.innerHTML=`<td class="text-left pl-4"><a href="${stats.mLoyal[i].url}">${stats.mLoyal[i].first_name} ${stats.mLoyal[i].middle_name || ""} ${stats.mLoyal[i].last_name}<a></td>
                <td>${(stats.mLoyal[i].votes_with_party_pct * stats.mLoyal[i].total_votes/100).toFixed(0)}</td>
                <td>${stats.mLoyal[i].votes_with_party_pct+"%"}</td>`
              }
             }
           }

//Api key: UWw13xqhQGs8N72PqRckDFIE8gXG6xLLSJ54MUtm
*/
