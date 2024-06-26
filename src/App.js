
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

import Contact from "./pages/Contact";
import About from "./pages/About";
import Index from './pages/Index';
import Hooks from './pages/Hooks';
import Router from './pages/Router';
import Jsx from './pages/Jsx';
import Footer from './components/Footer';







function App() {
  return (
    <div className="App">
      
         


         <HashRouter>
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
    </HashRouter>
         
  <Footer />
     
   
    </div>
  );
}

export default App;
