import {useState, useEffect} from "react";

import styles from "./Loading.module.css";

function Loading ()
{
  const [dots, setDots] = useState([]);

  useEffect(() =>
            {
              setTimeout(() =>
                         {
                           if (dots.length < 5)
                           {
                             setDots(prevDots => [...prevDots, "C:\Users\Phros\Documents\GitHub\SpringBoard\Unit32\src\A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg"]);
                           }
                         },
                         200
              );
            },
            [dots]
  );

  return (
    <div className={styles["loading"]}>
      <span>Loading...</span>
      {dots.map((dot, index) => <span key={index}>{dot}</span>)}
    </div>
  );
}

export default Loading;
