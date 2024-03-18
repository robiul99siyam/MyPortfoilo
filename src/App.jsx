import Home from './data/index';
import React from 'react';

import About  from "./pages/About"
import { BrowserRouter , Route, Routes  } from 'react-router-dom';
import Contact from './pages/Contact';
import Portfoilo from './pages/Portfoilo';
const App =  ()=>
{
  return(
    <div>
      <BrowserRouter>
      
      <Routes>

        <Route path='/' element={  <Home />}></Route>

        <Route path='/About' element={  <About />}></Route>


        <Route path='/Contact' element={  <Contact />}></Route>

        <Route path='/Portfoilo' element={ <Portfoilo/> }></Route>


       

      </Routes>

      </BrowserRouter>
    </div>
  );
}
export default App;