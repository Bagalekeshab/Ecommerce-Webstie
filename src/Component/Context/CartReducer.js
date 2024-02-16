
import { InitialState } from "./ContextApp";

export const Reducer = (state=InitialState, action) => {

    switch (action.type) {
      

        case 'ADD_TO_CART':

        const product= action.payload;

        const exits = state.cart.find(item => item.id === product);
       
          if(exits){

            return {...state, 
            cart: state.cart.map(item=>item.id === product ? {...item, quantity: item.quantity + 1}:item )}

          }
          
          else {
            return {
              ...state,
              cart: [
                ...state.cart,
                {
                  id: product.id,
                  quantity:product.quantity,
                  title: product.title,
                  image: product.image,
                  price:product.price,
                }
              ],
            }
          }

       case 'DELETE_CART':

        return {
          ...state,
          cart: state.cart.filter(item => item !== action.payload.i),
          total: state.total - action.payload.price
        };

       

       

         
      case 'SET_NUMBER':
        return { ...state, number: action.payload };
  
      case 'SET_SHOW_NUMBER':
        return { ...state, showNumber: action.payload };
  
      case 'SET_PRODUCT':
  
        return { ...state, product: action.payload };


      case 'SET_SHOW_DATE':
        return { ...state, showDate: action.payload };

      default:
        return state;
    }
  }