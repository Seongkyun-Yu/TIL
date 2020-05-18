import React from 'react';
import { DustProvider } from './Context/DustContext';
import FineDust from './Components/template/FineDust';

function App() {
  return (
    <DustProvider>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
      />
      <FineDust />
    </DustProvider>
  );
}

export default App;
