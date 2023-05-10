import './Products.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function Products() {
    const apiUrl = 'http://localhost:9000';
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = () => {
        fetch(`${apiUrl}/products`)
            .then((res) => res.json())
            .then((data) => setProductsData(data));
    }

    const deleteProduct = (product) => {
        Swal.fire({
            title: `Do you want to delete ${product.title}?`,
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`${apiUrl}/products/${product.id}`, {
                    method: 'DELETE'
                })
                    .then((res) => res.json())
                    .then(() => getAllProducts());
            }
        });
    }
    return (
        <>
            <h1>Products Page</h1>
            <Link to={'/products/add'} className="btn btn-success btn-sm mt-3">Add New Product</Link>
            <table className="table table-striped mt-5 products-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {productsData &&
                        productsData.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={() => { deleteProduct(product) }}>Delete</button>
                                        <Link to={`/products/${product.id}`} className="btn btn-info btn-sm">Details</Link>
                                        <button className="btn btn-primary btn-sm">Edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Products;