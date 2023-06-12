import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import userpic from './userpic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYouTube, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Validation from './SignupValidation';
import axios from 'axios';

function Signup() {

  const url="#";

  const [values, setValues] = useState({
    name:'',
    email:'',
    password:''
  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values))
    if(errors.name === "" && errors.email === "" && errors.password === ""){
       axios.post('http://localhost:8081/Signup', values)
       .then(res => {
           navigate('/');
       })
       .catch(err => console.log(err));
    }

  }

  return (
    <div>
      

    {/* -----------------Body--------------------------------------------------------------- */}
    {/* ---------------------Header------------------------------------  */}
      <div className="header">
            <a href={url} className="logo">Kapuwa.LK</a>
            <div className="header-right">
              <a className="active" href="#home">Create/Login</a>
            </div>
        </div>


        {/*------------------picture and form-------------------------- */}
        <div className="row">
        {/*------------------Left Picture-------------------------------*/}
          <div className="column">
              <div className="body-content">
        
                   <img src={userpic} alt="logo" />
                
              </div>
                
          </div>
        {/*---------------Right Login and Sign Up Form-----------------*/}
          <div className="column">
              
               <div className="body-content">
               <div className="container">
               <div className="logo">
               
               </div>
               <h2>User Sign-Up</h2>
               <div className="login-form">
                   <form action="" onSubmit={handleSubmit}>

                       <div className="form-item">
                           {/* <label for="userName">Username:</label> */}
                           <input type="text" name="name" id="name" placeholder="Enter Name" />
                           {errors.name && <span className="red" >{errors.name}</span> }
                       </div>

                       <div className="form-item">
                           {/* <label for="userName">Username:</label> */}
                           <input onChange={handleInput} type="text" name="email" id="email" placeholder="Enter Email" />
                           {errors.email && <span className="red" >{errors.email}</span> }
                       </div>

                       <div className="form-item">
                           {/* <label for="passWord">Password:</label> */}
                           <input onChange={handleInput} type="password" name="password" id="password" placeholder="Enter Password" />
                           {errors.password && <span className="red" >{errors.password}</span> }
                       </div>

                       <div className="remember-box">
                           <input onChange={handleInput} type="checkbox" name="remember" id="remember" />Remember Me
                           <a href={url}>Forget Password?</a>
                       
                       </div>
       
                       <div className="form-btns">
                       
                           <button type="submit">Sign Up</button>
       
                           <div className="options">
                               <Link to="/" >Login</Link>
                           </div>
         
                       </div>
                   </form>
       
               </div>
               </div>
               </div>

          </div>
        </div>
    {/*----------------------------------------------------- footer ---------------------------------------------------------------------------*/}
        
  <footer>
   <div class="content">
     <div class="left box">
       <div class="upper">
         <div class="topic">About us</div>
         <p>Kapuwa.LK is the most trusted matrimony website made by Sri Lankans for Sri Lankans living in Sri Lanka and overseas. This is an SSL secured website built in accordance with global standards and with utmost priority for privacy and data security.</p>
       </div>
       <div class="lower">
         <div class="topic">Contact us</div>
         <div class="phone">
           <a href={url}><i class="fas fa-phone-volume"></i>+94 071 345 1260</a>
         </div>
         <div class="email">
           <a href={url}><i class="fas fa-envelope"></i>Kapuwa@gmail.lk</a>
         </div>
       </div>
     </div>
     <div class="middle box">
       <div class="topic">Our Services</div>
       <div><a href={url}>Privacy Policy</a></div>
       <div><a href={url}>Blog</a></div>
       <div><a href={url}>Help</a></div>
       <div><a href={url}>Monthly Events</a></div>
       <div><a href={url}>Term of Service</a></div>
     </div>
     <div class="right box">
       <div class="topic">Connect with us</div>
       <form>
         <div class="media-icons">
           <a href={url}> <FontAwesomeIcon icon={faFacebookF} style={{color: "#ffffff",}} /></a>
           <a href={url}> <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></a>
           <a href={url}> <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} /></a>
           <a href={url}> <FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff",}} /></a>
           <a href={url}> <FontAwesomeIcon icon={faWhatsapp} style={{color: "#ffffff",}} /></a>
         </div>
       </form>
     </div>
   </div>
   <div class="bottom">
     <p>Copyright © 2023 <a href={url}>WebXcellence</a> All rights reserved</p>
   </div>
   
 </footer>


    </div>
  )
}

export default Signup