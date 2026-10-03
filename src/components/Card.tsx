import React, { useState, type Dispatch, type SetStateAction } from "react";
import type { productType } from "../types/types";
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

interface iCard{
     product: productType,
    selectProduct: productType[],
    setSelectedProduct: Dispatch<SetStateAction<productType[]>>;
     }
const Card = ({ product,selectProduct,setSelectedProduct }: iCard) => {

    const [isAdded,setIsAdded] = useState(false)
    console.log(selectProduct)
   const handleSelectedProduct=()=>{
        setIsAdded(true)
        setSelectedProduct([...selectProduct,product]);
        toast.success('Added Succesfully')
       
   }
   

  return (
    <div className="w-full">
      <div className="card w-full h-full bg-base-100 shadow-sm">
        <div className="card-body p-4 sm:p-5">

          {/* Icon + Badge */}
          <div className="flex items-start justify-between gap-3">
            <img
              src={product.icon}
              alt={product.name}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />

            <button className="btn btn-xs sm:btn-sm rounded-xl">
              {product.badge}
            </button>
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            {product.name}
          </h2>

          {/* Description */}
          <p className="text-sm leading-6 text-base-content/70">
            {product.description}
          </p>

          {/* Information */}
          <div className="mt-3 border-t border-gray-200 pt-4">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-around">

              {/* Category */}
              <button className="btn btn-xs sm:btn-sm px-3 sm:px-4">
                {product.category}
              </button>

              {/* Difficulty */}
              <span className="text-xs sm:text-sm text-base-content/70">
                {product.difficulty}
              </span>

              {/* Rating */}
              <div className="flex items-center gap-1 text-xs sm:text-sm">
                <FaStar className="text-warning" />
                <span>{product.rating}</span>
              </div>

            </div>
          </div>

          {/* Button */}
          <div className="mt-4">
            <button onClick={()=>handleSelectedProduct()} className={`btn btn-primary btn-block btn-${isAdded ?"disabled":''}`}  >
                {isAdded ? '✓ Added to Stack':'Add to Stack'}
                
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;