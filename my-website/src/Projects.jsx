export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-3">IoT Temperature Monitor</h3>
          <p className="text-gray-700 mb-4">
            ESP32-based temperature and humidity monitor displayed on an ILI9341 screen.
          </p>
          <a 
            href="https://github.com/"
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            View Project →
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-3">Study Tracker Chrome Extension</h3>
          <p className="text-gray-700 mb-4">
            Chrome extension that tracks study sessions and logs time spent in a document.
          </p>
          <a 
            href="https://github.com/"
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            View Project →
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-3">Inventory Management System</h3>
          <p className="text-gray-700 mb-4">
            PostgreSQL-based inventory system with product tracking and UI features.
          </p>
          <a 
            href="https://github.com/"
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
