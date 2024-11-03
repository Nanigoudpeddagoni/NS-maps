import React from 'react'
import "../css/contact.css"
function contact() {
  return (
    <div className='feedback'>
 
  
   <div className='main'>
    <h2>FEEDBACK FORM</h2>
    
     <p class="p">we would like to hear your suggestions and problems with anything so we can improve!</p>
    
    <form action="">
     <label for="name">Name:</label>
      <input type="text" id="name" name="name" required/>
     <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="ex-myname@gmail.com" required/>
     <label for="text">Describe your feedback:</label>
      
      <textarea name="text" id="text" placeholder="tell us your feedback........"cols="30" rows="10"></textarea>
      <p style={{textAlign:"center"}}>
      <button type="submit">Submit</button>
        </p>

    </form>
  
 </div>
    </div>
  )
}

export default contact