import { Route, Routes } from 'react-router-dom'
import { Home, LandingTienda, PreguntasFrecuentes, ChatGPT, SelectArea, Contact, AboutUs} from "./views/indexViews"
import { Nav, LeftNav, RightNav } from './components/indexComponents';
import './App.css'



function App() {
  return (
   <>
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
    </Routes>
   </>
  );
}

export default App
