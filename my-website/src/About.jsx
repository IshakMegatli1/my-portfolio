export default function About() {
  return (

      <section id="about" className="py-20 px-2 bg-gray-100">
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
  );
}