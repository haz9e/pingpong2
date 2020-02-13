const express = require('express');
const app = express();
const axios = require("axios");

app.get('/', (req, res, next) => {

    const s1 = {
      "port": "5372",
      "hit": "ping"
    }
    axios.get("http://localhost:8081/ping", s1).then((response) => {
      console.log(response.data);
    });
    res.json("ping");
});

app.listen(5372, (res) => {
  console.log('Listening on port 5372.');
});
