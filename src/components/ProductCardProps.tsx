import React, { useState } from 'react';
import '../styles/scss/modules/_shoppingCart.scss';

interface ProductCardProps {
    image: string;
    titleProduct: string;
    productoBook: string;
    price: number;
    alltr: string;
}

const ProductCardProps: React.FC<ProductCardProps> = ({ image, titleProduct, productoBook, price, alltr }) => {
    // Estado para el botón de "Buy"
    const [isBought, setIsBought] = useState<boolean>(false);

    // Maneja el click del botón
    const handleBuyClick = () => {
        setIsBought(!isBought);
    };

    return (
        <>
            <section className="product-card">
            <img src={image} alt={alltr} />
            <div className="flex-left-product-card">
                <h3>{titleProduct}</h3>
                <span>{productoBook}</span>
            </div>
            <div className="flex-right-product-card">
                <p>${price.toFixed(2)}</p>
                <button className="btn-buy" onClick={handleBuyClick}>
                    {isBought ? 'Bought' : 'Buy'}
                </button>
            </div>
        </section>
        </>
    );
};

export default ProductCardProps;
export type { ProductCardProps };
