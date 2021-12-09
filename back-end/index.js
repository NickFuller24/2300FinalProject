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
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert", (req, res)=> {
  const school = req.body.school;
  const professor = req.body.professor;
  const dept = req.body.department;
  //const mId = req.body.mId;
  const cKey = req.body.classCode;
  const type = req.body.type;
  const title = req.body.title;
  const grade = req.body.grade;
  const semester = req.body.semester;
  const year = req.body.year;
  const PDF = req.body.PDF;

  //Setting the date as the mId doesn't work, so remove later when solution is found
  const mId = "0";
  

  // For some reason, only the insertClass or the insertMaterial can be executed
  // (not together). I have no idea why this is, but that is why insertClass is commented out.

  // Both work when ran seperately, but together they throw an error saying you can't set
  // headers after they are sent to client

  //------------In the future, create a query to run beforehand to check if class exists!!!------------

  // //Calls MySql to insert respective CLASS
  // const sqlInsertClass = 
  // "INSERT INTO class (cKey, title, professor, dept, school) VALUES (?,?,?,?,?)";
  // db.query(sqlInsertClass, [cKey, title, professor, dept, school], (err, result)=> {
  //   if (err){
  //     console.log(err);
  //   } else {
  //     res.send("Values Inserted");
  //   }
  // });

  //Calls to MySQL to insert respective MATERIAL (must have existing CLASS before ran)
  const sqlInsertMaterial = 
  "INSERT INTO material (mId, cKey, type, title, grade, semester, year, PDF) VALUES (?,?,?,?,?,?,?,?)";
  db.query(sqlInsertMaterial, [mId, cKey, type, title, grade, semester, year, PDF], (err, result)=> {
    if (err){
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  });
 });

app.listen(3001, () => {
  console.log("running on port 3001");
});