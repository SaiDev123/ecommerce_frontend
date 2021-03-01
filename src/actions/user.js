
import axios from 'axios';

const BASE_URL= "http://localhost:10019/"

export function registerNewUser(user){
    alert("I am in register");
    console.log('user',user);
    let url=`${BASE_URL}user/register`;
    console.log('url',url);
    let promise=axios.post(url,user);
    console.log('promise',promise);
    return {
        type:'REGISTER',
        payload:promise
    }
    
}

export function loginUser(user){
    alert("I am in login");
    console.log('user',user);

    let url=`${BASE_URL}user/login`;
    console.log('url',url);
    let promise=axios.post(url,user);
    console.log('promise',promise);
    return {
        type:'LOGIN',
        payload:promise
    }
    
}