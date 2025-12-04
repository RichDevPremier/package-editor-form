import React from "react";
import CanvasEditor from "./CanvasEditor";
import CanvasToolbar from "./CanvasToolbar";

const CanvasArea = ({
  setFabricCanvas,
  selectedObject,
  onPropertyChange,
  openAdjustPanel,
  onReplace,
}) => {
  return (
    <div className="flex-1 bg-gray-100 p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden order-2 lg:order-1">
      <CanvasToolbar
        selectedObject={selectedObject}
        onPropertyChange={onPropertyChange}
        onReplace={onReplace}
        openAdjustPanel={openAdjustPanel}
      />

      {/* Safety/Bleed Labels */}
      <div className="absolute top-12 md:top-16 right-4 md:right-[26%] hidden sm:flex gap-2 z-10">
        <div className="text-xs bg-green-100 text-green-800 font-medium px-2 py-0.5 rounded-full">
          Safety Area
        </div>
        <div className="text-xs bg-gray-200 text-gray-700 font-medium px-2 py-0.5 rounded-full">
          Bleed
        </div>
      </div>

      {/* Canvas */}
      <div className="relative w-full max-w-sm md:max-w-lg h-auto flex items-center justify-center">
        <CanvasEditor setFabricCanvas={setFabricCanvas} />
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white rounded-lg shadow-md flex items-center p-1 gap-1 md:gap-2">
        <div className="flex items-center bg-gray-100 rounded-md p-0.5">
          <button className="px-2 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium text-gray-800 bg-white rounded-md shadow-sm">
            Front
          </button>
          <button className="px-2 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium text-gray-500">
            Back
          </button>
        </div>
        <div className="w-px h-4 md:h-5 bg-gray-200"></div>
        <div className="flex items-center gap-1 md:gap-2 px-1 md:px-2">
          <button className="text-gray-500 p-1">
            <span className="material-symbols-outlined !text-lg md:!text-xl">
              remove
            </span>
          </button>
          <span className="text-xs md:text-sm font-medium text-gray-700">
            100%
          </span>
          <button className="text-gray-500 p-1">
            <span className="material-symbols-outlined !text-lg md:!text-xl">
              add
            </span>
          </button>
        </div>
        <div className="w-px h-4 md:h-5 bg-gray-200 hidden sm:block"></div>
        <button className="hidden sm:block p-2 text-gray-500 hover:bg-gray-100 rounded-md">
          <span className="material-symbols-outlined !text-xl">settings</span>
        </button>
      </div>
    </div>
  );
};

export default CanvasArea;
