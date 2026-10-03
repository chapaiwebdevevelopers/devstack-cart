
import { Suspense, useState } from 'react';
import Hero from './components/Hero'
import Nav from './components/Nav'
import Tech from './components/Tech';
import Footer from './components/Footer';
// import Footer from '/compenents/Footer'


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
        <Suspense fallback='<p> Loading... Wait few second</p>'>
                <Tech productsPromise={productsPromise}></Tech>
        </Suspense>

      </div>
      <Footer></Footer>
      

    </>
  )
}

export default App
