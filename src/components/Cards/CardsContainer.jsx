import React from 'react';
import Card from "./Card";

const CardsContainer = (props) => {
    return (
        <section className="elements">
            <ul className="element">
                {props.cards.map((card) =>
                    <Card currentUser={props.currentUser} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} key={card._id} card={card}/>
                )}
            </ul>
        </section>
    );
};

export default CardsContainer;

// addLikeCount={props.addLikeCount} handleClickDelete={props.handleClickDelete} card = {card} key = {card._id}