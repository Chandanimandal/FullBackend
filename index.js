//console.log("chai aur code");

//ya sab application hai Aur ko server banane ke liye express ka use karte hai

require('dotenv').config();   //dotenv package use kare 
const express = require('express');
const app = express();
const port = 3000;  //maine ya sai lekai .env mai rakhai PORT=3000

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


app.listen(process.env.PORT, () => {   //env ya use kare process.env.PORT 
  console.log(`Example app listening on port ${port}`);
})

// yahi server hai esai hi bolte hai
//profinsally tarika run commend-> npm run start
//node.js run commend-> node index.js