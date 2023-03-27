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
    let sentText = ``;
    let audioFile = req.query.audioFile;
    let videoFile = req.query.videoFile;
    let imgFile = req.query.imgFile;

    if(audioFile != undefined)
    {
      sentText += `<audio id=audioPlayer src="${audioFile}"> </audio>`
      sentText += 
      `<script>
        function cancelVideo(){
          let element = document.getElementById('videoPlayer');
          element.src = "cancel.mp4";
        }`
    }

    if(videoFile != undefined)
    {
      sentText += `<video id=videoPlayer src="${videoFile}"> </video>`
      sentText += 
      `function cancelAudio(){
          let element = document.getElementById('audioPlayer');
          element.src = "cancel.mp3";
        }
      </script>`
    }

    if(imgFile != undefined){
      sentText +=  `<img id="posterImage" src="${imgFile}"></img>`
    }

    sentText += `<button id="videoCancel" onClick="cancelVideo()">VIDEO</button>`
    sentText += `<button id="audioCancel" onClick="cancelAudio()">AUDIO</button>`

    res.send(sentText);
})

app.listen(4080)
