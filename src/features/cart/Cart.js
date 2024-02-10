import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { deleteItemFromCartAsync, selectItems, updateCartAsync } from "./cartSlice";

export function Cart() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const items = useSelector(selectItems);
  const totalAmount = items.reduce((amount, item) => {
    return (amount = item.quantity * item.price + amount);
  }, 0);

  const totalItems = items.reduce(
    (total, item) => (total = total + item.quantity),
    0
  );

    function handleQuantity(e, item){
       dispatch(updateCartAsync({...item, quantity: +e.target.value}));
    };

    function handleRemove(e, id){
      dispatch(deleteItemFromCartAsync(id));
    }


  return (
    <div className="m-15">
      <div className="mx-auto pt-1 mt-[80px] bg-white max-w-[900px] px-4 sm:px-6 lg:px-8">
        <h1 className="mt-10 -mb-[100px] text-3xl font-semibold">Cart</h1>
        <div className="flow-root mt-14">
          <ul role="list" className=" divide-y divide-gray-200 mt-14">
            {items.map((item) => (
              <li key={item.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={item.href}>{item.title}</a>
                      </h3>
                      <p className="ml-4">${item.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex grow">
                      <label className="text-gray-500 font-semibold">Qty</label>
                      <select onChange={(e)=>handleQuantity(e, item)} value={item.quantity} className="ml-1 -mt-[10px]">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>

                    <div className="flex">
                      <button
                        onClick={(e)=>{handleRemove(e, item.id)}}
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t max-w-[900px] border-gray-200 px-4 py-6 sm:px-6  mx-auto bg-white">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${totalAmount}</p>
        </div>
        <div className="flex justify-between my-2 text-base font-medium text-gray-900">
          <p>Total Items in Cart</p>
          <p>{totalItems} items</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <Link
            to = '/checkout'
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </Link>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            <Link to="/">
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => setOpen(false)}
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
