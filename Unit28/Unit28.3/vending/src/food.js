import HotCheetos from "./HotCheetos.jpg";
import Snickers from "./Snickers.jpg";
import Skittles from "./Skittles.jpg";
import MnMs from "./MnMs.jpg";
import Butterfingers from "./Butterfingers.jpg" ;
import Hersheys from "./Herseys.jpg";

function Food() {  
    return (
    <div>
        <img src={HotCheetos} />
        <img src={Snickers} />
        <img src={Skittles} />
        <img src={MnMs} />
        <img src={Butterfingers} />
        <img src={Hersheys} />
      </div>
    );
}

/*Hot Cheetoes Snickers Skittles M&Ms Butterfingers Hersheys */
export default Food;