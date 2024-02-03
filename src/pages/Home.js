import React from "react";
import Navbar from "../features/navbar/Navbar";
import { ProductList } from "../features/Product-list/ProductList";

export default function Home() {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
}
