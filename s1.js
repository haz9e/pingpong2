const express = require('express');
const app = express();
const axios = require("axios");

app.get('/', (req, res, next) => {
    axios.get("http://localhost:8081/ping").then((response) => {
      console.log(response.data);
    });
    res.json("ping");
});

app.listen(5372, (res) => {
  console.log('Listening on port 5372.');
});
