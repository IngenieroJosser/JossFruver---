import React from 'react';
import ProductCardProps, { ProductCardProps as ProductProps } from '../components/ProductCardProps';
import '../styles/scss/modules/_shoppingCart.scss';
import BasketItem from './BasketItem';

import tomato from '../assets/img/tomato.png'
import onion from '../assets/img/onion.png'
import ginger from '../assets/img/ginger.png'
import garlic from '../assets/img/garlic.jpeg'

const ProductCard: React.FC = () => {
    const products: ProductProps[] = [
        {
            image: tomato,
            titleProduct: 'Tomato',
            productoBook: '$5.99 / lb',
            price: 19.99,
            alltr: 'Product 1 Image'
        },
        {
            image: onion,
            titleProduct: 'Cebolla Roja',
            productoBook: '$12.99 / lb',
            price: 29.99,
            alltr: 'Product 2 Image'
        },
        {
            image: ginger,
            titleProduct: 'Jengibre',
            productoBook: '$2.99 / lb',
            price: 39.99,
            alltr: 'Product 3 Image'
        },
        {
            image: garlic,
            titleProduct: 'Ajo',
            productoBook: '$3.99 / lb',
            price: 49.99,
            alltr: 'Product 4 Image'
        }
    ];

    return (
        <div className="App">
            <BasketItem />
            {products.map((product, index) => (
                <ProductCardProps
                    key={index}
                    image={product.image}
                    titleProduct={product.titleProduct}
                    productoBook={product.productoBook}
                    price={product.price}
                    alltr={product.alltr}
                />
            ))}
        </div>
    );
};

export default ProductCard;
