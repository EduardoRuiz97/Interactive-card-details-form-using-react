import React, { useContext, useState } from "react";
import styles from '../Components/Main.module.css';
import Section from "./UI/Section";
import UserForm from "./UserForm/UserForm";
import cardDetailsContext from "../context/card-context";
import Modal from "./UI/Modal/Modal";
import ErrorModal from "./UI/Modal/ErrorModal";


const Main = () => {

  const cardDataDefault = {
    name: 'Jane Applewood',
    number: '0000 0000 0000 0000',
    month: '00',
    year: '00',
    cvv: '000'
  };

  const cardCtx = useContext(cardDetailsContext);

  const successSubmit = cardCtx.didSubmitData;
  console.log(cardCtx.cardDetails);

  console.log(cardCtx.error + ' hay un error?');
  console.log(successSubmit + ' El formulario estuvo correcto?');
  console.log(cardCtx.isDataSent + ' Se envio con exito?');

  const [cardData, setCardData] = useState(cardDataDefault);

  const cardInfoHandler = (data) => {
    setCardData(data)
  }


return (
    <main className={styles.main}>
      <Section cardInfo={cardData}/>
      {!successSubmit && !cardCtx.isDataSent && <UserForm onCardInfo={cardInfoHandler}/>}
      {!successSubmit && cardCtx.isDataSent && <p className={styles['loading-state']}>Loading...</p>}
      {successSubmit && cardCtx.error && !cardCtx.isDataSent && <ErrorModal></ErrorModal>}
      {successSubmit && !cardCtx.error && !cardCtx.isDataSent && <Modal></Modal>}
    </main>
)
}

export default Main;