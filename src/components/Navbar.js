import React,{ useContext } from 'react';
import { UserContext } from '../context/Auth';


const Navbar=() =>{
   const { logout } = useContext(UserContext);
   
    return(
      
       <div className='ui secondary  menu'>
        <div className='left menu'>
         <a className='item'  onClick={logout}>Logout</a>
         </div>
        <div className='right menu'>
           <a className='item' href='/' >
            Home
           </a>
           <a className='item' href='/client' >
            clients
           </a>
        </div>
       </div>
     
    )
  
}
export default Navbar;