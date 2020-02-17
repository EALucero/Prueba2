let live
document.getElementById("table-data") != null ? live ="https://api.propublica.org/congress/v1/113/senate/members.json" : live ="https://api.propublica.org/congress/v1/113/house/members.json"
const app = new Vue({
    el: '#app',
    data:{
		 url: live,
		 init: {
			 method:'GET',
			 headers: {"X-Api-Key": 'UWw13xqhQGs8N72PqRckDFIE8gXG6xLLSJ54MUtm'}
		 },
	   members: [],
	   parties: [],
	   states:[],
	   stateAct: "all",
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
			app.states = app.getKeyValue(app.members,"state")
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
		}
	},
	computed:{
		filter(){
			return this.members.filter(e => app.parties.includes(e.party) && (e.state == app.stateAct || app.stateAct == "all"))
		}
	}
})












/*
const table = new Vue ({
  el: '#table',
  data: {
    senBers : "https://api.propublica.org/congress/v1/113/senate/members.json",
    houBers : "https://api.propublica.org/congress/v1/113/house/members.json",
    init : {
      method:'GET',
      headers:{'X-API-Key':'UWw13xqhQGs8N72PqRckDFIE8gXG6xLLSJ54MUtm'}
    },
    filtLiar: {states : [], select : document.getElementById("states"), members : data.result[0].members},
    stats : {nDem : 0, nRep : 0, nInd : 0, vDem : 0, vRep : 0, vInd : 0,
        tpDem : [], tpRep : [], tpInd : [], tpTotal : [],
        total : data.results[0].num_results,
        lLoyal : [], mLoyal : [], lAtten : [], mAtten : []}
    },

  created(){
        fetch(data.senBers, data.init)
          .then(function(res){
            if(res.ok){
              return res.json()
            } else{
              throw new Error(res.status)
            }
          })
          .then(function(senate){
            data = json
            gallery(data)
          })
          .catch(function(error){
            console.log(error)
          })

          console.log("hola")

          function gallery(json){
            json.forEach(e => {
              let img = new Image()
              img.src = e.thumbnailUrl

              let div = document.createElement('DIV')

              div.appendChild(img)

              document.getElementById("tbody").appendChild(div)
            })
          }
        }

  })
*/
