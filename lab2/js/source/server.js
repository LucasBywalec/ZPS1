const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    let sentText = "";
    let audioFile = req.query.audioFile;
    let videoFile = req.query.videoFile;

    if(audioFile != undefined)
    {
      sentText += `<audio id=audioPlayer src=` + audioFile + `> </audio>`
    }

    if(videoFile != undefined)
    {
      sentText += `<video id=videoPlayer src=` + videoFile + `> </video>`
    }
    res.send(sentText);
})

app.listen(4080)
