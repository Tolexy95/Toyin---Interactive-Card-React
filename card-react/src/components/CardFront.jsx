import React from "react";
import frontCard from "../assets/images/bg-card-front.png";
import { useContext } from "react";
import { CardContext } from "../context/CardContextProvide";

const CardFront = () => {
  const {
    holderName,
    setHolderName,
    holderNumber,
    setHolderNumber,
    cardMonth,
    setCardMonth,
    cardYear,
    setCardYear,
    cardCVC,
    setCardCVC,
  } = useContext(CardContext);

  return (
    <div className="cardContainer">
      <div className="frontContain">
        <img src={frontCard} alt="frontCard" />
        <p className="numberContain">{holderName}</p>
        <p className="nameContain">{holderNumber}</p>
        <p className="dateContain">
          {cardMonth} /<span>{cardYear}</span>
        </p>
      </div>
    </div>
  );
};

export default CardFront;
