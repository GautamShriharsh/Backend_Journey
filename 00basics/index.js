require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

const githubData = {
  "login": "GautamShriharsh",
  "id": 115351314,
  "node_id": "U_kgDOBuAfEg",
  "avatar_url": "https://avatars.githubusercontent.com/u/115351314?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/GautamShriharsh",
  "html_url": "https://github.com/GautamShriharsh",
  "followers_url": "https://api.github.com/users/GautamShriharsh/followers",
  "following_url": "https://api.github.com/users/GautamShriharsh/following{/other_user}",
  "gists_url": "https://api.github.com/users/GautamShriharsh/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/GautamShriharsh/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/GautamShriharsh/subscriptions",
  "organizations_url": "https://api.github.com/users/GautamShriharsh/orgs",
  "repos_url": "https://api.github.com/users/GautamShriharsh/repos",
  "events_url": "https://api.github.com/users/GautamShriharsh/events{/privacy}",
  "received_events_url": "https://api.github.com/users/GautamShriharsh/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 16,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2022-10-08T11:25:26Z",
  "updated_at": "2024-01-15T13:43:38Z"
}

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.get('/twitter', (req,res) => {
    res.send('xdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at the website</h1>')
})

app.get('/youtube', (req,res) => {
  res.send('<h2>Coding and learning Express</h2>')
})

app.get('/github', (req,res) => {
res.json(githubData)
})

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})