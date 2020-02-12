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
