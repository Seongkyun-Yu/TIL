import React from 'react';
import { WeatherContextProvider } from './Context/WeatherContext';
import Weather from './Pages/Weather';

function App() {
  return (
    <WeatherContextProvider>
      <Weather />
    </WeatherContextProvider>
  );
}

export default App;
