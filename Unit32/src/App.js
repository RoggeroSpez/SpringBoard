import {BrowserRouter} from "react-router-dom";
import NavBar from "./Components/navigationBar/navBar";
import "./App.css";


function App ()
{
  return (
    <>
      {
        <BrowserRouter>
        <div>
          <header>
            <NavBar/>
          </header>
          <main id="main">
          </main>
          <footer>
          </footer>
        </div>
        </BrowserRouter>
      }
    </>
  );
}
export default App;