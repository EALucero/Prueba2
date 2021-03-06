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
	   lLoyal: [],
     mLoyal: [],
     lAtten: [],
     mAtten: [],
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
      app.tpTotal =	app.tpDem + app.tpRep + app.tpInd
			app.tpInd != 0 ? app.ptLost = app.tpTotal / 3 : app.ptLost = app.tpTotal / 2
      app.votes(app.members)
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
      let count = 0

			let lLoyal = []
			array.sort((a, b) => a.votes_with_party_pct - b.votes_with_party_pct)
			for (i = 0; i < array.length*0.1 || array[i-1].votes_with_party_pct == array[i].votes_with_party_pct; i++){
        if(array[i].votes_with_party_pct == 0.00){
          count++
        }else {
         lLoyal.push(array[i])
         }
			}
			this.lLoyal = lLoyal

      let mLoyal = []
			array.sort((a, b) => b.votes_with_party_pct - a.votes_with_party_pct)
			for (i = 0; i < array.length*0.1 || array[i-1].votes_with_party_pct == array[i].votes_with_party_pct; i++){
        if(array[i].votes_with_party_pct == 0.00){
          count++
        }else {
         mLoyal.push(array[i])
         }
			}
			this.mLoyal = mLoyal

      let lAtten = []
			array.sort((a, b) => a.missed_votes_pct - b.missed_votes_pct)
			for (i = 0; i < array.length*0.1 || array[i-1].missed_votes_pct == array[i].missed_votes_pct; i++){
        if(array[i].missed_votes_pct == 0.00){
          count++
        }else {
         lAtten.push(array[i])
         }
			}
			this.lAtten = lAtten

      let mAtten = []
			array.sort((a, b) => b.missed_votes_pct - a.missed_votes_pct)
			for (i = 0; i < array.length*0.1 || array[i-1].missed_votes_pct == array[i].missed_votes_pct; i++){
        if(array[i].missed_votes_pct == 0.00){
          count++
        }else {
         mAtten.push(array[i])
         }
			}
			this.mAtten = mAtten
		}
	}
})
