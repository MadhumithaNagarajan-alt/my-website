
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

import Contact from "./pages/Contact";
import About from "./pages/About";
import Index from './pages/Index';
import Hooks from './pages/Hooks';
import Router from './pages/Router';
import Jsx from './pages/Jsx';







function App() {
  return (
    <div className="App">
      
         


         <BRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          
          <Route path="home" element={<Home />} />
          <Route path="hooks" element={<Hooks />} />
          <Route path="router" element={<Router />} />
          <Route path="jsx" element={<Jsx />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
         
  
     
   
    </div>
  );
}

export default App;
