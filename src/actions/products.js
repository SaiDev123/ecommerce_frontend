
import axios from 'axios';

const BASE_URL= "http://localhost:31019/"

export function getProducts(){
    alert("I am in products");
    let url=`${BASE_URL}admin/allProducts`;
    console.log('url',url);
    let promise=axios.get(url);
    console.log('promise',promise);
    return {
        type:'PRODUCTS',
        payload:promise
    }
    
}

export function addANewProduct(product){
    alert("adding new product");
    let url=`${BASE_URL}admin/addProduct`;
    console.log('url',url);
    let promise=axios.post(url,product);
    console.log('promise',promise);
    return {
        type:'ADD_PRODUCT',
        payload:promise
    }
    
}