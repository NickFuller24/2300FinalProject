#Code written and executed through MySQL Editor

DROP DATABASE IF EXISTS `examdb`;
CREATE DATABASE `examdb`;
USE `examdb`;
SET GLOBAL local_infile=1;

CREATE TABLE CLASS (
	cKey VARCHAR(40) NOT NULL,
    professor VARCHAR(40) NOT NULL,
	title VARCHAR(40) NOT NULL,
    dept VARCHAR(40) NOT NULL,
    school VARCHAR(40) NOT NULL,
    PRIMARY KEY (cKey, professor, school)
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
	mId INT NOT NULL AUTO_INCREMENT UNIQUE,
    cKey VARCHAR(40) NOT NULL,
    `type` VARCHAR(20) NOT NULL,
    title VARCHAR (40) NOT NULL,
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

#INSERT INTO CLASS (cKey, title, professor, dept, school) VALUES
#("CS2300", "Databases", "Sam Yeung", "CS", "MST"),
#("CS2300", "Databases", "Sam Yeung", "CS", "MIZZOU");

#INSERT INTO STUDENT (sId, fullName, major, email, pswd) VALUES 
#("0", "Garrett Mason", "CS", "gmmncf@mst.edu", "password"),
#("1", "Nick Fuller", "CS", "something@mst.edu", "password"),
#("2", "Sam Weik", "CS", "somethingelse@mst.edu", "password");

#Says that tPDF is null for some reason
#INSERT INTO MATERIAL (cKey, `type`, title, grade, semester, `year`, PDF) VALUES
#("2300", "Test", "Biggest Exam of Your Life", "98/100", "Fall", "2021", "TEST"),
#("3800", "Test", "Second Biggest Exam of Your Life", "20/100", "Fall", "2021", "TEST"); #LOAD_FILE('D:\MST\Junior\CS2300\Test Bank\test0.pdf'));

#SELECT * FROM MATERIAL;
