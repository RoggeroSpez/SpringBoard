import {BrowserRouter} from "react-router-dom";
import NavBar from "./Components/navigationBar/navBar";

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
          <main>
          <img src="https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg"
          alt="GameOfThrones A Song of Ice and Fire by George R.R. Martin" />
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