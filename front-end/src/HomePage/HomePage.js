import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

function HomePage() {
  return (
    <div className="HomePage">
      <Header/>
      <NavBar/>
      <h1>This will be the list of all files</h1>
    </div>
  );
}

export default HomePage;