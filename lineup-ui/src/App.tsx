import React from 'react';
import './globalStyles/font.css'
import { FieldContextProvider } from './contexts/FieldContext';
import Routes from './routes';
function App() {
  return (
    <>
      <FieldContextProvider>
       <Routes />
      </FieldContextProvider>
    </>
  );
}

export default App;
