const templates = {
    home: `<div id="home">
                <h2>Welcome {{user.displayName}}</h2>
                <h3>Upcoming Matches</h3>
                <div class="card" v-for='match in nextMatches(date.getMonth() + 1, date.getDate())'>
                    <p>{{match.date}}</p>
                    <p>{{match.team1}} vs {{match.team2}}</p>
                    <p>at {{match.time}}</p>
                </div>
            </div>`,
    schedule: `<div id="schedule">
          <template v-if="showInfo">
            <button @click="showInfo = false">Back</button>
            <match-info :match="match" :user="user"></match-info>
          </template>
          <template v-else>
            <ul>
              <li v-for="match in matches">
                <span>{{match.date}}</span> <span>{{match.team1}} vs {{match.team2}}</span>
                <button class="btn" @click="matchInfo(match)">+</button>
              </li>
            </ul>
          </template>

            </div>`,
    contact: `<div id="contact">
                <h4>Hi! Please email us at:</h4>
                <p>or leave a comment</p>
                <textarea>

                </textarea>
                <button>Submit</button>
            </div>`,
    matchInfo: `<div>
            <div class="card">
              <p>{{match.team1}} vs {{match.team2}}</p>
              <p>{{match.date}} at {{match.time}}</p>
              <p>{{match.location}}</p>
            </div>
            <div class="forum">
              <div v-for="(value,key) in comments" class="commentBubble">
                <p>{{value.username}}:</p>
                <p>{{value.post}}</p>
              </div>
              <div>
                <input type="text" id="comment">
                <button @click="comment(match.id)">Comment</button>
              </div>
            </div>

          </div>`
}



let app = new Vue({
    el: '#app',
    data: {
        view : 'home',
        schedule: {},
        user: 'guest',
    },
    methods: {
        login(){
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then(function(result){

                firebase.database().ref('schedule/').once('value')
                .then(function(snapshot){
                    app.schedule = snapshot.val()
                    app.user = result.user
                })
            })
            .catch(function(error){
                console.log(error)
            })
        },
        logout(){
            firebase.auth().signOut()
            .then(function(){
                app.user = 'guest'
                app.schedule = {}
            })
        }
    },
    components: {
        home: {
            props: ['user'],
            data: function(){
                return {
                    date: new Date()
                }
            },
            methods: {
                nextMatches(month, day){
                    let nextMatches = []

                    for(let i = 0; i < 7; i++){
                        let temp = 0

                        if(day + i > 31){
                            day = 0
                            month++
                            temp = i - 1
                        }

                        if(app.schedule[month][day + i - temp]){
                            for(match in app.schedule[month][day + i]){
                                nextMatches.push(app.schedule[month][day + i][match])
                            }
                        }


                    }

                    return nextMatches
                }
            },
            template: templates.home
        },
        schedule: {
            props: ['user'],
            data: function(){
              return{
                showInfo: false,
                match: {}
              }
            },
            methods:{
              matchInfo(match){
                this.showInfo = true
                this.match = match
              }
            },
            computed:{
                matches(){
                    let matches = []

                    for(month in app.schedule){
                        for(date in app.schedule[month]){
                            for(match in app.schedule[month][date]){
                                matches.push(app.schedule[month][date][match])
                            }
                        }
                    }

                    return matches
                }
            },
            template: templates.schedule,
            components: {
              'match-info': {
                props: ['user','match'],
                data:function(){
                  return {
                    comments: []
                  }
                },
                created(){
                  this.getComments(this.match.id)
                },
                methods: {
                   getComments(matchId){

                    let self = this

                    firebase.database().ref(`forum/${matchId}`)
                    .on('child_added', function(snapshot){
                      self.comments.push(snapshot.val())

                    })

                  },
                  comment(matchId){
                    let input = document.getElementById('comment')
                    let newKey = firebase.database().ref(`forum/${matchId}/`).push().key
                    let update = {}
                    update[`forum/${matchId}/${newKey}`] = {
                      uid: this.user.uid,
                      username: this.user.displayName,
                      email: this.user.email,
                      post: input.value,
                      match: this.match.id
                    }

                    firebase.database().ref().update(update)

                    input.value = ""
                  }
                },
                template: templates.matchInfo
              }
            }
        },
        contact: {
            props: ['user'],
            template: templates.contact
        }
    }
})
