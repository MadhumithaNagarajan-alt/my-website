import React from 'react'
import Title from "../components/Title"

import Card from "../components/Card";
import Footer from '../components/Footer';

 function Home() {
  return (
    <div className='page-div'>
      
<Title text='Create React App!' />
<p>Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node = 14.0.0 and npm = 5.6 on your machine. To create a project, run</p>
<div >
  <Card cardHEader={'npx create-react-app my-app'} cardText={'cd my-app'} children={"npm start"}/>
 
  
  
</div>
<Footer />
    </div>
  )
}
export default Home;