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
if (page === 'drink') return <Drink/>
 }
 return (
<main className="App">
<nav>
<a onClick={()=setPage('home')}>Home</a>
<a onClick={()=setPage('food')}>Food</a>
<a onClick={()=setPage('drink')}>Drink</a>
</nav>
{showPage()}
</main>
);
}

export default App;