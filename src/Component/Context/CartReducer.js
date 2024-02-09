

export const Reducer = (state=[], action) => {


  const product =action.payload;


    switch (action.type) {

        case 'ADD_ITEM':

          const exits = state?.filter((item) => item.id === product.id);

          if(exits){
            return state.map((item)=>item.id === product.id ? {...item, quantity: item.quantity + 1}:item );
          }
          else{
            const product= action.payload
            return[...state,{...product, quantity:1,}]
          }


      case 'SET_NUMBER':
        return { ...state, number: action.payload };
  
      case 'SET_SHOW_NUMBER':
        return { ...state, showNumber: action.payload };
  
      case 'SET_PRODUCT':
  
        return { ...state, product: action.payload };
  
  
        case 'SET_CARTITEMS':
        
        return { ...state, cartItems: action.payload };
  
  
  
      case 'SET_SHOW_DATE':
        return { ...state, showDate: action.payload };
  
      // case 'SET_TODOLIST':
      //   return { ...state, todolist: action.payload };
  
      default:
        return state;
    }
  }