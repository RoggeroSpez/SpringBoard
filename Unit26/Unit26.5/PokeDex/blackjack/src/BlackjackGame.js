import React from "react";
import CardLisst from "./CardList";
import Score from "./Score";
import "./BlackjackGame.css";
/*Get a randome element from an arr */
function choice(value){
    const randIdx = Math.floor(Math.random() * values.length);
    return values[randIdx];
}
/*RandomCardSuitValues*/
function getCard(values, suits) {
    const randomVal = choice(values);
    const randomSuit = choice(suits);
    return randomSuit + randomVal;
}
/*NoDuples*/
function getCards(values, suits, numCards=1){
    const cardsArr = [getCard(values, suits)];
    while (cardsArr.length < numCards){
        let randomCard = getCard(values, suits);
        if (!cardsArr.includes(randomCard)) cardsArr.push(randomCard);
    }
    return cardsArr;
}
/*GameBod*/
function BlackjackGame(props) {
    const pairOfCards = getCards(props.values, props.suits, 2);
    return(
        <div className="BlackjackGame">
            <CardList cards={pairOfCards}/>
            <score cards={pairOfCards}/>
        </div>
    );
}

BlackjackGame.defaultProps = {
    values: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"],
    suits: ["C","D","H","S"]
};

export default BlackjackGame;