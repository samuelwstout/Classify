const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    console.log('hi')
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'a45eb12484d24c4199050bdefee6d24b',
        clientSecret: 'f9765ecc897c46a8998cd3508002ae86',
        refreshToken,
    })

spotifyApi.refreshAccessToken()
.then(data => {
        res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in,
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'a45eb12484d24c4199050bdefee6d24b',
        clientSecret: 'f9765ecc897c46a8998cd3508002ae86'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    })
    .catch(() => {
        res.sendStatus(400)
    })
})

app.listen(3001)