const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "6864",
  database: "testdb",
  insecureAuth: true
});

// Simple code that successfully inserts into database
// app.get("/", (req, res)=> {

//   const sqlInsert = "INSERT INTO student (sId, fullName, major, email) VALUES (4, 'Sike Hawk', 'CS', 'mikeHawk@mst.edu');"
//   db.query(sqlInsert, (err, result)=> {
//     if(err) console.log(err);
//   })
  
// });


// Broken code that is supposed to grab info from front end and update db
app.use(cors);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.post("/api/insert", (req, res) => {
  const mId = req.body.mId;
  console.log(mId);
});


app.listen(3001, () => {
  console.log("running on port 3001");
});


