import React from 'react';
import { bindActionCreators } from "redux";
import {registerNewUser} from '../actions/user';
import {connect} from 'react-redux';

class Register extends React.Component{

    constructor(){
        super();

        this.state={
            username: '',
            password:'',
            emailId:'',
            role:'ROLE_CUSTOMER'

        }
    }

              onInputChange= (event) => {
                      var name=event.target.name;
                      var value=event.target.value;
                       this.setState({[name]:value});
              }

              registerUser = (event) =>{
                  event.preventDefault();
                  console.log('state',this.state);
                  this.props.registerNewUser(this.state);
                  console.log('userlogged in',this.props.isUserLoggedIn);
                  
              }
    
    render(){
               console.log('render called');
                if(this.props.isUserLoggedIn){
                    this.props.history.push('/dashboard');
                }
        return(
            <form>

                Enter Username: <input onChange={this.onInputChange} className="form-control" type="text" name="username"></input> <br></br>
                Enter Password: <input onChange={this.onInputChange} className="form-control" type="password" name="password"></input> <br></br>
                Enter EmailId: <input onChange={this.onInputChange} className="form-control" type="text" name="emailId"></input><br></br>
                <button onClick={this.registerUser}>Submit</button>
             
            
       
            </form>
        )
    }
}

function mapStateToProps(appState){
    console.log("appState",appState);
    return {isUserLoggedIn: appState.isUserLoggedIn};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({registerNewUser:registerNewUser}, dispatch);
  }
export default connect(mapStateToProps,mapDispatchToProps)(Register);