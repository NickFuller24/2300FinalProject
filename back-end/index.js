const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");
// import * as data from '../front-end/src/HomePage/test.json';

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "KChuskers13?",
  database: "examdb"
});

// Grabs db insertion info from front end
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insertFile", (req, res)=> {
  const school = req.body.school;
  const professor = req.body.professor;
  const dept = req.body.department;
  const cKey = req.body.classCode;
  const type = req.body.type;
  const title = req.body.title;
  const grade = req.body.grade;
  const semester = req.body.semester;
  const year = req.body.year;
  const PDF = req.body.PDF;
  const classTitle = cKey;

  // //------------Example of using SELECT to get data from DB------------
  // const sqlClassCheck = 
  // "SELECT cKey, professor, school from class";
  // db.query(sqlClassCheck, (err, result) => {
  // const resultArray = Object.values(JSON.parse(JSON.stringify(result)));
  // if(resultArray.length != 0){console.log(resultArray[0].cKey);}
  // });

  //Calls MySql to insert respective CLASS if not already existing
  const sqlInsertClass = 
  "INSERT INTO class (cKey, title, professor, dept, school) VALUES (?,?,?,?,?)";
  db.query(sqlInsertClass, [cKey, classTitle, professor, dept, school], (err, result) => {
    if (err){
      console.log(err);
    }
    else {
      console.log("successfully inserted class");
    }
  });

  //Calls to MySQL to insert respective MATERIAL (must have existing CLASS to execute successfully)
  const sqlInsertMaterial = 
  "INSERT INTO material (cKey, type, title, grade, semester, year, PDF) VALUES (?,?,?,?,?,?,?)";
  db.query(sqlInsertMaterial, [cKey, type, title, grade, semester, year, PDF], (err, result) => {
    if (err){
      console.log(err);
    }
    else {
      console.log("successfully inserted material");
    }
  });
 });

// app.get("/api/getAllFiles", (req, res)=> {
//   const sqlSelectFiles = "SELECT * FROM MATERIAL";
//   db.query(sqlSelectFiles, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       data.files = result;
//     }
//   });
// });

app.listen(3001, () => {
  console.log("running on port 3001");
});