import React, { useContext } from "react";
import correctIcon from '../../../images/icon-complete.svg';
import classes from './Modal.module.css';
import cardDetailsContext from "../../../context/card-context";



const Modal = (props) => {
  const cardCtx = useContext(cardDetailsContext)


  const continueHandler = () => {
    cardCtx.continueModal();
  };

  return <div className={classes['modal-container']}>
    <img src={correctIcon} alt='correct icon'></img>
    <p>We've added your card details</p>
    <button onClick={continueHandler}>Continue</button>
  </div>
}

export default Modal;