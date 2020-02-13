const express = require('express');
const app = express();
const axios = require("axios");

app.get('/', (req, res, next) => {
    axios.get("http://localhost:8081/pong").then((response) => {
      console.log(response.data);
    });
    res.json("pong");
});

app.listen(4567, (res) => {
  console.log('Listening on port 4567.');
});
