import React from 'react';
import imageAva from '../../images/image.jpg';

const Info = (props) => {
    return (
        <div className="profile">
            <img className="profile__avatar" src={props.currentUser.avatar} alt="Аватарка"/>
            <div className="profile__info">
                <div className="profile__container">
                    <h1 className="profile__name">{props.currentUser.name}</h1>
                    <button className="profile__edit-button"></button>
                </div>
                <p className="profile__job">{props.currentUser.about}</p>
            </div>
            <button className="profile__add-button"></button>
        </div>
    );
};

export default Info;