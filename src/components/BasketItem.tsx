import React from 'react'
import '../styles/scss/components/_basketItem.scss'

const BasketItem: React.FC = () => {
    return(
        <div className='flex-b-items'>
            <h1 className='text-basket'>Basket</h1>
            <span className='text-items'>3 items</span>
        </div>
    );
}

export default BasketItem