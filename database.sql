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

#----------Start of insertions for testing----------#
INSERT INTO STUDENT (sId, fullName, major, email, pswd) VALUES 
("1255", "Garrett Mason", "CS", "gmmncf@mst.edu", "password"),
("3142", "Nick Fuller", "CS", "nbfmgp@mst.edu", "password"),
("8607", "Sam Weik", "CS", "somethingelse@mst.edu", "password");

INSERT INTO CLASS (cId, cKey, cTitle, professor, dept, school) VALUES
("CS2300San YeungMST", "CS2300", "Databases", "San Yeung", "CS", "MST"),
("CS3800Josh WilkersonMST", "CS3800", "OS", "Josh Wilkerson", "CS", "MST"),
("CS3800Some GuyMST", "CS3800", "OS", "Some Guy", "CS", "MST"),
("Econ1200Radu PuslengheaMST", "Econ1200", "Macro Economics", "Radu Puslenghea", "Econ", "MST");

INSERT INTO MATERIAL (cId, `type`, mTitle, grade, semester, `year`, PDF) VALUES
("CS2300San YeungMST", "Test", "Biggest Exam of Your Life", "98/100", "Fall", "2021", "PDF"),
("CS3800Josh WilkersonMST", "Test", "Exam II", "89/100", "Fall", "2021", "PDF"),
("CS3800Josh WilkersonMST", "Study Guide", "Final Resource", "96/100", "Fall", "2021", "PDF"),
("CS3800Some GuyMST", "Test", "Exam I", "96/100", "Fall", "2021", "PDF"),
("Econ1200Radu PuslengheaMST", "Homework", "Final Group Project", "100/100", "Fall", "2021", "PDF");
#----------End of insertions for testing----------#

-- #Queries for testing
-- SELECT * FROM MATERIAL;
-- SELECT * FROM CLASS;

-- #Example of inserting material into Garrett's SAVED
-- INSERT INTO SAVED (sId, mId) VALUES
-- ("1255", 3),
-- ("1255", 4);

-- #Example of viewing from Garrett's SAVED knowing only sId
-- SELECT *
-- FROM MATERIAL
-- WHERE mId IN (
-- 	SELECT mId
-- 	FROM SAVED
-- 	WHERE sId = "1255"
-- );

-- #Query to get corresponding material and class info for insertion upon gui startup
-- SELECT * 
-- FROM MATERIAL
-- INNER JOIN CLASS ON MATERIAL.cId=CLASS.cId;