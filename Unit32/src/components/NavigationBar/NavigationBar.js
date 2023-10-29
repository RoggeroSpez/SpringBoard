import {BrowserRouter, Route, Routes} from "react-router-dom";
import home from "./pages/home";
import characters from "../../pages/Characters/Characters";
import houses from "../../pages/houses";
import navBar from ".navBar";

function navigationBar (){
  return (
    <div className="App">
      <BrowserRouter>
        <navBar />
        <Routes>
          <Route styles path="/" element={<home />} />
          <Route path="/characters" element={<characters />} />
          <Route path="/houses" element={<houses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default navigationBar;