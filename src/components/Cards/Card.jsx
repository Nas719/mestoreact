import React from 'react';

const Card = (props) => {
    const isLiked = props.card.likes.some(i => i._id === props.currentUser._id);
    const likeButtonClassName = `element__item-like ${isLiked ? 'element__item-like_active' : ''}`;
    const isOwner = props.card.owner._id === props.currentUser._id;
    const cardDeleteButtonVisible = isOwner ? false : true;



    function handleButtonLike() {
        props.onCardLike(props.card);
    }

    function handleButtonDelete() {
        props.onCardDelete(props.card);
    }

    return (
        <li className="element__item">
            <img className="element__item-image" src={props.card.link} alt="#"/>
                <div className="element__container">
                    <h2 className="element__item-name">{props.card.name}</h2>
                    <div className="element__container-like">
                        <button type="button" onClick={handleButtonLike} className={likeButtonClassName}></button>
                        <p className="element__item-like-counter">{props.card.likes.length}</p>
                    </div>
                    <button className="element__delete-icon" type="button" onClick={handleButtonDelete} hidden={cardDeleteButtonVisible}></button>
                </div>
        </li>
    );
};

export default Card;