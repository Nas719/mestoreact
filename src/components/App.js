import React, { useEffect } from "react";
import Header from "./Header/Header";
import Info from "./Info/Info";
import CardsContainer from "./Cards/CardsContainer";
import Footer from "./Footer/Footer";
import {apiManager} from "../utils/Api.js";

function App() {
    const [cardsArray, setCardsArray] = React.useState([]);
    const [currentUser, setCurrentUser] = React.useState({});

    useEffect(() => {
        apiManager.getInitialCards().then((res) => {
            // console.log(res);
            setCardsArray(res);
        }).catch((error) => {
            console.log(error);
        });

        apiManager.getUser().then((res) => {
            setCurrentUser(res);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

     function handleClickLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        apiManager.toggleLike(isLiked, card._id)
            .then((newCard) => {
                setCardsArray((state) => state.map((c) => c._id === card._id ? newCard : c));
            }).catch(error => {
                console.log(error);
        });
     }

     function handleClickDelete(card) {
        apiManager.removeCard(card._id)
            .then((res) => {
                setCardsArray((state) => state.filter((c) => c._id !== card._id ));
            }).catch(error => {
                console.log(error);
        });
     }

  return (
    <>
        <Header />
        <Info currentUser={currentUser}/>
        <CardsContainer
            onCardLike={handleClickLike}
            currentUser={currentUser}
            cards={cardsArray}
            onCardDelete={handleClickDelete}
        />
        <Footer/>
    </>
  );
}

export default App;
