import React, {useState, useEffect} from 'react'
import Axios from 'axios';



function Product() {
    const [products,setProducts] = useState([]);
    useEffect (() => {
        Axios.get('http://localhost:3001/api/products')
        .then((response) => {
            console.log(response.data)
            setProducts(response.data)
        })
        .catch((err) => {
            throw err
        });
    },[]) 
    return(
        // CARD 1
        <div>
            <h6>Filter: </h6>
        <div id="fButtons">
            <button id="button" class="btn btn-light" onclick="filterProduct">Description</button>
            <button id="button" class="btn btn-light" onclick="filterProduct">Size</button>
            <button id="button" class="btn btn-light" onclick="filterProduct">Add to Cart</button>
        </div>
        <div>
        <div id="cardAlign" class="row">
            {
                products.map(record => (

                    <div class="col-sm-6">
                        <div id="hide" class="card">
                            
                            <div class="card-body">
                                <img class="card-img" src={ record.image } alt="Card image cap"/>
                                <h4 id="text-bolder"class="card-title"> {record.size}</h4>
                                <p class="card-text"> {record.description}</p>
                                <p class="card-text"> {record.price}</p>
                                <button class="btn btn-primary">Add to cart</button>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
        </div>    
      </div>
    )}
export default Product