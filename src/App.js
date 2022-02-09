import React,{useContext} from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/Navbar';
import Client from './components/client';
import Login from './components/login';
import {UserContext } from './context/Auth';

function App(){
  const { user } = useContext(UserContext);
 
    if (!user.auth) 
    return user.auth? <Home/> : <Login/>;
    else
return(
    <div className='App'>
    
       <BrowserRouter>
       <Navbar />
       <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/client" element={<Client/>} />
      
       </Routes>
      
       </BrowserRouter>
      
    </div>
)


}

export default App;