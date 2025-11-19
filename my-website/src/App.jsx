import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-600">Ishak</h1>
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
        <div className="flex items-center justify-center gap-2 mb-4">
          <p className="text-xl text-gray-700">
            I am a COOP Software engineering student at
          </p>
          <img
            src="/Logo_ETS_TypoGrise_D_FR.png"
            alt="ETS Logo"
            className="w-24 rounded-lg shadow-lg"
          />
        </div>

        <a
          href="#projects"
          className="px-6 py-3 bg-[#0C2B4E] text-white font-semibold rounded hover:bg-[#0A253F] hover:text-gray-100 transition-colors"
        >
          My Work
        </a>
      </header>


      {/* About / Features */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">OOP Development</h3>
            <p className="text-gray-600">
              Building optimized Object oriented apps in JAVA using design patterns.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Embedded Systems</h3>
            <p className="text-gray-600">
              Creating personal and academic projects using C and C++ for microcontrollers and embedded systems.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Web Development</h3>
            <p className="text-gray-600">
              Building responsive and dynamic websites using modern technologies like Typescript, React, Tailwind CSS, and Vite.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-action */}
      <section className="py-20 px-6 bg-blue-50 text-center">
        <h3 className="text-3xl font-bold mb-4">Want to collaborate ?</h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          I'm open to internships, part-time and learning opportunities. Let's create something great !
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-[#0C2B4E] text-white font-semibold rounded hover:bg-[#0A253F] hover:text-gray-100 transition-colors"
        >
          Contact Me
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Ishak Megatli. All rights reserved.
      </footer>
    </div>
  );
} 

export default App
