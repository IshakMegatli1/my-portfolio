import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Hero from "./Hero.jsx";
import Technol from './Technol.jsx';
import Certification from './Certification.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      
      <Navbar/>

      <Hero/>

      <section className="pt-0 pb-8 px-0 bg-white"><Projects /></section>

      <section className="pb-8 bg-white"><Certification /></section>
      
      
      <section ><Technol /></section>
      <section className="pt-8 px-0 bg-white"><About /></section>

      <section className="py-8 px-0 bg-white"><Contact /></section>      

      
      

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Ishak Megatli. All rights reserved.
      </footer>

    </div>
  );
} 

export default App
