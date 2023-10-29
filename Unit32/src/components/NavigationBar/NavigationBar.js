import {BrowserRouter, Route, Routes} from "react-router-dom";
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