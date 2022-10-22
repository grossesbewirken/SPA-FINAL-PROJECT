import { createContext, useState } from "react";

const ShoppingContext = createContext([], ()=>{})

const ShoppingContextProvider = (props)=>{
  const shoppingContext = useState([])
  return <ShoppingContext.Provider value={shoppingContext}>{props.children}</ShoppingContext.Provider>
}

export default ShoppingContext
export {ShoppingContextProvider} 