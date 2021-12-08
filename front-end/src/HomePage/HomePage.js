import FileCard from '../FileCard/FileCard';
import './HomePage.css';
import * as data from './test.json';


function HomePage() {
  var fileInfo = [];
  for(const file in data.files) {
    fileInfo.push(data.files[file]);
  }
  // console.log(fileInfo);
  return (
    <div className="HomePage">
      <div id="contentWrapper">
        <div id="filter"></div>
        <div id="files">
          {/* <FileCard title="This is a super long file name to test what the width is like"
                    semester="Spring 2022"
                    class="Calc 2"/>
          <FileCard title="This is a super long file name to test what the width is like"
                    semester="Spring 2022"
                    class="Calc 2"/>
          <FileCard title="This is a super long file name to test what the width is like"
                    semester="Spring 2022"
                    class="Calc 2"/> */}
          {fileInfo.map((fileInfo) => {
            return <FileCard key={fileInfo.mid} mid={fileInfo.mid} class={fileInfo.class} title={fileInfo.title} semester={fileInfo.semester} year={fileInfo.year}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;