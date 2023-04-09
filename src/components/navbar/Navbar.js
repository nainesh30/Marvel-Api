import React from 'react'
import './Navbar.css'
import '../navbar/Search-box'
import Search from './Search-box'

const  Navbar = (props)=> {
  


return(
    <>
    <nav className='navbar'
    
    >
<div className="left">
    Marvel Characters
</div>

      <Search className='Search'></Search>
    </nav>
    </>
)

}
export default Navbar