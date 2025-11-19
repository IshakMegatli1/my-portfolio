import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-bg-[#0C2B4E]">Ishak</h1>
          <ul className="flex gap-6">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-50 flex-1 flex flex-col justify-center items-center text-center py-20 px-4">
        <h2 className="text-5xl font-bold mb-4">Hey, I'm Ishak</h2>

        {/* Text + Logo inline */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <p className="text-xl text-gray-700">
            I am a COOP Software engineering student at
          </p>
          <img
            src="/Logo_ETS_TypoGrise_D_FR.png"
            alt="ETS Logo"
            className="w-24 rounded-lg shadow-lg"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-[#0C2B4E] text-white font-semibold rounded hover:bg-[#0A253F] hover:text-gray-100 transition-colors"
          >
            Projects
          </a>
          <a
            href="https://eportfolio.etsmtl.ca/Portfolio/Clef/GR9q1NPpwKSrpvsVNQZ1"
            className="px-6 py-3 bg-[#0C2B4E] text-white font-semibold rounded hover:bg-[#0A253F] hover:text-gray-100 transition-colors"
          >
            ÉTS E-portfolio
          </a>
          <a
            href="\Ishak_English_resume (1).pdf"
            className="px-6 py-3 bg-[#0C2B4E] text-white font-semibold rounded hover:bg-[#0A253F] hover:text-gray-100 transition-colors"
          >
            Resume
          </a>
          
        </div>
      </header>
      
      <section className="py-8 px-0 bg-white"><Projects /></section>
      
      <section><About /></section>

      <section className="py-8 px-0 bg-white"><Contact /></section>      

      

      {/* Footer */}
      <footer className="bg-white shadow-inner py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Ishak Megatli. All rights reserved.
      </footer>
    </div>
  );
} 

export default App
