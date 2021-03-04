import React,{useState} from 'react';
import { bindActionCreators } from "redux";
import {connect} from 'react-redux';
import {addANewProduct} from '../actions/products';

function AddProduct(props){

      const [product,setProduct]=useState({
        pid:'',
        product_name:'',
        price:'',
        category:'',
        product_image:'',
        sub_category:'',
        seller:'',
        product_specifications:'',
        offers:[],
        reviews:[]
      });

    const onInputChange= (event) => {
        var name=event.target.name;
        var value=event.target.value;
          if(name == 'price'){
              value= parseInt(value);
          }
        console.log(name+ "\t"+ value);
         setProduct(product => ({
            ...product,
            [name] : value
        }))
    }
      const add= (event) => {
          event.preventDefault();
          console.log('product',product);
          props.addANewProduct(product);
          if(props.isProductAdded){
            alert("product added")
          }
          else
          {
              alert("some issue, try again later");
          }
      }
    return(
        <div>        
Enter Product Id: <input onChange={onInputChange} className="form-control" type="text" name="pid"></input> <br></br>
Enter name of product: <input onChange={onInputChange} className="form-control" type="text" name="product_name"></input> <br></br>
Enter Product Price: <input onChange={onInputChange} className="form-control" type="text" name="price"></input> <br></br>
Enter product_image: <input onChange={onInputChange} className="form-control" type="text" name="product_image"></input> <br></br>
Enter  category: <input onChange={onInputChange} className="form-control" type="text" name="category"></input> <br></br>
Enter SubCategory: <input onChange={onInputChange} className="form-control" type="text" name="sub_category"></input> <br></br>
Enter Seller: <input onChange={onInputChange} className="form-control" type="text" name="seller"></input> <br></br>
Enter Product Specifications: <input onChange={onInputChange} className="form-control" type="text" name="product_specifications"></input> <br></br>

<button onClick={add}>Submit</button>

        </div>
    )

}
function mapStateToProps(appState){
    console.log("appState",appState);
    return {isProductAdded: appState.isProductAdded};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addANewProduct:addANewProduct}, dispatch);
  }
export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);;