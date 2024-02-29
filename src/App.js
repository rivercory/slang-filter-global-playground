import './App.css';
import "preline/preline";

function App() {
  return (
      <div>
        <header
            className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
          <nav className="w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
               aria-label="Global">
            <div className="flex items-center justify-between">
              <a className="flex-none" href="#">
                <img src="./icons/slang-filter-global_full.svg" className="w-8" />
              </a>
              <div className="sm:hidden">
                <button type="button"
                        className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        data-hs-collapse="#navbar-image-1" aria-controls="navbar-image-1"
                        aria-label="Toggle navigation">
                  <svg className="hs-collapse-open:hidden flex-shrink-0 size-7" xmlns="http://www.w3.org/2000/svg"
                       width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" x2="21" y1="6" y2="6"/>
                    <line x1="3" x2="21" y1="12" y2="12"/>
                    <line x1="3" x2="21" y1="18" y2="18"/>
                  </svg>
                  <svg className="hs-collapse-open:block hidden flex-shrink-0 size-7" xmlns="http://www.w3.org/2000/svg"
                       width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </button>
              </div>
            </div>
            <div id="navbar-image-1"
                 className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
              <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                <a className="font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                   href="#" aria-current="page">Landing</a>
                <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                   href="#">Account</a>
                <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                   href="#">Work</a>
                <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                   href="#">Blog</a>
              </div>
            </div>
          </nav>
        </header>
      </div>
  );
}

export default App;
