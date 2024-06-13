import React from 'react'
import product_service from '../service/product_service';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {

  const [productList,setProductList]=useState([]);
  
  const [message,setMessage]=useState("")
  
  useEffect(()=>{
    init();
    },[])
    
    
    const init=()=>{
    product_service
    .getAllProducts()
    .then((res)=>{
      setProductList(res.data);
      console.log("products are:"+res.data[0].productName);
      }).catch((error)=>{
      console.log(error);
      })
      }
      
      const deleteProduct=(id)=>{
          product_service.deleteProduct(id).then((res)=>{
              setMessage("Delete SuccessFully");
              init();
          }).catch((error)=>{
            console.log(error)
          })
      }


      return (
        <div className='container mt-4'>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header fs-3  text-center">
              All Product List
              {
                message &&
                <p className='fs-4 text-success'>{message}</p>
              }
            </div>
            <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sr.</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                  {
                    productList.map((p,num)=>{
                    return(
                        <tr key={num}>
                          <td>{num+1}</td>
                          <td>{p.productName}</td>
                          <td>{p.description}</td>
                          <td>{p.price}</td>
                          <td>{p.status}</td>
                          <td>
                            <Link to={`/editProduct/`+p.id} className='btn btn-primary btn-sm mx-2'>Edit</Link>
                            <button onClick={()=>{deleteProduct(p.id)}} className='btn btn-sm btn-danger mx-2'>Delete</button>
                          </td>
                        </tr>
              
                    )})
                }
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
