export default function(state = null, action) {
    switch (action.type) {
      case "REGISTER":
        console.log('data',JSON.parse(action.payload.config.data).username);
            console.log('action.payload.data.token',action.payload.data.token);
          if(action.payload.data.token != null){
             localStorage.setItem('token', action.payload.data.token);
             return true; 
          }

        case "LOGIN":
        
            if(action.payload.data.token != null){
              localStorage.setItem('token', action.payload.data.token);
              return true;
           }
          
      default:
          console.log("in default");
        return false;
    }

    
  }
