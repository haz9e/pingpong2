const express = require('express');
const app = express();
const axios = require("axios");



app.get('/ping', async (req, res, next) => {

    const s1 = {
      "port": "4567",
      "hit": "pong"
    }
    await axios.get("http://localhost:4567", s1).then((response) => {
      // console.log(response.data);
      // res.json("ping");
      console.log("pong");
    }).catch(err => {
      console.log(err);
    });
    res.json("pong");
});




app.get('/pong', async (req, res, next) => {

    const s2 = {
      "port": "5372",
      "hit": "ping"
    }
    await axios.get("http://localhost:5372", s2).then((response) => {
      // console.log(response.data);
      // res.json("ping");
      console.log("ping");

    }).catch(err => {
      console.log(err);
    });
    res.json("ping");

    // axios.post("http://localhost:5372").then((response) => {
    //   // console.log(response.data);
    //   // res.json("pong");
    //
    // });
});

app.listen(8081, (res) => {
  console.log('Listening on port 8081.');
});
