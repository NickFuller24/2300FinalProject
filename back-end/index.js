const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "6864",
  database: "examdb"
});

// Broken code that is supposed to grab post from front end and update db
app.use(cors);
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert", (req, res)=> {
  //const mId = req.body.mId;
  const type = req.body.type;
  const title = req.body.title;
  const grade = req.body.grade;
  const semester = req.body.semester;
  const year = req.body.year;
  //const PDF = req.body.PDF;

  //Remove later
  const mId = 0;
  const cKey = 0;
  const PDF = "TEST";
  
  //Following lines successfully put into database if axios were to work
  const sqlInsert = 
  "INSERT INTO material (mId, cKey, type, title, grade, semester, year, PDF) VALUES (?,?,?,?,?,?,?,?)";
  db.query(sqlInsert, [mId, cKey, type, title, grade, semester, year, PDF], (err, result)=> {
    console.log(err);
  });
 });


// // Simple code that successfully inserts into database
// app.get("/", (req, res)=> {
//   const mId = 0;
//   const cKey = 0;
//   const type = "Test";
//   const title = "Biggest Exam of Your Life";
//   const grade = "98";
//   const semester = "Fall";
//   const year = "2021";
//   const PDF = "TEST";

//   const sqlInsert = 
//   "INSERT INTO material (mId, cKey, type, title, grade, semester, year, PDF) VALUES (?,?,?,?,?,?,?,?)";
//   db.query(sqlInsert, [mId, cKey, type, title, grade, semester, year, PDF], (err, result)=> {
//     console.log(err);
//   });
// });

app.listen(3001, () => {
  console.log("running on port 3001");
});