import React from 'react';
import ContextProvider from './context/ContextProvider';
import Main from './Components/Main';


function App() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
}

export default App;
