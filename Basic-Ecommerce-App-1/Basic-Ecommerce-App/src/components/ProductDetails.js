import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
    const apiUrl = "https://fakestoreapi.com/products";
    const params = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`${apiUrl}/${params.productID}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [])

    return (
        <>
            <Product product={product} showButton={false}/>
        </>
    );
}

export default ProductDetails;