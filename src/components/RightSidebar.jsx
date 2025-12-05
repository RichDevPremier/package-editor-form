import React from "react";
import Preview3D from "./Preview3D";

const RightSidebar = ({ fabricCanvas, toggle3DView }) => {
  return (
    <aside className="w-full lg:w-80 bg-white border-t lg:border-t-0 lg:border-l border-gray-200 p-4 md:p-6 flex flex-col shrink-0 order-1 lg:order-2 max-h-64 lg:max-h-none">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <button
          className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-gray-700 hover:text-primary"
          onClick={toggle3DView}
        >
          <span
            className="material-symbols-outlined !text-base md:!text-lg"
            id="viewIcon"
          >
            visibility
          </span>
          <span id="viewText">Show 3D view</span>
        </button>
      </div>

      <div
        id="preview3D"
        className="flex-1 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden hidden lg:flex"
      >
        {fabricCanvas && <Preview3D fabricCanvas={fabricCanvas} />}
      </div>

      <div className="mt-3 md:mt-4">
        <label className="flex items-center justify-between cursor-pointer">
          <span className="text-xs md:text-sm font-medium text-gray-700">
            Live 3D animation
          </span>
          <div className="relative inline-flex items-center">
            <input defaultChecked className="sr-only peer" type="checkbox" />
            <div className="w-9 md:w-10 h-4.5 md:h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 md:after:h-4 after:w-3.5 md:after:w-4 after:transition-all peer-checked:bg-primary"></div>
          </div>
        </label>
      </div>
    </aside>
  );
};

export default RightSidebar;
