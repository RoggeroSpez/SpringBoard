function App() {
    return (
      <div>
        <Tweet
          name="Jimmy N"
          username="NooraniJ"
          date={new Date().toDateString()}
          message="Why is my code working this way!"
        />
        <Tweet
          name="Mike Williams"
          username="TheWill"
          date={new Date().toDateString()}
          message="#Ilovehashtags"
        />
        <Tweet
          name="Mike West"
          username="Mr.West"
          date={new Date().toDateString()}
          message="Follow me for art."
        />
      </div>
    );
  }