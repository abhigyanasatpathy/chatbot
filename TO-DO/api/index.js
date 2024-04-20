var Express = require("express");
var MongoClient = require("mongodb").MongoClient;

var cors=require("cors");
const multer=require("multer");

var app=Express();
app.use(cors());

var CONNECTION_STRING="mongodb+srv://admin:admin123@cluster0.1hq6iaj.mongodb.net/todoCollection?retryWrites=true&w=majority&appName=Cluster0";






var DATABASENAME="todoappdb";
var database;

app.listen(5038, () => {
    MongoClient.connect(CONNECTION_STRING, (error, client) => {
        if (error) {
            console.error("MongoDB connection error:", error);
            return;
        }
        database = client.db(DATABASENAME);
        console.log("MongoDB Connection Successful");
    });
});

app.get('/api/todoapp/GetNotes',(request,response)=>{
    database.collection("todoappcollection").find({}).toArray((error,result)=>{
        response.send(result);
    });
});











