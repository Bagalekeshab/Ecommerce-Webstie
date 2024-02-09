import React, { createContext, useReducer } from 'react'
import { Reducer } from './CartReducer';

export const initialState = {
  number: 0,
  showNumber: false,
  product: null,
  showDate: [],
  cart: []


};
export const ContextApp = createContext();


function ContextAppPage({ children }) {


  const [state, dispatch] = useReducer(Reducer, initialState)


  return (
    <div>
      < ContextApp.Provider value={{ state, dispatch }}>
        {children}
      </ ContextApp.Provider>


    </div>
  )
}

export default ContextAppPage


