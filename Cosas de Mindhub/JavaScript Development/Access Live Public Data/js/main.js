let table = new Vue ({
  el: '#table',
  data: {
    stats : {nDem : 0, nRep : 0, nInd : 0, vDem : 0, vRep : 0, vInd : 0,
        tpDem : [], tpRep : [], tpInd : [], tpTotal : [],
        total : data.results[0].num_results,
        lLoyal : [], mLoyal : [], lAtten : [], mAtten : []}
      }
  });

let data
let senBers = "https://api.propublica.org/congress/v1/113/senate/members.json"
let houBers = "https://api.propublica.org/congress/v1/113/house/members.json"
let init = {
  method:'GET',
  headers:{'X-API-Key':'UWw13xqhQGs8N72PqRckDFIE8gXG6xLLSJ54MUtm'}
}

fetch(senBers, init)
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
