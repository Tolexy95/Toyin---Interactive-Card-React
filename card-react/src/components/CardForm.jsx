import React from 'react'
 import { useContext } from 'react'
 import { CardContext } from '../context/CardContextProvide';

 const CardForm = () => {

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
 <div className='container'>
    <form action="">
  <div className='ownerName'>
    <label htmlFor="">CARDHOLDER NAME</label>
    <input type="text" placeholder='e.g. Jane Appleseed' onInput={(e) => setHolderName(e.target.value)} value={holderName}/>
  </div>

  <div className='ownerNumber'>
  <label htmlFor="">CARD NUMBER</label>
    <input type="number" placeholder='e.g. 1234 5678 9123 0000' onInput={(e) =>setHolderNumber (e.target.value)} value={holderNumber}/>
  </div>



<div className='dateContainer'>
<div className='month&year'>
<label htmlFor="">EXP. DATE (MM/YY)</label>
<input type="number" placeholder='MM' onInput= {(e) =>setCardMonth (e.target.value)} value={cardMonth} maxLength={2}/>

<input type="number" placeholder='YY' onInput={(e) =>setCardYear (e.target.value)} value={cardYear} maxLength={2}/>
</div>

<div className='cvcContainer'>
<label htmlFor="">CVC</label>
<input type="number" placeholder='e.g. 123' onInput={(e) =>setCardCVC (e.target.value)} value={cardCVC} maxLength={3}/>
</div>

</div>

  </form>

  <button>Confirm</button>


 </div>

    
  )
}

export default CardForm