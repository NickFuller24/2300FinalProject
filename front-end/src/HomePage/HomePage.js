import React, {useState, useEffect, useLayoutEffect} from 'react';
import FileCard from '../FileCard/FileCard';
import Filter from '../Filter/Filter';
import NavBar from '../NavBar/NavBar';
import './HomePage.css';
// import * as data from './test.json';
import Axios from 'axios';

const onFilterChange = (ev) => {
  console.log(ev);
};

function HomePage() {
  // console.log(params);

  const [materialFilter, setMaterial] = useState("");
  const [classFilter, setClass] = useState("");
  const [departmentFilter, setDepartment] = useState("");
  const [semesterFilter, setSemester] = useState("");
  const [yearFilter, setYear] = useState("");
  const [professorFilter, setProfessor] = useState("");

  const filterCallBack = (filterData) => {
    // if filters have been removed the length will be 0
    if (filterData.length === 0) {
      setMaterial("");
      setClass("");
      setDepartment("");
      setSemester("");
      setYear("");
      setProfessor("");
    }
    else {
      for (const filter in filterData) {
        console.log(filterData[filter]);
        if(filterData[filter][0] === "type") {
          setMaterial(filterData[filter][1]);
        }
        else if(filterData[filter][0] === "class") {
          setClass(filterData[filter][1]);
        }
        else if(filterData[filter][0] === "department") {
          setDepartment(filterData[filter][1]);
        }
        else if(filterData[filter][0] === "semester") {
          setSemester(filterData[filter][1]);
        }
        else if(filterData[filter][0] === "year") {
          setYear(filterData[filter][1]);
        }
        else if(filterData[filter][0] === "professor") {
          setProfessor(filterData[filter][1]);
        }
      }
    }
  };

  // const updateMaterial = val => { setMaterial(val); };
  // const updateClass = val => { setClass(val); };
  // const updateDepartment = val => { setDepartment(val); };
  // const updateSemester = val => { setSemester(val); };
  // const updateYear = val => { setYear(val); };
  // const updateProfessor = val => { setProfessor(val); };
  const [isLoading, setLoading] = useState(true);
  const [fileInfo, setFileInfo] = useState([]);

  // Sucessfully gets combined datatable of material and class from back-end
  // Still needs to be added as gui file upon gui startup!
  var files = [];
  useEffect(() => {
    Axios.get('http://localhost:3001/api/loadFiles').then((response)=> {
      const resultArray = Object.values(JSON.parse(JSON.stringify(response)));  
      // console.log(resultArray[0]);
      files = [];
      for(const file in resultArray[0]) {
        // console.log(resultArray[0][file]);
        files.push(resultArray[0][file]);
        // console.log(files[file]);
      }
      setFileInfo(files);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="HomePage">
        <NavBar/>
        <div id="contentWrapper">
          <Filter onChange={onFilterChange}/>
        </div>
      </div>
    )
  }

  // console.log(files);
  return (
    <div className="HomePage">
      <NavBar/>
      <div id="contentWrapper">
        <Filter filterCall={filterCallBack}/>
        <div id="files">
          {fileInfo.map((file) => {
            let passAllFilters = true;
            if (materialFilter) {
              if (file.type !== materialFilter) {
                passAllFilters = false;
              }
            }
            if (classFilter) {
              if (file.cKey !== classFilter) {
                passAllFilters = false;
              }
            }
            if (departmentFilter) {
              if (file.dept !== departmentFilter) {
                passAllFilters = false;
              }
            }
            if (semesterFilter) {
              if (file.semester !== semesterFilter) {
                passAllFilters = false;
              }
            }
            if (yearFilter) {
              if (file.year !== yearFilter) {
                passAllFilters = false;
              }
            }
            if (professorFilter) {
              if (file.professor !== professorFilter) {
                passAllFilters = false;
              }
            }
            if (passAllFilters) {
              return <FileCard key={file.mId}
                            mid={file.mId}
                            class={file.cKey}
                            title={file.mTitle}
                            semester={file.semester}
                            year={file.year}
                            // updateMaterial={updateMaterial}
                            // updateClass={updateClass}
                            // updateDepartment={updateDepartment}
                            // updateSemester={updateSemester}
                            // updateYear={updateYear}
                            // updateProfessor={updateProfessor}
                  />
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
