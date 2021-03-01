import React from 'react';
import { bindActionCreators } from "redux";
import {loginUser} from '../actions/user';
import {connect} from 'react-redux';

class Login extends React.Component{

    constructor(){
        super();

        this.state={
            emailId:'',
            password:'',
            role:''
        }
    }

              onInputChange= (event) => {
                      var name=event.target.name;
                      var value=event.target.value;
                      console.log(name+ "\t"+ value);
                       this.setState({[name]:value});
                       
              }

              registerUser = (event) =>{
                  event.preventDefault();
                  console.log('state',this.state);
                  this.props.loginUser(this.state);
                  console.log('userlogged in',this.props.isUserLoggedIn);
                  
              }
    
    render(){
               console.log('render called');
                if(this.props.isUserLoggedIn){
                     if(this.state.role == "ROLE_CUSTOMER"){
                        this.props.history.push('/dashboard');
                     }
                     else
                     {
                         this.props.history.push('/admin-dashboard');
                     }
                    
                }
        return(
            <form>

Enter EmailId: <input onChange={this.onInputChange} className="form-control" type="text" name="emailId"></input><br></br>
                Enter Password: <input onChange={this.onInputChange} className="form-control" type="password" name="password"></input> <br></br>
                Select Role: <select name="role" onChange={this.onInputChange}>
                     <option>Select your Role</option>
                      <option value="ROLE_ADMIN">Admin</option>
                      <option value="ROLE_CUSTOMER">CUSTOMER</option>
                </select>
               
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
    return bindActionCreators({loginUser:loginUser}, dispatch);
  }
export default connect(mapStateToProps,mapDispatchToProps)(Login);