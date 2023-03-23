import { useState } from "react";
import cardDetailsContext from "./card-context";

const ContextProvider = (props) => {

  const [sendingData, setSendingData] = useState(false);
  const [didSubmitData, setDidSubmitData] = useState(false);
  const [error, setError] = useState(null);
  const [cardDetails, setCardDetails] = useState('')

  const submitCardDetailsHandler = async (cardDetailsArray) => {
    setSendingData(true);
    setError(null);

    try{

      const response = await fetch('https://react-section14-htpp-default-rtdb.firebaseio.com/card-details.json', {
        method: 'POST',
        body: JSON.stringify(cardDetailsArray),
      });

      if(!response.ok) {
        throw new Error ('Something went wrong!')
      }
  
    } catch (error) {

      setError(error.message);
    }


    setCardDetails(cardDetailsArray);
    setDidSubmitData(true);
    setSendingData(false);

  };

  const continueHandler = () => {
    setDidSubmitData(false);
  }




  const cardContext = {
    cardDetails,
    error,
    isDataSent: sendingData,
    didSubmitData,
    submitCardDetails: submitCardDetailsHandler,
    continueModal: continueHandler,
  }


  return <cardDetailsContext.Provider value={cardContext}>
    {props.children}
  </cardDetailsContext.Provider>
}

export default ContextProvider;
