export default function(state = null, action) {
    switch (action.type) {
      case "PRODUCTS":
          console.log('products',action.payload.data);
            return action.payload.data;
            
      default:
          console.log("in default");
        return [];
    }

    
  }
