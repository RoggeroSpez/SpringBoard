import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./Components/navigationBar/navBar";
import Home from "./Components/home/home";
import Character from "./Components/character/character";
import Houses from "./Components/houses/houses";
import "./App.css";


function App ()
{
  return (
    <>
      {
        <BrowserRouter>
        <div className="App">
          <header>
            <NavBar/>
          </header>
          </div>
          <div className="content-container">
          <Routes>
          <Route path="/" exact component={Home}/>
          <Route path="/character/" exact component={Character}/>
          <Route path="/houses" exact component={Houses}/>
          </Routes>
          <footer>
          </footer>
        </div>
        </BrowserRouter>
      }
    </>
  );
}
export default App;