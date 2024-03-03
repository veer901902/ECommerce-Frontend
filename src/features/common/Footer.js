import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    // <div className="">
    //   <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8">
    //     <div className="sm:flex sm:items-center sm:justify-between">
    //       <a
    //         href="#"
    //         target="_blank"
    //         className="flex items-center mb-4 sm:mb-0"
    //       >
    //         <img
    //           src="https://flowbite.com/docs/images/logo.svg"
    //           className="mr-4 h-8"
    //           alt="Flowbite Logo"
    //         />
    //         <span className="self-center text-xl font-semibold whitespace-nowrap">
    //           Infinite Cart
    //         </span>
    //       </a>
    //       <ul className="mr-14 flex flex-wrap items-center mb-6 sm:mb-0">
    //         <li>
    //           <Link
    //             to="/"
    //             className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
    //           >
    //             Product
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/cart"
    //             className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
    //           >
    //             Cart
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
    //       © 2024
    //       <a href="#" target="_blank" className="hover:underline">
    //         InfiniteCart™
    //       </a>
    //       . All Rights Reserved.
    //     </span>
    //   </footer>
    // </div>
    <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm text-gray-500 sm:text-center">
        © 2024 <span>InfiniteCart™</span>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/" className="hover:underline me-4 md:me-6">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="hover:underline me-4 md:me-6">
            Cart
          </Link>
        </li>
      </ul>
    </footer>
  );
}
