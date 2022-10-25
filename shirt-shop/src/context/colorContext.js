import { createContext, useState } from "react";

const ColorContext = createContext("", ()=>{})

const ColorContextProvider = (props)=>{
  const colorContext = useState({
    red:"rgb(200, 0, 50)",
    darkred:"rgb(125, 0, 50)",
    redGrad135:"background: linear-gradient(135deg, rgb(200, 0, 50)30%, rgb(125,0,50)80%)",
    orange:"rgb(250, 125, 0)",
    darkorange:"rgb(175, 75, 0)",
    orangeGrad135:"background: linear-gradient(135deg, rgb(250, 125, 0)30%, rgb(175, 75, 0)80%)",
    lime:"rgb(125, 250, 0)",
    darklime:"rgb(50, 125, 0)",
    limeGrad135:"background: linear-gradient(135deg, rgb(125, 250, 0)30%, rgb(50, 125, 0)80%)",
    grey:"rgb(125, 125, 125)",
    darkgrey:"rgb(75, 75, 75)",
    greyGrad135:"background: linear-gradient(135deg, rgb(125, 125, 125)30%, rgb(75, 75, 75)80%",
    white:"rgb(250, 250, 250)",
    darkwhite:"rgb(200, 200, 200)",
    whiteGrad135:"background: linear-gradient(135deg, rgb(250, 250, 250)30%, rgb(200, 200, 200)80%)",
    black:"rgb(27, 30, 33)",
    darkblack:"rgb(18, 21, 24)",
    blackGrad135:"background: linear-gradient(135deg, rgb(31, 37, 41)30%,rgb(18, 21, 24))",
    oliv:"rgb(100, 100, 0)",
    darkoliv:"rgb(60, 60, 60)",
    olivGrad135:"background: linear-gradient(135deg, rgb(100, 100, 0)30%, rgb(60, 60, 0)80%)",
    beige:"rgb(250, 200, 125)",
    darkbeige:"rgb(200, 150, 75)",
    beigeGrad135:"background: linear-gradient(135deg, rgb(250, 200, 125)30%, rgb(200, 150, 75)80%)",
    blue:"rgb(0, 100, 200)",
    darkblue:"rgb(0, 50, 150)",
    blueGrad135:"background: linear-gradient(135deg, rgb(0, 100, 200)30%, rgb(0, 50, 150)80%)",
  })
  return <ColorContext.Provider value={colorContext}>{props.children}</ColorContext.Provider>
}

export default ColorContext
export {ColorContextProvider} 