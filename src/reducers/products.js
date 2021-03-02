export default function(state = null, action) {
    switch (action.type) {
      case "PRODUCTS":
          console.log('products',action.payload.data);
            return action.payload.data;

      case "ADD_PRODUCT":
        console.log('products',action.payload.data);
        if(action.payload.data.status){
              return true;
        }
        else
        {
          return false;
        }  
      
      default:
          console.log("in default");
        return [];
    }
  }

