import React, {useState, useEffect, useLayoutEffect} from 'react';
import FileCard from '../FileCard/FileCard';
import Filter from '../Filter/Filter';
import NavBar from '../NavBar/NavBar';
import './HomePage.css';
import * as data from './test.json';
import Axios from 'axios';

const onFilterChange = (ev) => {
  console.log(ev);
};

function HomePage() {
  // const [materialFilter, setMaterial] = useState("");
  // const [classFilter, setClass] = useState("");
  // const [departmentFilter, setDepartment] = useState("");
  // const [semesterFilter, setSemester] = useState("");
  // const [yearFilter, setYear] = useState("");
  // const [professorFilter, setProfessor] = useState("");

  // const updateMaterial = val => { setMaterial(val); };
  // const updateClass = val => { setClass(val); };
  // const updateDepartment = val => { setDepartment(val); };
  // const updateSemester = val => { setSemester(val); };
  // const updateYear = val => { setYear(val); };
  // const updateProfessor = val => { setProfessor(val); };

  // Sucessfully gets combined datatable of material and class from back-end
  // Still needs to be added as gui file upon gui startup!
  useEffect(()=> {
    Axios.get('http://localhost:3001/api/loadFiles').then((response)=> {
      const resultArray = Object.values(JSON.parse(JSON.stringify(response)));  
      console.log(resultArray[0][0].mTitle);
    });
  }, []);



  var fileInfo = [];
  for(const file in data.files) {
    fileInfo.push(data.files[file]);
  }

  // useEffect(() => {
  //   console.log('useEffect');
  //   fileInfo = [];
  //   var filtered = true
  //   for(const file in data.files) {
  //     filtered = true;
  //     if(materialFilter !== "") {
  //       if(data.files[file].type !== materialFilter) {
  //         filtered = false;
  //       }
  //     }
  //     if(classFilter !== "") {
  //       if(data.files[file].class !== classFilter) {
  //         filtered = false;
  //       }
  //     }
  //     if(departmentFilter !== "") {
  //       if(data.files[file].department !== departmentFilter) {
  //         filtered = false;
  //       }
  //     }
  //     if(semesterFilter !== "") {
  //       if(data.files[file].semester !== semesterFilter) {
  //         filtered = false;
  //       }
  //     }
  //     if(yearFilter !== "") {
  //       if(data.files[file].year !== yearFilter) {
  //         filtered = false;
  //       }
  //     }
  //     if(professorFilter !== "") {
  //       if(data.files[file].professor !== professorFilter) {
  //         filtered = false;
  //       }
  //     }
  //     if(filtered) {
  //       fileInfo.push(data.files[file]);
  //     }
  //   }
  // }, [materialFilter, classFilter, departmentFilter, semesterFilter, yearFilter, professorFilter]);
  
  // console.log(fileInfo);
  return (
    <div className="HomePage">
      <NavBar/>
      <div id="contentWrapper">
        <Filter onChange={onFilterChange}/>
        <div id="files">
          {fileInfo.map((fileInfo) => {
            return <FileCard key={fileInfo.mid}
                            mid={fileInfo.mid}
                            class={fileInfo.class}
                            title={fileInfo.title}
                            semester={fileInfo.semester}
                            year={fileInfo.year}
                            // updateMaterial={updateMaterial}
                            // updateClass={updateClass}
                            // updateDepartment={updateDepartment}
                            // updateSemester={updateSemester}
                            // updateYear={updateYear}
                            // updateProfessor={updateProfessor}
                  />
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;