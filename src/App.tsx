
import { useState } from 'react';
import Hero from './components/Hero'
import Nav from './components/Nav'
import Tech from './components/Tech';


const dataFetch = async()=>{
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
}

const productsPromise =dataFetch()


function App() {


  return (
    <>

      <div className="container mx-auto">
        <Nav></Nav>
        <Hero></Hero>
        <Tech productsPromise={productsPromise}></Tech>

      </div>

    </>
  )
}

export default App
