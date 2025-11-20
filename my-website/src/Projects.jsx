export default function Projects() {
  return (
    <section id="projects" className="pt-6 pb-10 bg-[#F4F4F4] px-6 rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-3">Disk-launching robot</h3>
          <p className="text-gray-700 mb-4">
            ESP32-based temperature and humidity monitor displayed on an ILI9341 screen.
          </p>
          <a 
            href="https://github.com/IshakMegatli1/Robot-lance-disque"
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            View Project →
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-3">Moodle-like school app</h3>
          <p className="text-gray-700 mb-4">
            Chrome extension that tracks study sessions and logs time spent in a document.
          </p>
          <a 
            href="https://github.com/IshakMegatli1/MoodleCopy"
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            View Project →
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-3">Ultimate 9x9 TicTacToe AI</h3>
          <p className="text-gray-700 mb-4">
            PostgreSQL-based inventory system with product tracking and UI features.
          </p>
          <a 
            href="https://github.com/IshakMegatli1/9x9-Ultimate-TicTacToe-AI"
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            View Project →
          </a>
        </div>

      </div>
    </section>
  );
}
