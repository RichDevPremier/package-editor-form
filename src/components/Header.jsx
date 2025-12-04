import React from 'react';

const Header = ({ toggleMobileMenu }) => {
  return (
    <header className="flex items-center bg-white border-b border-gray-200 px-3 md:px-4 py-2 shrink-0 h-14 md:h-16 w-full z-20 shadow-sm">
      <div className="flex items-center gap-2 md:gap-4 flex-1">
        <button
          className="md:hidden p-2 -ml-2 hover:bg-gray-100 rounded-lg"
          onClick={toggleMobileMenu}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        <svg
          className="hidden md:block"
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0002 24.0001C11.1891 24.0001 10.3995 23.8344 9.68001 23.5143C5.10001 21.6843 1.35001 16.9243 1.35001 11.6943V5.53435C1.35001 5.09435 1.57001 4.68435 1.95001 4.45435L9.69001 0.224346C10.83 -0.425654 12.28 -0.0156538 12.87 1.09435L14.41 4.14435C14.59 4.49435 14.48 4.93435 14.15 5.15435L11.5 6.94435C11.16 7.17435 10.68 7.04435 10.46 6.69435L9.63001 5.31435L5.43001 7.76435V11.6943C5.43001 15.2243 7.82001 18.4243 11.2 19.5343C11.64 19.6743 12 20.0743 12 20.5443V24.0043L12.0002 24.0001Z"
            fill="#0053E1"
          ></path>
          <path
            d="M22.05 4.45435L14.31 0.224346C13.17 -0.425654 11.72 -0.0156538 11.13 1.09435L9.59001 4.14435C9.41001 4.49435 9.52001 4.93435 9.85001 5.15435L12.5 6.94435C12.84 7.17435 13.32 7.04435 13.54 6.69435L14.37 5.31435L18.57 7.76435V11.6943C18.57 12.4443 18.43 13.1643 18.17 13.8343C17.99 14.3043 18.23 14.8143 18.71 14.9943L20.84 15.8043C21.32 15.9843 21.83 15.7443 22.01 15.2643C23.27 12.1643 24 8.79435 24 5.53435V5.53435C24 5.09435 23.78 4.68435 22.4 4.45435H22.05Z"
            fill="#00C4CC"
          ></path>
        </svg>

        <div className="hidden md:flex items-center gap-2">
          <a
            className="text-sm font-medium text-gray-700 hover:text-primary"
            href="#"
          >
            My Projects
          </a>
          <span className="text-gray-300">/</span>
          <a
            className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary"
            href="#"
          >
            <span className="hidden lg:inline">
              Custom Clear Plastic Cups
            </span>
            <span className="lg:hidden">Project</span>
            <span className="material-symbols-outlined !text-xl">
              expand_more
            </span>
          </a>
        </div>

        <span className="md:hidden text-sm font-medium text-gray-700 truncate">
          Custom Cups
        </span>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden sm:flex items-center gap-1.5 text-xs md:text-sm text-gray-500">
          <span className="material-symbols-outlined !text-xl text-green-500">
            check_circle
          </span>
          <span className="hidden md:inline">Saved</span>
        </div>

        <div className="hidden md:flex items-center gap-1 text-gray-500">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <span className="material-symbols-outlined !text-xl">undo</span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <span className="material-symbols-outlined !text-xl">redo</span>
          </button>
        </div>

        <button className="flex items-center justify-center rounded-md h-8 md:h-10 bg-primary text-white text-xs md:text-sm font-bold px-3 md:px-6">
          Next
        </button>
      </div>
    </header>
  );
};

export default Header;

