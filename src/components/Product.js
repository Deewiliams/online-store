import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Product = () => {
    const [product, setProduct] = useState([])
    // const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then (res => {
            console.log(res);
            setProduct(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    },[])
           
    
       
    return (
        <div className="bg-blue-100">
            <ul>
                {
                    product.map(products => (
                        <li key={products.id}>{products.category} </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Product
