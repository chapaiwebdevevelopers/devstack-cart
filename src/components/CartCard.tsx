import React, { type Dispatch, type SetStateAction } from "react";
import type { productType } from "../types/types";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
interface iCartCard{ 
    selectProduct: productType[],
    setSelectedProduct: Dispatch<SetStateAction<productType[]>>;

 }

const CartCard = ({ selectProduct,setSelectedProduct }: iCartCard) => {
    console.log(selectProduct)
    const handleRemoveProduct = (productId: string) => {
            const restProduct = selectProduct.filter(item => item.id !== productId);
            setSelectedProduct(restProduct);
            toast.warn('Item Removed')
    }
    const handleRemoveAll = ()=>{
        setSelectedProduct([])
        toast.error('All item Removed')
    }
      return (
            <>
                  <div className="card bg-base-100 shadow-sm border border-gray-200 p-5">
                        <h2 className="text-3xl font-bold">Your Stack</h2>
                        {
                            selectProduct.length === 0 ? <p>No technologies selected yet.</p> : <p>{  selectProduct.length} Technology Selected</p>
                        }
                        {/* <p>{  selectProduct.length} Technology Selected</p> */}
                        {selectProduct.map((product, index) => (
                              // <p key={index}>{product.id}</p>
                              <div key={product.id} className="flex ss justify-between p-3 border border-gray-200 items-center my-3">
                                    <div className="flex space-x-5">
                                          <img
                                                width="40px"
                                                src={product.icon}
                                                alt=""
                                          />
                                          <div>
                                                <p className="text-xl">
                                                      {product.name}
                                                </p>
                                                <p>{product.category}</p>
                                          </div>
                                    </div>
                                    <button onClick={()=>handleRemoveProduct(product.id)}>
                                        <RxCross1></RxCross1>
                                    </button>
                              </div>
                              
                        ))}
                        {
                            selectProduct.length === 0 ? <button className="btn-outline border border-gray-200 py-2 my-5">Your stack is empty.</button> : <button onClick={()=>handleRemoveAll()} className="btn btn-outline btn-error">Remove All</button>
                        }
                            
  
                  </div>
            </>
      );
};

export default CartCard;
