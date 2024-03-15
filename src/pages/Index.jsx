

         import React from 'react'
         import Title from '../components/Title'
         import { IoLogoReact } from "react-icons/io5";
         import Footer from '../components/Footer';
         
         function Index() {
           return (
             <div className='page-div'>

<Title text= "Welcome To My Website" />

         <h3>   <IoLogoReact size={20} color='#063342'/> Learn React Basics here</h3>
         

<p>This blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted here first. You can also follow the @reactjs account on Twitter, but you won’t miss anything essential if you only read this blog.</p>

<p>As we shared in the release post, React 18 introduces features powered by our new concurrent renderer, with a gradual adoption strategy for existing applications. In this post, we will guide you through the steps for upgrading to React 18.

Please report any issues you encounter while upgrading to React 18.</p>

<p>React allows us to create reusable UI components. Start learning React now . Learning by Examples. Our "Show React" tool makes it easy to demonstrate React.</p>
<Footer />
             </div>
           )
         }
         
         export default Index