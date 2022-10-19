import { createContext, useState } from "react";

const ColorContext = createContext("", ()=>{})

const ColorContextProvider = (props)=>{
  const colorContext = useState({
    red:"rgb(200,0,50)",
    
  })
  return <ColorContext.Provider value={colorContext}>{props.children}</ColorContext.Provider>
}

export default ColorContext
export {ColorContextProvider} 