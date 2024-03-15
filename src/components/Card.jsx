import React from 'react'



export default function Card({children, cardHEader = "ReactJs", cardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}) {
  return (
    <div class="card">
  
  <div class="container">
    <h2><b>{cardHEader}</b></h2> 
    <p>{cardText}</p> 
    <p>{children}</p>
   
  </div>
</div>
  )
}
