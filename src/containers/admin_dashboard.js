import React from 'react';
import {connect} from 'react-redux';
class AdminDashboard extends React.Component{
    render(){

         if(!this.props.isUserLoggedIn){
               this.props.history.push('/login');  
         }

        return (
        <div>
            <h1>I am in admin dashboard</h1>
        </div>
        )
    }
}
function mapStateToProps(appState){
     console.log(appState);
     return {isUserLoggedIn:appState.isUserLoggedIn}
}
export default connect(mapStateToProps,null)(AdminDashboard);