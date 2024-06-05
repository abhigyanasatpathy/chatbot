var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");
var app = Express();
app.use(cors());
app.use(Express.json()); // Add this line to parse JSON-encoded bodies
var CONNECTION_STRING = "mongodb+srv://admin:admin123@cluster0.1hq6iaj.mongodb.net/todoCollection?retryWrites=true&w=majority&appName=Cluster0";
var DATABASENAME = "todoappdb";
var database;
app.listen(3000, () => {
    MongoClient.connect(CONNECTION_STRING, (error, client) => {
        if (error) {
            console.error("MongoDB connection error:", error);
            return;
            
        }
        database = client.db(DATABASENAME);
        console.log("MongoDB Connection Successful");
    });
});
app.get('/api/todoapplication/GetNote', (request, response) => {
    database.collection("todoappcollection").find({}).toArray((error, result) => {
        response.send(result);
    });
   
        
});
app.get('/api/todoapplication/GetBiodata', (request, response) => {
    database.collection("biodatacollection").find({}).toArray((error, result) => {
        response.send(result);
    });
});
app.post('/api/todoapplication/submitContact', (request, response) => {
    const { name, email, phone, message } = request.body; // Parse request body
    
    // Insert the contact data into the database
    database.collection("contactCollection").insertOne({
        name,
        email,
        phone,
        message
    }, (error, result) => {
        if (error) {
            console.error("Error inserting contact data:", error);
            response.status(500).send("Error inserting contact data");
            return;
        }
        response.status(200).send("Contact data inserted successfully");
    });
});
