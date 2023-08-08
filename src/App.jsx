import { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation} from 'react-router-dom'
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing'
import NavBar from './components/NavBar';
function App() {
  const {pathname}=useLocation();

  return (
   <>
   {pathname !== "/" && <NavBar/>}
    <Routes>
      <Route  exact path="/" element={<Landing/>} /> 
      <Route path='/home' element={<Home/>}/>
    </Routes>
   </>
  );
}

export default App
