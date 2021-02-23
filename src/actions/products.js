
import axios from 'axios';

const BASE_URL= "http://localhost:9014/"

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