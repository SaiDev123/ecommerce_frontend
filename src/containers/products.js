import React from 'react';
import { bindActionCreators } from "redux";
import {getProducts} from '../actions/products';
import {connect} from 'react-redux';

class Products extends React.Component{

    constructor(){
        super();

        this.state={
            products: [],
            
        }
    }
    componentDidMount(){
        this.props.getProducts();
    }
    render(){
        return(
            <form>

               <h1>Products {this.props.products.length}</h1>

            </form>
        )
    }
}
function mapStatetoProps(appState){
    console.log(appState);
   return {products: appState.products}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getProducts:getProducts}, dispatch);
  }
export default connect(mapStatetoProps,mapDispatchToProps)(Products);