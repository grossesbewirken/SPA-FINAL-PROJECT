import { createContext, useState } from "react";

const FavoriteContext = createContext([], ()=>{})

const FavoriteContextProvider = (props)=>{
  const favoriteContext = useState([])
  return <FavoriteContext.Provider value={favoriteContext}>{props.children}</FavoriteContext.Provider>
}

export default FavoriteContext
export {FavoriteContextProvider} 