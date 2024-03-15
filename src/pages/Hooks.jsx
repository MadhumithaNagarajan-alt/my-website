import React from 'react'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Card from '../components/Card'
import Footer from '../components/Footer'


export default function Hooks() {
  return (
    <div className='page-div'>
        <Title text='What is hook?' />
        <p>Here is the types of hooks</p>
        <ul>
            <li>useState</li>
            <li>useEffect</li>
            <li>useRef</li>
            <li>useContext</li>
        </ul>
        <p>Hooks allow us to "hook" into React features such as state and lifecycle methods.</p>

{/* useState */}
<div className='useState'>
<Subtitle text='useState' />
<p> The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.</p>
</div>
<Card cardHEader='useState' cardText='
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
} ' />



{/* useEffect */}
<div className='useState'>
<Subtitle text='useEffect' />
<p>The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.
</p>
</div>
<Card cardHEader='useEffect' cardText='
import { useState, useEffect } from "react";


function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });


}
 ' />



{/* useRef */}
<div className='useState'>
<Subtitle text='useRef' />
<p> The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.</p>
</div>
<Card cardHEader='useRef' cardText='
import { useRef } from "react";

function App() {
    const inputElement = useRef(); 
  
    const focusInput = () => {
      inputElement.current.focus();
    };
  
    return (
      <>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </>
    );
  }' />

  {/* useContext */}
<div className='useState'>
<Subtitle text='useContext' />
<p> eact Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.</p>
</div>
<Card cardHEader='useContext' cardText='
import { useContext } from "react";

function Component5() {
    const user = useContext(UserContext);
  
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }' />
<Footer />
    </div>
  )
}
