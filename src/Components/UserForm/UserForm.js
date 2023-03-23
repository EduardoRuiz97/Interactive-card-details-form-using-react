import useInput from "../../hooks/use-input";
import cardDetailsContext from "../../context/card-context";
import styles from './UseForm.module.css';
import { useContext } from "react";



const UserForm = (props) => {

  const cardCtx = useContext(cardDetailsContext)

  const {
    inputValue: nameInput,
    isInputValue: isNameInputInvalid,
    inputChangeHandler: nameInputHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetName,
  } = useInput(value => value.trim() !== '');

  const {
    inputValue: cardNumberInput,
    isInputValue: isCardNumberInputInvalid,
    inputChangeHandler: cardNumberInputHandler,
    inputBlurHandler: cardNumberBlurHandler,
    resetInput: resetCard,
  } = useInput(value => value.trim().length === 16)

  const {
    inputValue: monthInput,
    isInputValue: isMonthInputInvalid,
    inputChangeHandler: monthInputHandler,
    inputBlurHandler: monthBlurHandler,
    resetInput: resetMonth,
  } = useInput(value => value.trim() !== '');

  const {
    inputValue: yearInput,
    isInputValue: isYearInputInvalid,
    inputChangeHandler: yearInputHandler,
    inputBlurHandler: yearBlurHandler,
    resetInput: resetYear,
  } = useInput(value => value.trim() !== '');

  const {
    inputValue: cvvInput,
    isInputValue: isCvvInputInvalid,
    inputChangeHandler: cvvInputHandler,
    inputBlurHandler: cvvBlurHandler,
    resetInput: resetCvv,
  } = useInput(value => value.trim().length === 3);


  let isFormValid;

  const isExpirationDatInvalid = isMonthInputInvalid && isYearInputInvalid;

  const submitHandler = (event) => {

    event.preventDefault();



    isFormValid = 
    !isNameInputInvalid 
    && !isCardNumberInputInvalid 
    && !isMonthInputInvalid 
    && !isYearInputInvalid
    && !isCvvInputInvalid;

    if (!isFormValid) {
      return
    }

    const formData = {
      name: nameInput,
      cardNumber: cardNumberInput,
      'Expiration-date': {month: monthInput, year: yearInput},
      cvv: cvvInput,
    }

    console.log("Form is Valid ");

    cardCtx.submitCardDetails(formData);
    resetName();
    resetCard();
    resetMonth();
    resetYear();
    resetCvv();

  }

  return <section className={styles['form-section']}>

    <form onSubmit={submitHandler}>

      <div className={styles['input-container']}>

        <div className={styles['input-container__input']}>
          <label>CARDHOLDER NAME</label>
          <br></br>
          <input 
          type='text' 
          placeholder="e.g. Jane Appleseed"
          onChange={nameInputHandler}
          onBlur={nameBlurHandler}
          ></input>
          {isNameInputInvalid && <p className={styles.warning}>Can't be blank</p> }
        </div>

        <div className={styles['input-container__input']}>
          <label>CARD NUMBER</label>
          <br></br>
          <input 
          type='number' 
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={cardNumberInputHandler}
          onBlur={cardNumberBlurHandler}
          ></input>
          {isCardNumberInputInvalid && <p className={styles.warning}>Must be a 16 digit number</p> }
        </div>

        <div className={styles['input-container-special']}>

          <div className={styles['input-container__input']}>
            <label>EXP. DATE (MM/YY)</label>
            <br></br>
            <input 
            type='number' 
            min='1' max='12' 
            placeholder="MM"
            onChange={monthInputHandler}
            onBlur={monthBlurHandler}
            ></input>

            <input 
            type='number' 
            min='23' 
            max='30' 
            placeholder="YY"
            onChange={yearInputHandler}
            onBlur={yearBlurHandler}
            ></input>

            {isExpirationDatInvalid && <p className={styles.warning}>Invalid expiration date</p> }
          </div>

          <div className={styles['input-container__input']}>
            <label>CVC</label>
            <br></br>
            <input 
            type='number' 
            placeholder="e.g. 123"
            onChange={cvvInputHandler}
            onBlur={cvvBlurHandler}
            ></input>
            {isCvvInputInvalid && <p className={styles.warning}>Wrong cvv. Must contain only 3 digits</p> }
          </div>

        </div>

      </div>

      <button type="submit">Confirm</button>
    </form>
  </section>
}

export default UserForm;