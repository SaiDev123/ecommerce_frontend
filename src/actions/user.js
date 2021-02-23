
import axios from 'axios';

const BASE_URL= "http://localhost:9014/"

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