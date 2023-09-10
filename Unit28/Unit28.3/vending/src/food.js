import HotCheetos from "/HotCheetos.jpeg";
import Snickers from "/Snickers.jpeg";
import Skittles from "/Skittles.jpeg";
import MnMs from "/MnMs.jpeg";
import Butterfingers from "/Butterfingers.jpeg" ;
import Hersheys from "/Herseys.jpeg";

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