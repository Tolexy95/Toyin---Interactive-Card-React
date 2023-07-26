import React from 'react'
import backCard from "../assets/images/bg-card-back.png"
import { useContext } from 'react'
import { CardContext } from '../context/CardContextProvide'

const CardBack = () => {
    const {
        cardCVC, 
        setCardCVC,
       
    } = useContext(CardContext);

  return (
    <div>
        <img src={backCard} alt="" />
        <p className='cvcNumber'>{cardCVC}</p>
        
        </div>
  )
}

export default CardBack