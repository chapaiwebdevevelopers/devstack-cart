import React from 'react';
import heroImg from '../assets/banner-stack.png'
const Hero = () => {
    return (
        <>
        
        <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      alt="Hero Section"
      src={heroImg}
      className=" rounded-lg "
    />
    <div className='space-y-10'>
      <h2 className='text-5xl'>Build Your Ideal <br></br> <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span> </h2>
                <p>Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <button className='bg-gradient-to-r from-[#F97316] to-[#EC4899] px-4 py-2'>Explore Technolog</button>
                <button className='border-2 border-gray-300 px-4 py-2 mx-5'>Explore Technolog</button>
    </div>
  </div>
</div>
        
        </>






    );
};

export default Hero;