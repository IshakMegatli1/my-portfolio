export default function Projects() {
  return (
    <section id="projects" className="pt-6 pb-10 bg-[#F4F4F4] px-6 rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow flex flex-col">
          <h3 className="text-2xl font-semibold mb-3">Disk-launching robot</h3>
          <p className="text-gray-700 mb-4 flex-grow">
            Designed, programmed and built a remote controlled disk-launching robot using SolidWorks, AutoCad, C, microcontrollers, and sensors.
          </p>
          <div className="flex justify-center mt-auto">
            <a 
              href="https://github.com/IshakMegatli1/Robot-lance-disque"
              target="_blank"
              className="inline-block px-6 py-2 bg-[#0C2B4E] text-white font-semibold rounded hover:bg-[#0A253F] hover:text-gray-100 transition-colors"
            >
              View Project →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow flex flex-col">
          <h3 className="text-2xl font-semibold mb-3">Moodle-like school app</h3>
          <p className="text-gray-700 mb-4 flex-grow">
           Built with TypeScript, Pug, and Node.js, a web application that replicates key Moodle features, including course management and student–teacher interactions.
          </p>
          <div className="flex justify-center mt-auto">
            <a 
              href="https://github.com/IshakMegatli1/MoodleCopy"
              target="_blank"
              className="inline-block px-6 py-2 bg-[#0C2B4E] text-white font-semibold rounded hover:bg-[#0A253F] hover:text-gray-100 transition-colors"
            >
              View Project →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow flex flex-col">
          <h3 className="text-2xl font-semibold mb-3">Ultimate 9x9 TicTacToe AI</h3>
          <p className="text-gray-700 mb-4 flex-grow">
            Built an AI for Ultimate 9x9 TicTacToe using the Minimax algorithm with alpha-beta pruning in Java, achieving optimal gameplay against human opponents.
          </p>
          <div className="flex justify-center mt-auto">
            <a 
              href="https://github.com/IshakMegatli1/9x9-Ultimate-TicTacToe-AI"
              target="_blank"
              className="inline-block px-6 py-2 bg-[#0C2B4E] text-white font-semibold rounded hover:bg-[#0A253F] hover:text-gray-100 transition-colors"
            >
              View Project →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
