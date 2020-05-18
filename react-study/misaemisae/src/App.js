import React from 'react';
import { DustProvider } from './Context/DustContext';
import FineDust from './Components/template/FineDust';

function App() {
  return (
    <DustProvider>
      <FineDust />
    </DustProvider>
  );
}

export default App;
