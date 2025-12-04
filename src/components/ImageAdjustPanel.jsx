import React from "react";

const ImageAdjustPanel = ({ selectedObject, onApplyFilter, onClose }) => {
  if (!selectedObject || selectedObject.type !== "image") return null;

  const handleFilterChange = (filterName, value) => {
    onApplyFilter(filterName, value);
  };

  return (
    <div className="absolute top-16 left-4 bg-white rounded-lg shadow-lg p-4 w-64 z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Adjust</h3>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-md">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Brightness</label>
          <input
            type="range"
            min="-1"
            max="1"
            step="0.01"
            defaultValue="0"
            onChange={(e) => handleFilterChange("brightness", e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Contrast</label>
          <input
            type="range"
            min="-1"
            max="1"
            step="0.01"
            defaultValue="0"
            onChange={(e) => handleFilterChange("contrast", e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Saturation</label>
          <input
            type="range"
            min="-1"
            max="1"
            step="0.01"
            defaultValue="0"
            onChange={(e) => handleFilterChange("saturation", e.target.value)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageAdjustPanel;
