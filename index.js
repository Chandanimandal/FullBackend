//console.log("chai aur code");

//ya sab application hai Aur  server banane ke liye express ka use karte hai

require('dotenv').config();   //dotenv package use kare 
const express = require('express');
const app = express();
const port = 3000;  //maine ya sai lekai .env mai rakhai PORT=3000


const githubData = {   //github data Ak object hai ,url ka data github ke pass kare user lay

  "login": "Chandanimandal",
  "id": 215440611,
  "node_id": "U_kgDODNdc4w",
  "avatar_url": "https://avatars.githubusercontent.com/u/215440611?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Chandanimandal",
  "html_url": "https://github.com/Chandanimandal",
  "followers_url": "https://api.github.com/users/Chandanimandal/followers",
  "following_url": "https://api.github.com/users/Chandanimandal/following{/other_user}",
  "gists_url": "https://api.github.com/users/Chandanimandal/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Chandanimandal/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Chandanimandal/subscriptions",
  "organizations_url": "https://api.github.com/users/Chandanimandal/orgs",
  "repos_url": "https://api.github.com/users/Chandanimandal/repos",
  "events_url": "https://api.github.com/users/Chandanimandal/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Chandanimandal/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Chandani Mandal",
  "company": null,
  "blog": "",
  "location": "Biratnagar ",
  "email": null,
  "hireable": null,
  "bio": "“BCA student | Aspiring Software Developer | Learning Web & Mobile Development",
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 4,
  "following": 10,
  "created_at": "2025-06-09T01:57:15Z",
  "updated_at": "2026-05-23T08:08:38Z"

}



app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/twitter', (req, res) => {
res.send('Chandani aur chai')
})

app.get('/login', (req, res) => {
  res.send('<h1>please login at chai aur code</h1>')
})


app.get('/youtube', (req, res) => {
  res.send('Chandani aur chai') 
})

app.get('/github',(req, res) => {  //github ke pass kare user lay 
  res.json(githubData)   //githubData object ko json format mai convert kare
})


app.listen(process.env.PORT, () => {   //env ya use kare process.env.PORT 
  console.log(`Example app listening on port ${port}`);
})

// yahi server hai esai hi bolte hai
//profinsally tarika run commend-> npm run start
//node.js run commend-> node index.js