import { useContext } from "react";
import cardDetailsContext from "../../../context/card-context";
import classes from './ErrorModal.module.css';


const ErrorModal = (props) => {
  const cardCtx = useContext(cardDetailsContext);


  const returnHandler = () => {
    cardCtx.continueModal();
  }

  return <div className={classes['modal-container']}>
    <p>Something went wrong. Please try again.</p>
    <button onClick={returnHandler}>Return</button>
  </div>
}

export default ErrorModal;