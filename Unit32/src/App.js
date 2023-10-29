import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

function App() {
  return (<>
      <BrowserRouter>
      <div>
      <header><navigationBar/></header>
      <main>
        <img src="https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg"
        alt="GameOfThrones A Song of Ice and Fire by George R.R. Martin" />
      </main>
      <footer>
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7vNNghvz2BXXcIScnjUdqf?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </footer>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;