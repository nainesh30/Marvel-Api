import React from 'react'
import loading from './Vanilla-1s-280px.gif'
import "./Spinner.css"

class Spinner extends React.Component{
  
  render(){
    return (
    <div className='spin-container'>
      <img src={loading} alt="loading" />
    </div>
  )
}
}
export default Spinner
