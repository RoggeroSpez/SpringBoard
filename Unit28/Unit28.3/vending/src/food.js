import HotCheetos from "/HotCheetos";
import Snickers from "/Snickers";
import Skittles from "/Skittles";
import MnMs from "/MnMs";
import Butterfingers from "/Butterfingers" ;
import Hersheys from "/Herseys";

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