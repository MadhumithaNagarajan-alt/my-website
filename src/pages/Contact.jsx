import React from 'react'
import Title from '../components/Title';
import Footer from '../components/Footer';



 function Contact() {
  
  return (
    <div className='page-div'>
      <Title text='Contact Us' />
      
    <div className='form-div'>
    <form>
      
      <label className='label'>
        Name:</label>
        <input className = "input"    type='text' placeholder='Enter your name'/>
        

        <label className='label'>
        email: </label>
        <input className = "input" type='email' placeholder='Enter Your email' />
       


        <label className='label'>
        Comment Box:</label>
        <textarea  style={{height:"150px"}} className = "input" placeholder='type something' />
        

       <button className='btn' type='submit' onClick={() => alert("Submitted Successfully")}> Submit</button> 
        
    </form>
    
  
    
    
    
    
    </div>
    
    </div>

  )
}
export default Contact;