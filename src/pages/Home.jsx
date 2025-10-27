import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductCard } from "../components/ProductCard";
import "./Home.css";

export function Home(){
    const {products, loading, error} = useContext(ProductContext);
    if (loading) {
        return <div>Loading products...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    return(
        <div className="homepage">
            <div id="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
}