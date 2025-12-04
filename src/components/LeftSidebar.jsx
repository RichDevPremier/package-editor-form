import React from "react";

const LeftSidebar = ({ openTextPanel, openUploadsPanel }) => {
  return (
    <aside
      id="leftSidebar"
      className="fixed md:relative left-0 top-14 md:top-0 h-[calc(100vh-3.5rem)] md:h-auto w-64 md:w-16 flex flex-col bg-white border-r border-gray-200 py-4 md:py-4 shrink-0 z-40 transform -translate-x-full md:translate-x-0 transition-transform duration-300"
    >
      <nav className="flex flex-col gap-2 px-4 md:px-0 md:items-center">
        <button
          onClick={openTextPanel}
          className="flex md:flex-col items-center md:justify-center gap-3 md:gap-1 text-gray-600 w-full p-3 md:p-2 rounded-lg hover:bg-gray-100"
        >
          <span className="material-symbols-outlined">title</span>
          <span className="text-sm md:text-xs font-medium">Text</span>
        </button>
        <button
          onClick={openUploadsPanel}
          className="flex md:flex-col items-center md:justify-center gap-3 md:gap-1 text-gray-600 w-full p-3 md:p-2 rounded-lg hover:bg-gray-100"
        >
          <span className="material-symbols-outlined">upload</span>
          <span className="text-sm md:text-xs font-medium">Uploads</span>
        </button>
        <button className="flex md:flex-col items-center md:justify-center gap-3 md:gap-1 text-gray-600 w-full p-3 md:p-2 rounded-lg hover:bg-gray-100">
          <span className="material-symbols-outlined">auto_fix_high</span>
          <span className="text-sm md:text-xs font-medium">Graphics</span>
        </button>
        <button className="flex md:flex-col items-center md:justify-center gap-3 md:gap-1 text-gray-600 w-full p-3 md:p-2 rounded-lg hover:bg-gray-100">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="text-sm md:text-xs font-medium">Template</span>
        </button>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
