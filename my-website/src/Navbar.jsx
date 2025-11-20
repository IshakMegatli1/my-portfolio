export default function Navbar(){
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 rounded-lg bg-[#F4F4F4] shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-bg-[#0C2B4E]"></h1>

          <div className="flex items-center gap-6">
            <ul className="flex gap-6">
              <li><a href="#home" className="text-[#0C2B4E] hover:text-blue-500"></a></li>
              <li><a href="#about" className="text-[#0C2B4E] hover:text-blue-500">About</a></li>
              <li><a href="#projects" className="text-[#0C2B4E] hover:text-blue-500">Projects</a></li>
              <li><a href="mailto:ishak.megatli.1@ens.etsmtl.ca" className="text-[#0C2B4E] hover:text-blue-500">Contact</a></li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/IshakMegatli1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.39.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.4-5.29 5.68.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/ishak-megatli/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-blue-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                  <path d="M20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.96v5.7H9.38V9h3.42v1.56h.05c.48-.9 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.76zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07s2.07.93 2.07 2.07c0 1.14-.93 2.07-2.07 2.07zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
}