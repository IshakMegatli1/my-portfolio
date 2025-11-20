export default function Hero(){
    return (
      <header className="flex-1 flex flex-col justify-center items-center text-center py-20 px-6">
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
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#0C2B4E] text-white font-semibold rounded hover:bg-[#0A253F] hover:text-gray-100 transition-colors"
          >
            ÉTS E-portfolio
          </a>
          <a
            href="\Ishak_English_resume (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#0C2B4E] text-white font-semibold rounded hover:bg-[#0A253F] hover:text-gray-100 transition-colors"
          >
            Resume
          </a>
          
        </div>
      </header>

    );
}