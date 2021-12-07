import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import './PostForm.css';

function PostForm() {
  return (
    <div className="PostForm">
      <Header/>
      <NavBar/>
      <h1>Post a Test</h1>
      <form>
        <div id="leftColumn">
          <label for="school">School</label>
          <input type="text" id="school" required/>
          <label for="professor">Professor</label>
          <input type="text" id="professor" required/>
          <label for="classCode">Class Code</label>
          <input type="text" id="classCode" required/>
          <label for="dept">Department</label>
          <input type="text" id="dept" required/>
          <label for="semester">Semester</label>
          <input type="text" id="semester" required/>
          <label for="year">Year</label>
          <input type="text" id="year" required/>
        </div>
        <div id="rightColumn">
          <p>Pick what <b>best</b> describes this file:</p>
          <div id="typeForm">
            <input type="radio" id="test" name="type" value="Test"/>
            <label for="test" class="radio">Test</label><br/>
            <input type="radio" id="study" name="type" value="Study Guide"/>
            <label for="study" class="radio">Study Guide</label><br/>
            <input type="radio" id="homework" name="type" value="Homework"/>
            <label for="homework" class="radio">Homework</label>
          </div>
          <label for="grade">Grade</label>
          <input type="text" id="grade" required/>
          <label for="fileUpload">Upload a File</label>
          <input type="file" id="fileUpload"required/>
        </div>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default PostForm;