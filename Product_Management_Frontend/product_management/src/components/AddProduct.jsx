import React from 'react'
import { useState } from 'react';
import product_service from '../service/product_service';

function AddProduct() {

    const [product,setProduct]=useState({
        productName:"",
        description:"",
        price:"",
        status:""
    });

    const [message,setMessage]=useState("")

    const handleChange=(e)=>{
        const value=e.target.value;
        setProduct({...product,[e.target.name]:value})
    }

    const ProductRegister=(e)=>{
        e.preventDefault();
        console.log(product);
        product_service.saveProduct(product).then((res)=>{
            setMessage("Product Added successfully");
            setProduct({
                productName:"",
                description:"",
                price:"",
                status:""
            });

        }).catch((error)=>{
            console.log(error);
        })   
    }

  return (
    <div className='container mt-3'>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header fs-3 text-center">
                        Add product
                        {
                            message &&
                            <p className='fs-4 text-success'>{message}</p>
                        }
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e)=>ProductRegister(e)}>
                            <div className="mb-3">
                                <label htmlFor="productName">Enter product name</label>
                                <input type="text" id="productName"  name='productName' className='form-control' onChange={(e)=>{handleChange(e)}} value={product.productName}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="productDescription">Enter product description</label>
                                <input type="text" id="productDescription"  name='description' className='form-control' onChange={(e)=>{handleChange(e)}} value={product.description}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="productPrice">Enter product price</label>
                                <input type="number" id="productPrice"  name='price' className='form-control' onChange={(e)=>{handleChange(e)}} value={product.price}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="productStatus">Enter product status</label>
                                <input type="text" id="productStatus"  name='status' className='form-control' onChange={(e)=>{handleChange(e)}} value={product.status}/>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary form-control" type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct