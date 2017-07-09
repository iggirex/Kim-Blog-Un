const express = require('express')
const app = express()
const mongodb = require('mongodb')
const ObjectID = mongodb.ObjectID
// var MongoClient = require("mongodb").MongoClient
// var Server = require("mongodb").Server

const POST_COLLECTION = "posts"

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var db;

mongodb.MongoClient.connect("mongodb://heroku_hmmslhmd:mfphckfle363of6n2esvdlclbh@ds151752.mlab.com:51752/heroku_hmmslhmd", function(err, database){
  if(err){
    console.log(err);
    process.exit(1);
  }

  db = database;
  console.log("Database connection ready");

  var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});

})

// MongoClient.connect("mongodb://heroku_hmmslhmd:mfphckfle363of6n2esvdlclbh@ds151752.mlab.com:51752/heroku_hmmslhmd", function(err, db){
//   console.log("connected to the DB")
//   test.equal(null, err);
//   test.ok(db != null);
//
//   db.collection("replicaset_mongo_client_collection").update({a:1}, {b:1}, {upsert:true}, function(err, result){
//     test.equal(null, err);
//     test.ok(1, result);
//
//     db.close();
//     test.done();
//   })
// })

// mongodb.MongoClient.connnect(process.env.MONGODB_URI, function(err, database){
//   if(err){
//     console.log(err);
//     process.exit(1);
//   }
//   db = database;
//   console.log("Database connection ready!");
//   })
// })




// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// });
