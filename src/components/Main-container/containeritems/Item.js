import React from 'react'
import './Item.css'
import { Link } from "react-router-dom";
const  Item = (props)=> {
  


return(
    <>
    <Link to={`/result/:value/${props.id}`} target="_blank">
    <div className="item"> 
    
      <img src={props.img}  alt="Spidey" /><br />
      <span>  Name  </span>: {props.name} <br />
      {/* <span> Desc </span>: {props.desc} <br /> */}
       {/* <span> ID </span>: {props.comics.items.lenght} */}
    
    </div>
    </Link>
    </>
)

}
export default Item