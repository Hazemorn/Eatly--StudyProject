import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage'


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='' element={<Homepage/>}/>
        {/* <Route path='/about-us' element={<About/>}/> */}
    </Routes>    
    </BrowserRouter>
  );
}

export default App;
