import React, { useContext } from "react";
import styles from './Card.module.css';
import cardlogo from '../../../images/card-logo.svg';
import cardDetailsContext from "../../../context/card-context";

const Card = (props) => {

  const cardCtx = useContext(cardDetailsContext);
  const dataWasSend = cardCtx.didSubmitData;



  return <div className={styles['card-interactive']}>

    <img src={cardlogo} alt='card logo'></img>

    <p className={styles['card-number']}>{`${!dataWasSend ? props.cardInfo.number : cardCtx.cardDetails.cardNumber}`}</p>

    <div className={styles['card-info']}>
       <p>{`${!dataWasSend ? props.cardInfo.name : cardCtx.cardDetails.name}`}</p>
      <p>{`${!dataWasSend ? props.cardInfo.month : cardCtx.cardDetails['Expiration-date'].month}`}/{`${!dataWasSend ? props.cardInfo.year : cardCtx.cardDetails['Expiration-date'].year}`}</p>
    </div>
    
  </div>
}

export default Card;