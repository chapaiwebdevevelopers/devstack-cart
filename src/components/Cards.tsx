import  { useState } from "react";
import type { productType } from "../types/types";
import AvailableCard from "./AvailableCard";
import CartCard from "./CartCard";

interface cardsProps {
  products: productType[];
}

const Cards = ({ products }: cardsProps) => {
    const[selectProduct,setSelectedProduct]=useState<productType[]>([]);
    // console.log(selectProduct)
 
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">



      {/* Available Products */}
      <div className="lg:col-span-3">
        <AvailableCard products={products} selectProduct={selectProduct} setSelectedProduct={setSelectedProduct} />
      </div>

      {/* Cart */}
      <div className="lg:col-span-1 sticky top-20 h-fit max-h-[calc(100vh-2rem)] overflow-y-auto">
        <CartCard selectProduct ={selectProduct} setSelectedProduct={setSelectedProduct}  />
      </div>

    </div>
  );
};

export default Cards;