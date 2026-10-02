import React from "react";
import type { productType } from "../types/types";
import { RxCross1 } from "react-icons/rx";

const CartCard = ({ selectProduct }: { selectProduct: productType[] }) => {


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
                              <div className="flex ss justify-between p-3 border border-gray-200 items-center my-3">
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
                                    <RxCross1></RxCross1>
                              </div>
                        ))}
                  </div>
            </>
      );
};

export default CartCard;
