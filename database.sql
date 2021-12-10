#Code written and executed through MySQL Editor

DROP DATABASE IF EXISTS `examdb`;
CREATE DATABASE `examdb`;
USE `examdb`;

CREATE TABLE CLASS (
	cId VARCHAR(80) NOT NULL,
    cKey VARCHAR(40) NOT NULL,
    professor VARCHAR(40) NOT NULL,
	cTitle VARCHAR(40) NOT NULL,
    dept VARCHAR(40) NOT NULL,
    school VARCHAR(40) NOT NULL,
    PRIMARY KEY (cId)
);

CREATE TABLE STUDENT (
	sId VARCHAR(40) NOT NULL UNIQUE,
    fullName VARCHAR(40) NOT NULL,
    major VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    pswd VARCHAR(40) NOT NULL,
    PRIMARY KEY (sId)
);

CREATE TABLE MATERIAL (
	mId INT NOT NULL AUTO_INCREMENT,
    cId VARCHAR(80) NOT NULL,
    `type` VARCHAR(20) NOT NULL,
    mTitle VARCHAR (40) NOT NULL,
    grade VARCHAR(40) NOT NULL,
    semester VARCHAR(40) NOT NULL,
    `year` VARCHAR(40) NOT NULL,
    PDF BLOB NOT NULL,
    PRIMARY KEY (mId),
    FOREIGN KEY (cId) REFERENCES CLASS(cId)
);

CREATE TABLE Saved (
	sId VARCHAR(40) NOT NULL,
    mId INT NOT NULL,
    PRIMARY KEY (sId, mId),
    FOREIGN KEY (sId) REFERENCES STUDENT(sId),
    FOREIGN KEY (mId) REFERENCES MATERIAL(mId)    
);

INSERT INTO STUDENT (sId, fullName, major, email, pswd) VALUES 
("0", "Garrett Mason", "CS", "gmmncf@mst.edu", "password"),
("1", "Nick Fuller", "CS", "something@mst.edu", "password"),
("2", "Sam Weik", "CS", "somethingelse@mst.edu", "password");

INSERT INTO CLASS (cId, cKey, cTitle, professor, dept, school) VALUES
("CS2300Sam YeungMST", "CS2300", "Databases", "Sam Yeung", "CS", "MST"),
("CS3800Josh WilkersonMST", "CS3800", "OS", "Josh Wilkerson", "CS", "MST"),
("CS3800Some GuyMST", "CS3800", "OS", "Some Guy", "CS", "MST"),
("Econ1200Radu PuslengheaMST", "Econ1200", "Macro Economics", "Radu Puslenghea", "Econ", "MST");

INSERT INTO MATERIAL (cId, `type`, mTitle, grade, semester, `year`, PDF) VALUES
("CS2300Sam YeungMST", "Test", "Biggest Exam of Your Life", "98/100", "Fall", "2021", "PDF"),
("CS3800Josh WilkersonMST", "Test", "Exam II", "89/100", "Fall", "2021", "PDF"),
("CS3800Josh WilkersonMST", "Study Guide", "Final Resource", "96/100", "Fall", "2021", "PDF"),
("CS3800Some GuyMST", "Test", "Exam I", "96/100", "Fall", "2021", "PDF"),
("Econ1200Radu PuslengheaMST", "Homework", "Final Group Project", "100/100", "Fall", "2021", "PDF");

SELECT * FROM MATERIAL;
SELECT * FROM CLASS;

SELECT * 
FROM MATERIAL
INNER JOIN CLASS ON MATERIAL.cId=CLASS.cId;