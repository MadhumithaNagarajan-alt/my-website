import React from 'react'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import Card from '../components/Card'
import MyCode from "../images/MyCode.png"
import Footer from '../components/Footer'


export default function Router() {
  return (
    <div className='page-div'>
        <Title text='What is React Router?' />
        <p>We wrap our content first with BrowserRouter.

Then we define our Routes. An application can have multiple Routes. Our basic example only uses one.

Routes can be nested The first Route has a path of  and renders the Layout 

The nested Routes inherit and add to the parent route So the blogs path is combined with the parent and becomes /blogs.

The Home component route does not have a path but has an index attribute That specifies this route as the default route for the parent route, which is /.

Setting the path to  will act as a catch-all for any undefined URLs This is great for a 404 error page.</p>
<br></br>
<Subtitle text='Folder Structure' />
<ul>
    <li>Layout.js</li>
    <li>Home.js</li>
    <li>Blog.js</li>
    <li>Contact.js</li>
    <li>NoPAge.js</li>
</ul>
<br></br>
<p>Here is the example for router</p>
<br></br>
<img src={MyCode} alt='MyCode' style={{width: "100%", height: "400px"}} />
<Footer />

    </div>
  )
}
