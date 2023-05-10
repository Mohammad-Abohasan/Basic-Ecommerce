import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const { productID } = useParams();
    const apiUrl = 'http://localhost:9000';
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        fetch(`${apiUrl}/products/${productID}`)
            .then((res) => res.json())
            .then((data) => setProductData(data));
    }, []);

    return (
        <>
            {productData &&
                <>
                    <h1>{productData.title}</h1>
                    {productData.description}
                </>
            }
        </>

    );
}

export default ProductDetails;