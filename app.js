//config
const express = require('express');
const bodyParser = require("body-parser");
const _ = require ('underscore');

//mongodb
const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017/students-db';
const client = new MongoClient(uri);

const app = express();
const port = 3000;
const jsonParser = bodyParser.json();

//students db setup
const database = client.db('students-db');
//console.log(database);
const studentCollection = database.collection('students');
//console.log(studentCollection);
studentCollection.insertMany(
    [
        {
            "Id": 1,
            "Name": "Joe",
            "StudyProgram": "ITBE",
            "Attending": true
        },
        {
            "Id": 2,
            "Name": "Maya",
            "StudyProgram": "CivilEng",
            "Attending": false
        }
    ]
);

//http functions
app.get('/', function(req, res){
    res.send('Welcome to Students DB!');
});

// app.get('/students', function(req, res){
//     const studentPromise = studentCollection.find({}).toArray();
//     studentPromise.then(function(students){
//         console.log('Students:' + students);
//         res.send(students);
//     });
// });

// app.post('/send', jsonParser, function(req, res){
//     //console.log(req.body);
//     if (req.body && req.body.student){
//         studentCollection.insertOne(req.body.student);
//         res.send({status: "OK"});
//     }else{
//         res.send({status: "NOK"});
//     }
// });

//app listen
app.listen(port);