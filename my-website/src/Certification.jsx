export default function Certification() {
    return(
    <section id="certifications" className="pt-6 pb-10 bg-[#F4F4F4] px-6 rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-10">Certifications</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-3">Git Fundamentals</h3>
          <img 
            src="/gitcert.PNG" 
            alt="Git Fundamentals Certification" 
            className="w-full object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700 mb-4">
          </p>
          <a 
            href="https://www.datacamp.com/completed/statement-of-accomplishment/track/6cc7dbcf26c6d3a9517119825b171079d61cd2cc"
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            View Certification →
          </a>
        </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-3">Azure Fundamentals</h3>
          <img 
            src="/azurecert.png" 
            alt="Azure Fundamentals Certification" 
            className="w-full object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700 mb-4">
          </p>
          <a 
            href="https://www.datacamp.com/completed/statement-of-accomplishment/track/c37316e29583fe074d82783ea719fb49471f84bf"
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            View Certification →
          </a>
        </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-3">Excel Fundamentals</h3>
          <img 
            src="/excelcert.png" 
            alt="Excel Fundamentals Certification" 
            className="w-full object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700 mb-4">
          </p>
          <a 
            href="https://www.datacamp.com/completed/statement-of-accomplishment/track/35b155f739b9c0d53b6cceb46e603597f98ffbf9"
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            View Certification →
          </a>
        </div>
      </div>
      
    </section>
    );
}