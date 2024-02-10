import React from 'react'
import  "./index.css";

function Boot(props) {
  return (
    <div>
    <div className='container'>
    <h1>{props.name}</h1>
      <img src={props.image}/>
      <button className='name'>{props.btn}</button>
    </div>
     
    </div>
  )
}

export default Boot;
