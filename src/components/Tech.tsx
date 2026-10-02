import React, { use } from 'react';
import type { productType } from '../types/types';
import Cards from './Cards';

interface productsProps{
    productsPromise: Promise<productType[]>,
}

const Tech = ({productsPromise}:productsProps) => {
    const products = use(productsPromise);
    
    return (
        <>
            <div className='space-y-3 mb-6'>
                <h2 className='text-2xl sm:text-3xl font-semibold'>
                    Explore the{' '}
                    <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>
                        Technologies
                    </span>
                </h2>

                <p className='text-sm sm:text-base text-base-content/70'>
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className='w-full'>
                <Cards products={products}></Cards>
            </div>
        </>
    );
};

export default Tech;