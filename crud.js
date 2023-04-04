const express = require("express");
const { getdbConnection,ObjectId } = require("./mongodb.js");
const fs =require('fs')

const app = express.Router();
app.use(express.json( ))


app.get("/",async(req, res) => {

    const mongoclient = getdbConnection();
    const collection = mongoclient.db("sample_mflix").collection("movies");
    const result = await collection.find(7).toArray();
    res.send(result);
})

app.post("/",async(req, res) => {
    console.log(req.body)

    const mongoclient = getdbConnection();
    const collection = mongoclient.db("sample").collection("users");
    const result = await collection.insertOne({...req.body});

    res.json({result})
})

app.put("/:id", async(req, res) => {
    const id =req.params?.id;

    const mongoclient = getdbConnection();
    const collection = mongoclient.db("sample").collection("users");
    const result = await collection.updateOne({_id : new ObjectId(id)}, {$set:{...req.body}}
    );
    res.json({ message: "put success",result:result })
})

app.delete("/:id", async(req, res) => {
    const id =req.params?.id;
    const mongoclient = getdbConnection();
    const collection = mongoclient.db("sample").collection("users");
    const result = await collection.deleteOne({_id : new ObjectId(id)});
   
    res.json({ message: "deleted successfully",result })
})


module.exports = app;