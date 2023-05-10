import Product from "./Product";
import { useEffect, useState } from 'react';

function ProductsList() {
    const apiUrl = 'https://fakestoreapi.com/products';
    const [productsData, setProductsData] = useState([]);
    const [categories, setCategories] = useState([]);

    const getProducts = () => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setProductsData(data));
    };

    const getCategories = () => {
        fetch(`${apiUrl}/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data));
    };

    const getProductInCategory = (catName) => {
        console.log(catName);
        fetch(`${apiUrl}/category/${catName}`)
            .then((res) => res.json())
            .then((data) => setProductsData(data));
    };

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);


    return (
        <>
            <h2 className="text-center p-3">Our Products</h2>
            <div className="container">
                <button
                    className="btn btn-info"
                    key="all" onClick={
                        getProducts
                    }
                >
                    all
                </button>
                {
                    categories.map((cat) => {
                        return (
                            <button
                                className="btn btn-info"
                                key={cat} onClick={() => {
                                    getProductInCategory(cat)
                                }}
                            >
                                {cat}
                            </button>
                        )
                    })
                }
                <div className="row">
                    {productsData.map((product) => {
                        return (
                            <div className="col-3" key={product.id}>
                                <Product product={product} showButton={true} />
                            </div>
                        )
                    })}
                </div>
            </div >
        </>
    );
}

export default ProductsList;