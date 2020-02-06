const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require('cors');
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function() {

console.log(" SERVER is now open on " + PORT + " \n enjoy your visit");


});

// get route for react express

app.get('/express_backend', (req,res)=>{
res.send({express: " Your backend is connected to REACT"})
});