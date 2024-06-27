import React from 'react'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Card from '../components/Card'
import Footer from '../components/Footer'

export default function Jsx() {
  return (
    <div  className='page-div'>
        <Title text='What is JSX?'/>
        <p>JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.</p>
        <Subtitle text='JSX Coding '/>
        <p>JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

JSX converts HTML tags into react elements.

You are not required to use JSX, but JSX makes it easier to write React applications.</p>

<Card  cardHEader='JSX' cardText='const myElement = <h1>I Love JSX!</h1>;'/>
        
     
        </div>
  )
}
