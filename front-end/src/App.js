import './App.css';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" exact component={HomePage}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
