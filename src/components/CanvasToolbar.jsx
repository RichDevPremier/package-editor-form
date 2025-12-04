import React from "react";
import TextToolbar from "./TextToolbar";
import ImageToolbar from "./ImageToolbar";

const CanvasToolbar = ({
  selectedObject,
  onPropertyChange,
  openAdjustPanel,
  onReplace,
}) => {
  const getToolbar = () => {
    if (!selectedObject) return null;

    switch (selectedObject.type) {
      case "i-text":
        return (
          <TextToolbar
            selectedObject={selectedObject}
            onPropertyChange={onPropertyChange}
          />
        );
      case "image":
        return (
          <ImageToolbar
            onPropertyChange={onPropertyChange}
            onAdjustClick={openAdjustPanel}
            onReplace={onReplace}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 z-10">
      {getToolbar()}
    </div>
  );
};

export default CanvasToolbar;
