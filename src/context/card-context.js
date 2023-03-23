import React from "react";
const cardDetailsContext = React.createContext({
  cardDetails: '',
  error:  null,
  isDataSent: null,
  didSubmitData:null,
  submitCardDetails: () => {},
  continueModal: () => {},
})

export default cardDetailsContext;