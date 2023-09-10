import CokeCola from "/CokeCola";
import Sprite from "/Sprite";
import Fanta from "/Fanta";
import Gatorade from "/Gatorade";
import Gingerale from "/Gingerale" ;
import Gingerbeer from "/GingerBeer";

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