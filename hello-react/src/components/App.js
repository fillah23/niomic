import React from 'react';
import Header from "./Header";
import Footer from './Footer';
import List from './List';
import Top from './Top'
import Main from './Main'

function App(){
  return(
    <div>
      <Header list="3 makanan terbaik"></Header>
      <Top/>
      <Main/>
      <List/>
      <Footer name="Masakan Nusantara"/>
    </div>
  )
}

export default App;
