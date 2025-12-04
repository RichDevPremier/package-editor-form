import React from "react";

const ImageToolbar = ({ onPropertyChange, onAdjustClick, onReplace }) => {
  return (
    <div className="bg-white rounded-lg shadow-md flex items-center p-1 gap-1">
      <button
        onClick={onReplace}
        className="flex items-center gap-1 md:gap-1.5 text-gray-700 text-xs md:text-sm font-medium px-2 md:px-3 py-1 md:py-1.5 rounded-md hover:bg-gray-100 bg-blue-50 text-primary"
      >
        <span className="material-symbols-outlined !text-base md:!text-lg">
          cached
        </span>
        <span className="hidden sm:inline">Replace</span>
      </button>
      <div className="w-px h-4 md:h-5 bg-gray-200"></div>
      <button className="flex items-center gap-1 md:gap-1.5 text-gray-700 text-xs md:text-sm font-medium px-2 md:px-3 py-1 md:py-1.5 rounded-md hover:bg-gray-100">
        <span className="material-symbols-outlined !text-base md:!text-lg">
          crop
        </span>
        <span className="hidden sm:inline">Crop</span>
      </button>
      <button
        onClick={onAdjustClick}
        className="flex items-center gap-1 md:gap-1.5 text-gray-700 text-xs md:text-sm font-medium px-2 md:px-3 py-1 md:py-1.5 rounded-md hover:bg-gray-100"
      >
        <span className="material-symbols-outlined !text-base md:!text-lg">
          tune
        </span>
        <span className="hidden sm:inline">Adjust</span>
      </button>
    </div>
  );
};

export default ImageToolbar;
