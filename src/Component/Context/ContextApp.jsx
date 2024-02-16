import React, { createContext, useReducer,} from 'react'
import { Reducer } from './CartReducer';


export const InitialState = {
  number:1,
  total:0,
  showNumber: false,
  product: null,
  showDate: [],
  cart:[],
  
};
export const ContextApp = createContext();


function ContextAppPage({ children }) {


  const [state, dispatch] = useReducer(Reducer, InitialState)

  const addToCart = (product) => {

      dispatch({type:'ADD_TO_CART', payload:product})
      console.log(state.cart)
      

    }


  return (
    <div>
      < ContextApp.Provider value={{ state, dispatch, addToCart }}>
        {children}
      </ ContextApp.Provider>


    </div>
  )
}

export default ContextAppPage


