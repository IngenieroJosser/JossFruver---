import React from "react";
import Header from "../components/Header";
import '../styles/scss/modules/_shoppingCart.scss';

import ProductCard from "../components/ProductCard";

const ShoppingCart: React.FC = () => {
    return (
        <>
            <Header />
            <ProductCard />
        </>
    );
}

export default ShoppingCart