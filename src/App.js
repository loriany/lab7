import AuthScreen from './Authority/Authority'
//import WeatherPage from './WeatherPage/WeatherPage'
import Preload from './Preload/Preload'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {Suspense, } from 'react';
import './App.css';
const WeatherPage = React.lazy(() => import('./WeatherPage/WeatherPage'));


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route  index element={<AuthScreen />}/>
          <Route path="/dashboard" element={<Suspense fallback={<Preload />}><WeatherPage /></Suspense>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
