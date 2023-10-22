import styles from "./Home.module.css";
function Home ()
{
  return (
    <>
      <section className={styles["section__container"]}>
        <h1>Welcome to Westeros</h1>
      </section>
      <section className={styles["section__container"]}>
        <h2>Learn about your Favorite Game of Thrones Character</h2>
        <p>In this program you will be able to learn about the characters from the Game of thrones universe related to the </p>
      </section>
      <section className={styles["section__container"]}>
        <h2>🌍 Never Neglect to be Creative and  Innovative</h2>
        <p>We are humans and we love to create and explore it is part of our instincts to adapt and create.</p>
      </section>
      <section className={styles["section__container"]}>
        <h2>🚀 Enter Space Travel: Where Dreams Take Flight</h2>
        <p>When you Embark on this extraordinary journey with our technology, we have named "Space Potatoes United Develpoment" or "S.p.u.d.", We hope that your journey is safe and a great success in the endvours of exploration in the wide cosmos.  </p>
      </section>
      <section className={styles["section__container"]}>
        <h2>🔧 Engineer, Explorer, Leader</h2>
        <p>Build and Create while leading the way to a better tomorrow! In the vastness of the Space adaptability is a key we of Surviving and Success in your endvours.</p>
      </section>
      <section className={styles["section__container"]}>
        <h2>🌠 A Universe of Possibilities Awaits🍟</h2>
        <p>All ways look from multiple views so that you can see all the Possibilities that might be just out of sight.🥔</p>
      </section>
    </>
  );
}
export default Home;


//Home -Display General Information about the application you will generate information with out the API
//Characters -Lists all the charcters with pagination - you will display the name or aliases if it has no name - you will display the culture - you will display an icon based on gender
//Character - Displays the information about the related character - you will display every field mention in the characters plus born diedf titles - you will display father monther spulse and allegiances by ther name data from api using related methods
//Houses -Listss all houses with pagination -you will display the name and titles (if any) - you will also display current lord( if any) and sworn members(if any) with and icon and navigate to the character on click action

//Chacters and Houses
//-The Characters and House pagination you will store the current page and page size in the state (each should have a default vaule)
//-The pages should have a pagination component that will display the current page number with a left arrow to got the previous page and a right arrow to go to the next page
//-The left arrow should be disabled if the current page is 1
//-It should have a drop down to display and enable users to change page size
//-You should pass the current page and page sioze to the pagination component as props
//-You should also pass functions to be triggered when users change the page or the page size

// Methods 
//-Use /characer to fetch all characters
//-Use /character/:id fetch chacter by given ID
//-Use /houses to fetch all houses

// Pages
//- Page  based on 1 as current value by default
//- Page sizes are default value of 10 on return