import React from 'react'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Footer from '../components/Footer'
import data from "./data.json"


 const About = () => {


  
    



  return (
   
    <div className='page-div'>
      <Title  text='About Us' />
    
    <p>React 18 was years in the making, and with it brought valuable lessons for the React team. Its release was the result of many years of research and exploring many paths. Some of those paths were successful; many more were dead-ends that led to new insights. One lesson we’ve learned is that it’s frustrating for the community to wait for new features without having insight into these paths that we’re exploring.

We typically have a number of projects being worked on at any time, ranging from the more experimental to the clearly defined. Looking ahead, we’d like to start regularly sharing more about what we’ve been working on with the community across these projects. </p>
   <div className>
<Subtitle text='Meet the team'  />
   
      <br />
      <div className='data-container'> 
        {data &&
          data.map((data) => (



<div key={data.id} className='data-div'>
             
              <img src={data.img} className='data-img' />
              <div className='data-body'>
              <h1>{data.Name}</h1>
              <p>{data.Description}</p>
              </div>
          
          
     
</div>




          )
          )
 }
</div>



   </div>
   
   
   
   
   
   
   
   <Footer />
    </div>
   
  )
}
export default About;