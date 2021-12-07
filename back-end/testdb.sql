#Code written and executed through MySQL Editor

DROP DATABASE IF EXISTS `testdb`;
CREATE DATABASE `testdb`;
USE `testdb`;
SET GLOBAL local_infile=1;

CREATE TABLE CLASS (
	cKey INT NOT NULL UNIQUE,
	title VARCHAR(40) NOT NULL,
    professor VARCHAR(40) NOT NULL,
    dept VARCHAR(40) NOT NULL,
    PRIMARY KEY (cKey, title)
);

CREATE TABLE STUDENT (
	sId INT NOT NULL UNIQUE,
    fullName VARCHAR(40) NOT NULL,
    major VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    #What should SavedList be?
    PRIMARY KEY (sId, fullName)
);

CREATE TABLE MATERIAL (
	mId INT NOT NULL,
    semester VARCHAR(40) NOT NULL,
    PRIMARY KEY (mId)
);

CREATE TABLE TEST (
	mId INT NOT NULL, 
    grade INT NOT NULL,
    tPDF MEDIUMBLOB NOT NULL,
    PRIMARY KEY(mId),
    FOREIGN KEY (mId) REFERENCES MATERIAL(mId)
);

CREATE TABLE PRACTICETEST (
	mId INT NOT NULL, 
    answerKey MEDIUMBLOB NOT NULL,
    tPDF MEDIUMBLOB NOT NULL,
    PRIMARY KEY(mId),
    FOREIGN KEY (mId) REFERENCES MATERIAL(mId)
);

CREATE TABLE STUDYGUIDE (
	mId INT NOT NULL, 
    provided BOOL NOT NULL,
    sPDF MEDIUMBLOB NOT NULL,
    PRIMARY KEY(mId),
    FOREIGN KEY (mId) REFERENCES MATERIAL(mId)
);

CREATE TABLE HOMEWORK (
	mId INT NOT NULL, 
    grade INT NOT NULL,
    hPDF MEDIUMBLOB NOT NULL,
    PRIMARY KEY(mId),
    FOREIGN KEY (mId) REFERENCES MATERIAL(mId)
);

CREATE TABLE Posted (
	sId INT NOT NULL,
    mId INT NOT NULL,
    PRIMARY KEY (sId, mId),
    FOREIGN KEY (sId) REFERENCES STUDENT(sId),
    FOREIGN KEY (mId) REFERENCES MATERIAL(mId)    
);

CREATE TABLE Saved (
	sId INT NOT NULL,
    mId INT NOT NULL,
    PRIMARY KEY (sId, mId),
    FOREIGN KEY (sId) REFERENCES STUDENT(sId),
    FOREIGN KEY (mId) REFERENCES MATERIAL(mId)    
);

CREATE TABLE Has (
	cKey INT NOT NULL,
    mId INT NOT NULL,
    PRIMARY KEY (cKey, mId),
    FOREIGN KEY (cKey) REFERENCES CLASS(cKey),
    FOREIGN KEY (mId) References MATERIAL(mId)
);

INSERT INTO CLASS (cKey, title, professor, dept) VALUES
(0, "CS2300", "Sam Yeung", "CS"),
(1, "CS3800", "Josh Wilkerson", "CS");

INSERT INTO STUDENT (sId, fullName, major, email) VALUES 
(0, "Garrett Mason", "CS", "gmmncf@mst.edu"),
(1, "Nick Fuller", "CS", "something@mst.edu"),
(2, "Sam Weik", "CS", "somethingelse@mst.edu");

#Says that tPDF is null for some reason
#INSERT INTO TEST (mId, grade, tPDF) VALUES
#(0, "98", LOAD_FILE('D:\MST\Junior\CS2300\Test Bank\test0.pdf'));

select @@GLOBAL.secure_file_priv;

LOAD DATA LOCAL INFILE 'D:\MST\Junior\CS2300\Test Bank\test0.pdf' INTO TABLE TEST;
