import React  from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Model from './pages/Model';
import Anos from './pages/Anos';
import Valor from './pages/Valor';


 function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/model/:markald" element={<Model/>} />
    <Route path="/model/:markald/anos/:modelld" element={<Anos/>} />
    <Route path="/valor/:markald/:modelld/:yil" element={<Valor/>}/>
    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App;
