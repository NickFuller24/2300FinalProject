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
  const cId = cKey + professor + school;

  // //------------Example of using SELECT to get data from DB------------
  // const sqlClassCheck = 
  // "SELECT cKey, professor, school from class";
  // db.query(sqlClassCheck, (err, result) => {
  // const resultArray = Object.values(JSON.parse(JSON.stringify(result)));
  // if(resultArray.length != 0){console.log(resultArray[0].cKey);}
  // });

  //Calls MySql to insert respective CLASS if not already existing
  const sqlInsertClass = 
  "INSERT INTO class (cId, cKey, cTitle, professor, dept, school) VALUES (?,?,?,?,?,?)";
  db.query(sqlInsertClass, [cId, cKey, classTitle, professor, dept, school], (err, result) => {
    if (err){
      console.log(err);
    }
  });

  //Calls to MySQL to insert respective MATERIAL (must have existing CLASS to execute successfully)
  const sqlInsertMaterial = 
  "INSERT INTO material (cId, type, mTitle, grade, semester, year, PDF) VALUES (?,?,?,?,?,?,?)";
  db.query(sqlInsertMaterial, [cId, type, title, grade, semester, year, PDF], (err, result) => {
    if (err){
      console.log(err);
    }
  });
 });

 app.post("/api/insertStudent", (req, res)=> {
  const name = req.body.name;
  const major = req.body.major;
  const email = req.body.email;
  const password = req.body.password;
  const sid = req.body.sid;

  //Calls MySql to insert respective STUDENT
  const sqlInsertClass = 
  "INSERT INTO student (sId, fullName, major, email, pswd) VALUES (?,?,?,?,?)";
  db.query(sqlInsertClass, [sid, name, major, email, password], (err, result) => {
    if (err){
      console.log(err);
    }
  });
 });

 //Sending db data relating to material and class relations to front end
 app.get("/api/loadFiles", (req, res)=> {
  const sqlMaterialSelect = 
  "SELECT * FROM MATERIAL INNER JOIN CLASS ON MATERIAL.cId=CLASS.cId;";
  db.query(sqlMaterialSelect, (err, results, fields) => {
    if(err) throw err;
    res.send(results);
  });
 });


app.listen(3001, () => {
  console.log("running on port 3001");
});