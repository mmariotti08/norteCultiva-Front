import { useState } from 'react'
import { Route, Routes, useLocation} from 'react-router-dom'
import { Home, LandingTienda, PreguntasFrecuentes, ChatGPT, SelectArea, Contact, AboutUs} from "./views/indexViews"
import NavBar from './components/NavBar/NavBar';
import './App.css'


function App() {
  const {pathname}=useLocation();
  return (
   <>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/LandingTienda' element={<LandingTienda/>}/>
      <Route path='/PreguntasFrecuentes' element={<PreguntasFrecuentes/>}/>
      <Route path='/chat' element={<ChatGPT/>}/>
      <Route path='/selectArea' element={<SelectArea/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
    </Routes>
   </>
  );
}

export default App
