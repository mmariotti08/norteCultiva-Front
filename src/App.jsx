import { useState } from 'react'

import { Route, Routes, useLocation} from 'react-router-dom'
import { Home, Landing, LandingTienda, PreguntasFrecuentes, ChatGPT, SelectArea } from "./views/indexViews"
import NavBar from './components/NavBar/NavBar';
import './App.css'

function App() {
  const {pathname}=useLocation();
  return (
   <>
   {pathname !== "/PreguntasFrecuentes" && <NavBar/>}
    <Routes>
      <Route exact path="/" element={<Landing/>} /> 
      <Route path='/home' element={<Home/>}/>
      <Route path='/LandingTienda' element={<LandingTienda/>}/>
      <Route path='/PreguntasFrecuentes' element={<PreguntasFrecuentes/>}/>
      <Route path='/chat' element={<ChatGPT/>}/>
      <Route path='/selectArea' element={<SelectArea/>}/>
    </Routes>
   </>
  );
}

export default App
