const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require("dotenv").config();

let mongoClient = null;


function connectoDb() {
    mongoClient = new MongoClient(process.env.MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: ServerApiVersion.v1
        }  
    );
}

connectoDb()

function getdbConnection(){
    return mongoClient
}


module.exports={
    getdbConnection,
    ObjectId
}
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });
