import { Route, Routes, useLocation } from 'react-router-dom'
import { Home, LandingTienda, PreguntasFrecuentes, ChatGPT, SelectArea, Contact, AboutUs, Jardineria, Parafernalia, MateriaPrima, Semillas, Dashboard} from "./views/indexViews"
import { Nav, LeftNav, RightNav, Footer , /*LogIn*/} from './components/indexComponents';
import './App.css'
import { useState } from 'react';



function App() {
  const { pathname } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
   <div className="background-shadow">
      <img src="/IMG_3731.JPG" className="background-image"></img>

      { pathname !== "/dashboard" && <LeftNav/>}
      { pathname !== "/dashboard" && <RightNav/>}
      <Nav onLinkClick={handleModalOpen}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/LandingTienda' element={<LandingTienda/>}/>
        <Route path='/PreguntasFrecuentes' element={<PreguntasFrecuentes/>}/>
        <Route path='/chat' element={<ChatGPT/>}/>
        <Route path='/selectArea' element={<SelectArea/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/Jardineria' element={<Jardineria/>}/>
        <Route path='/Parafernalia' element={<Parafernalia/>}/>
        <Route path='/MateriaPrima' element={<MateriaPrima/>}/>
        <Route path='/Semillas' element={<Semillas/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        {/*<Route path='/login' element={<LogIn isOpen={isModalOpen} onClose={handleModalClose} />}/>*/}
      </Routes>
      <Footer/>
   </div>
  );
}

export default App
