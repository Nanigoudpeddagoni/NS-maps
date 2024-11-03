import React from 'react'
import Navbar from './Navbar'
import "../css/home.css"
import homeimg from "../images/lmage.jpg"
import { Link } from 'react-router-dom'
import Footer from './Footer'
function Home() {
  return (
    <div className='home'>
      <div className='image'>
             <img className='homeimg' src={homeimg}/>
      </div>
      <div className='color1'>
         <div className='c2'>
         <span>
      ns --maps
          </span>
          </div> 
      </div>
      <section className='s2'>
            <div className='features'>
                   <div className='f1'>
                   <img className="f1img" src={homeimg}/>
                      <span className='f1font'>
                        check the land occupation
                      </span>
                    <Link to={'/Maps'}> <button id='btn'>check</button></Link>  
                   </div>
            </div>
      </section>
     <Footer/>
    </div>
  )
}

export default Home