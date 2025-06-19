import React from 'react';
import './ProductCard.css';

interface Props {
    name: string;
    price: number;
    imageUrl: string;
}

const ProductCard: React.FC<Props> = ({ name, price, imageUrl }) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>Price {price}</p>
            <img src={imageUrl} alt="product" className="image"/>
        </div>
    );
}

export default ProductCard;