import React from 'react'

const Box = (props) => {
   let boxColor="";

   if(props.result === "tie")boxColor="box"
   else if(props.result === "Win") boxColor="winBox"
   else if(props.result === "Lose") boxColor="loseBox"


   if(props.comResult === "tie")boxColor="box"
   else if(props.comResult === "Win") boxColor="winBox"
   else if(props.comResult === "Lose") boxColor="loseBox"

  return (
    
    <div className={boxColor}>
      <h1>{props.title}</h1>
      <img className="item-img" src ={props.item && props.item.img}/>
      <h2>{props.result}</h2>
      <h2>{props.comResult}</h2>
    </div>
  )
  
}

export default Box
