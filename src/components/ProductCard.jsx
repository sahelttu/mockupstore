import { useState } from "react";
import "./ProductCard.css";

export function ProductCard({product}){
    const [quantity, setQuantity] = useState(1);

    return(
        <div className="product-card">
            <img id="product-image" src={product.image} alt={product.title} />
            <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description.substring(0, 100)}...</p>
                <span id="product-price">${product.price}</span>
                <div id="quantity-control">
                    <button className="quantity-button" onClick={() => setQuantity((prev) => Math.max(1, prev - 1 ))} disabled={quantity === 1}>-</button>
                    <span id="quantity-number">{quantity}x</span>
                    <button className="quantity-button" onClick={() => setQuantity((prev) => Math.max(1, prev + 1 ))}>+</button>
                </div>
                <button id="add-to-cart">Add to cart</button>
            </div>
        </div>
    )
}