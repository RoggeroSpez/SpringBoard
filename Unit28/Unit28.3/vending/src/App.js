import React, {useState} from "react";
import './App.css';

/*Next are imports for components*/
import food from "./food";
import drink from "./drink";


function App(){
 const [page, setPage] = useState('home');
 const showPage = () => {
if (page === 'home') return <Home/>
if (page === 'food') return <Food/>
if (page === 'drink') return <drink/>
 }
 return (
<main className="App">
<Home/>
<Food/>
<Drink/>
</main>
);
}

export default App;