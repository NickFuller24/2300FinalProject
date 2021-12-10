#Code written and executed through MySQL Editor

DROP DATABASE IF EXISTS `examdb`;
CREATE DATABASE `examdb`;
USE `examdb`;

CREATE TABLE CLASS (
    cKey VARCHAR(40) NOT NULL,
    professor VARCHAR(40) NOT NULL,
	cTitle VARCHAR(40) NOT NULL,
    dept VARCHAR(40) NOT NULL,
    school VARCHAR(40) NOT NULL,
    PRIMARY KEY (cKey)
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
    cKey VARCHAR(40) NOT NULL,
    `type` VARCHAR(20) NOT NULL,
    mTitle VARCHAR (40) NOT NULL,
    grade VARCHAR(40) NOT NULL,
    semester VARCHAR(40) NOT NULL,
    `year` VARCHAR(40) NOT NULL,
    PDF BLOB NOT NULL,
    PRIMARY KEY (mId),
    FOREIGN KEY (cKey) REFERENCES CLASS(cKey)
);

CREATE TABLE Saved (
	sId VARCHAR(40) NOT NULL,
    mId INT NOT NULL,
    PRIMARY KEY (sId, mId),
    FOREIGN KEY (sId) REFERENCES STUDENT(sId),
    FOREIGN KEY (mId) REFERENCES MATERIAL(mId)    
);

INSERT INTO CLASS (cKey, cTitle, professor, dept, school) VALUES
("CS2300", "Databases", "Sam Yeung", "CS", "MST"),
("CS3800", "OS", "Josh Wilkerson", "CS", "MST");

INSERT INTO STUDENT (sId, fullName, major, email, pswd) VALUES 
("0", "Garrett Mason", "CS", "gmmncf@mst.edu", "password"),
("1", "Nick Fuller", "CS", "something@mst.edu", "password"),
("2", "Sam Weik", "CS", "somethingelse@mst.edu", "password");

INSERT INTO MATERIAL (cKey, `type`, mTitle, grade, semester, `year`, PDF) VALUES
("CS2300", "Test I", "Biggest Exam of Your Life", "98/100", "Fall", "2021", "TEST"),
("CS3800", "Test I", "Second Biggest Exam of Your Life", "20/100", "Fall", "2021", "TEST"), #LOAD_FILE('D:\MST\Junior\CS2300\Test Bank\test0.pdf'));
("CS3800", "Test II", "Normal", "20/100", "Fall", "2021", "TEST"),
("CS3800", "FINAL ", "HARD", "20/100", "Fall", "2021", "TEST");

SELECT * FROM MATERIAL;
SELECT * FROM CLASS;

#DELETE FROM CLASS
#WHERE cKey = 2300;

SELECT * 
FROM MATERIAL
INNER JOIN CLASS ON MATERIAL.cKey=CLASS.cKey;
