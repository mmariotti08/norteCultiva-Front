import { Route, Routes } from 'react-router-dom'
import { Home, LandingTienda, PreguntasFrecuentes, ChatGPT, SelectArea, Contact, AboutUs, Jardineria, Parafernalia, MateriaPrima, Semillas} from "./views/indexViews"
import { Nav, LeftNav, RightNav, Footer ,LogIn} from './components/indexComponents';
import './App.css'



function App() {
  return (
   <div className="background-shadow">
      <img src="/IMG_3731.JPG" className="background-image"></img>
      <LeftNav/>
      <Nav/>
      <RightNav/>
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
        <Route path='/login' element={<LogIn isOpen={isModalOpen} onClose={handleModalClose} />}/>
      </Routes>
      <Footer/>
   </div>
  );
}

export default App
