import CokeCola from "/CokeCola.jpeg";
import Sprite from "/Sprite.jpeg";
import Fanta from "/Fanta.jpeg";
import Gatorade from "/Gatorade.jpeg";
import Gingerale from "/Gingerale.jpeg" ;
import Gingerbeer from "/GingerBeer.jpeg";

function Drink(){
    return (
    <div>
        <img src={CokeCola} />
        <img src={Sprite} />
        <img src={Fanta} />
        <img src={Gatorade} />
        <img src={Gingerale} />
        <img src={Gingerbeer} />
      </div>
  );
}
/* Coke-Cola Sprite Fanta Gatorade Gingerale GingerBeer */
export default Drink;