import React from 'react'
import Image1 from '../images/img1.jpg'
import Image2 from '../images/img2.jpg'

class Home extends React.Component{
    render(){
        return(
         <div className='ui container'>
          <div className='ui grid'>
              <img className='sixteen wide column' src={Image1} ></img>
          </div>
          <div className='ui grid'>
             <div className='two wide column'></div>
              <div className='five wide column'>
                <img className='ui medium centered image' src={Image2}></img>
              </div>
              <div className='six wide column'>
                <h3 style={{textAlign:"center"}}>About Catering</h3>
                <h4 style={{textAlign:"center"}}>Tradition since 1889</h4>
                <div className='description'>
                  <p><b>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.</b></p>
                   <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>  
                </div>
            </div>
            <div className='two wide column'></div>
          </div>
          </div>
    )}
        }
 export default Home;