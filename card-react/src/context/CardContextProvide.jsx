import { createContext, useState } from "react";
import React from 'react'

export const CardContext =createContext()

const CardContextProvide = ({children}) => {
const[holderName, setHolderName] =useState("");
const[holderNumber, setHolderNumber] =useState();
const[cardMonth, setCardMonth]=useState();
const[cardYear, setCardYear]=useState();
const[cardCVC, setCardCVC]=useState();

const objectToBePassed = {
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
};

  return (
    <div>
      <CardContext.Provider value={objectToBePassed}>
      
    
    {children}

      </CardContext.Provider>
        </div>
  )
}

export default CardContextProvide