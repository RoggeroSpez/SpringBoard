import CokeCola from "/CokeCola.jpg";
import Sprite from "/Sprite.jpg";
import Fanta from "/Fanta.jpg";
import Gatorade from "/Gatorade.jpg";
import Gingerale from "/Gingerale.jpg" ;
import Gingerbeer from "/GingerBeer.jpg";

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