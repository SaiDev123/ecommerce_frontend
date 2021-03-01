import React,{useState} from 'react';

function AddProduct(){

      const [product,setProduct]=useState(0,{});

    const onInputChange= (event) => {
        var name=event.target.name;
        var value=event.target.value;
        console.log(name+ "\t"+ value);
         setProduct({[name]:value});
      }

      const add= (event) => {
          event.preventDefault();
          console.log('product'.product);
      }

    return(
        <div>        
Enter Product Id: <input onChange={onInputChange} className="form-control" type="text" name="productId"></input> <br></br>
Enter name of product: <input onChange={onInputChange} className="form-control" type="password" name="name"></input> <br></br>
<button onClick={add}>Submit</button>

        </div>
    )

}
export default AddProduct;