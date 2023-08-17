import { useState } from 'react'

import { Route, Routes, useLocation} from 'react-router-dom'
import { Home, Landing, LandingTienda, PreguntasFrecuentes, ChatGPT } from "./views/indexViews"
import NavBar from './components/NavBar';
import './App.css'

function App() {
  const {pathname}=useLocation();
  return (
   <>
   {pathname !== "/" && <NavBar/>}
    <Routes>
      <Route  exact path="/" element={<Landing/>} /> 
      <Route path='/home' element={<Home/>}/>
      <Route path='/LandingTienda' element={<LandingTienda/>}/>
      <Route path='/PreguntasFrecuentes' element={<PreguntasFrecuentes/>}/>
      <Route path='/chat' element={<ChatGPT/>}/>
    </Routes>
   </>
  );
}

export default App
