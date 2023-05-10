import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const apiUrl = 'http://localhost:9000';
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);

    let navigate = useNavigate();

    const formSubmit = (e) => {
        e.preventDefault();

        axios
            .post(`${apiUrl}/products`, {
                title,
                price
            })
            .then(() => {
                navigate('/products');
            })

        // fetch(`${apiUrl}/products`, {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "Application/json"
        //     },
        //     body: JSON.stringify({
        //         title,
        //         price
        //     })
        // })
        //     .then((res) => res.json())
    }

    return (
        <>
            <h1>Add Product</h1>
            <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label htmlFor="productTitle" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="productTitle"
                        aria-describedby="Product title"
                        placeholder="Product title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">
                        Price
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="productPrice"
                        aria-describedby="Product price"
                        placeholder="Product price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Product
                </button>
            </form>
        </>
    );
}

export default AddProduct;