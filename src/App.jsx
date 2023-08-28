import { useState } from 'react'
import { Route, Routes, useLocation} from 'react-router-dom'
import { Home, Landing, LandingTienda, PreguntasFrecuentes, ChatGPT, SelectArea, Contact, AboutUs} from "./views/indexViews"
import {NavBar,BotonesNav,Products, CarrouselTienda,LogIn}  from './components/indexComponents'
import './App.css'


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const {pathname}=useLocation();
  return (
   <>
   {pathname !=="/"  && <NavBar  onLinkClick={handleModalOpen} />}
    <Routes>
      <Route exact path="/" element={<Landing/>} /> 
      <Route path='/home' element={<Home/>}/>
      <Route path='/LandingTienda' element={<LandingTienda/>}/>
      <Route path='/PreguntasFrecuentes' element={<PreguntasFrecuentes/>}/>
      <Route path='/chat' element={<ChatGPT/>}/>
      <Route path='/selectArea' element={<SelectArea/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/login' element={<LogIn isOpen={isModalOpen} onClose={handleModalClose} />}/>
    </Routes>
   </>
  );
}

export default App
