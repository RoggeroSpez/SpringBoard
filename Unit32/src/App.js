import {BrowserRouter} from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import AppRoute from "./Routes/AppRoute";

function App ()
{
  return (
    <>
      {
        <BrowserRouter>
        <div>
          <header>
            <NavigationBar/>
          </header>
          <main>
          <AppRoute/>
          <img src="https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg"  width={250} height={250}
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