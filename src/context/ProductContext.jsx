import {createContext, useState, useEffect} from "react";

export const ProductContext = createContext();

export function ProductProvider({children}){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const fetchProducts = async () => {
            try {
                fetch("https://fakestoreapi.com/products")
                    .then((response) => response.json())
                    .then((data) => setProducts(data));
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch products");
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return(
        <ProductContext.Provider value={{products, loading, error}}>
            {children}
        </ProductContext.Provider>
    )
}