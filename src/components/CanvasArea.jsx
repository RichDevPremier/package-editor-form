import React from "react";
import CanvasEditor from "./CanvasEditor";
import CanvasToolbar from "./CanvasToolbar";

const CanvasArea = ({
  setFabricCanvas,
  selectedObject,
  onPropertyChange,
  openAdjustPanel,
  onReplace,
  activeSide,
  onSideChange,
}) => {
  return (
    <div className="flex-1 bg-gray-100 p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden order-2 lg:order-1">
      <CanvasToolbar
        selectedObject={selectedObject}
        onPropertyChange={onPropertyChange}
        onReplace={onReplace}
        openAdjustPanel={openAdjustPanel}
      />

      {/* Top Controls with Tooltip */}
      <div className="absolute top-4 right-4 flex flex-col items-end z-20">
        <div className="flex items-center p-1 bg-white rounded-lg shadow-sm">
          <div className="text-xs bg-green-100 text-green-800 font-medium px-3 py-1 rounded-md">
            Safety Area
          </div>
          <div className="text-xs bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-md ml-2">
            Bleed
          </div>
        </div>
      </div>

      {/* Canvas with Dimensions */}
      <div className="relative w-full max-w-[450px] md:max-w-[600px] flex items-center justify-center">
        {/* Vertical Dimension */}
        <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 flex items-center gap-1 text-gray-500 text-xs">
          <div className="flex flex-col items-center">
            <div className="w-2 h-px bg-gray-400"></div>
            <div className="w-px h-40 bg-gray-400"></div>
            <div className="w-2 h-px bg-gray-400"></div>
          </div>
          <span>1.78in</span>
        </div>

        <CanvasEditor setFabricCanvas={setFabricCanvas} />

        {/* Horizontal Dimension */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 text-xs">
          <span>4.31in</span>
          <div className="flex items-center">
            <div className="h-2 w-px bg-gray-400"></div>
            <div className="h-px w-80 md:w-96 bg-gray-400"></div>
            <div className="h-2 w-px bg-gray-400"></div>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white rounded-lg shadow-md flex items-center p-1 gap-1 md:gap-2">
        <div className="flex items-center bg-gray-100 rounded-md p-0.5">
          <button
            onClick={() => onSideChange("front")}
            className={`px-2 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium rounded-md ${
              activeSide === "front"
                ? "text-gray-800 bg-white shadow-sm"
                : "text-gray-500"
            }`}
          >
            Front
          </button>
          <button
            onClick={() => onSideChange("back")}
            className={`px-2 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium rounded-md ${
              activeSide === "back"
                ? "text-gray-800 bg-white shadow-sm"
                : "text-gray-500"
            }`}
          >
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
