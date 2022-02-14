import React from 'react';
import LineupDetails from './pages/LineupDetails';
import './globalStyles/font.css'
import { FieldContextProvider } from './contexts/FieldContext';

function App() {
  return (
    <>
      <FieldContextProvider>
        <LineupDetails />
      </FieldContextProvider>
    </>
  );
}

export default App;
