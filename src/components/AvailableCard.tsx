import React, { type Dispatch, type SetStateAction } from "react";
import type { productType } from "../types/types";
import Card from "./Card";

interface iAvailableCard { 
    products: productType[] ,
    selectProduct: productType[],
    setSelectedProduct: Dispatch<SetStateAction<productType[]>>;

}

const AvailableCard = ({ products,selectProduct,setSelectedProduct}: iAvailableCard) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} product={product} selectProduct={selectProduct} setSelectedProduct={setSelectedProduct} />
      ))}
    </div>
  );
};

export default AvailableCard;