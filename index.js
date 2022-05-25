const data = [
    {
        "name":"John",
        "age":"22",
        "id":"1"
    },
    {
        "name":"Jack",
        "age":"22",
        "id":"2"
    },
    {
        "name":"Smith",
        "age":"22",
        "id":"3"
    },
    {
        "name":"Martin",
        "age":"22",
        "id":"4"
    },
    {
        "name":"Rosalia",
        "age":"22",
        "id":"5"
    }
];


const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send(data);
});





app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
