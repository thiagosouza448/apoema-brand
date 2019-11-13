import React from 'react';

import './App.css'; 
import Menu from './Components/Menu/Menu';
import Banner from './Components/Banner/Banner';
import Thumb from './Components/Thumb/Thumb';
import Bottoms from './Components/Bottoms/Bottoms';
import Vitrine from './Components/Vitrine/Vitrine';
import Titulo from './Components/Titulo/Titulo';




function App() {
  return (
    <div className="App">
         

    <Menu />
    <Banner />
    <Vitrine />
    < Bottoms/>
    < Thumb />
    <Titulo />
  
     
    </div>
  );
}

export default App;
