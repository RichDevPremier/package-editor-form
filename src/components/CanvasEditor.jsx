import { useEffect, useRef } from "react";
import * as fabric from "fabric";

const CanvasEditor = ({ setFabricCanvas }) => {
  const canvasEl = useRef(null);

  useEffect(() => {
    // Dimensions based on the model's printable area aspect ratio (109.507 / 45.282)
    const canvasWidth = 600;
    const canvasHeight = 248;

    const canvas = new fabric.Canvas(canvasEl.current, {
      width: canvasWidth,
      height: canvasHeight,
      backgroundColor: "transparent",
    });

    // Safety Line (inner dashed green)
    const safetyPadding = 10;
    const safetyLine = new fabric.Rect({
      left: safetyPadding,
      top: safetyPadding,
      width: canvasWidth - safetyPadding * 2,
      height: canvasHeight - safetyPadding * 2,
      fill: "transparent",
      stroke: "#059669", // Green
      strokeWidth: 1,
      strokeDashArray: [5, 3],
      selectable: false,
      evented: false,
    });

    // Bleed Line (outer solid blue)
    const bleedLine = new fabric.Rect({
      left: 1,
      top: 1,
      width: canvasWidth - 2,
      height: canvasHeight - 2,
      fill: "transparent",
      stroke: "#2563eb", // Blue
      strokeWidth: 2,
      selectable: false,
      evented: false,
    });

    canvas.add(safetyLine, bleedLine);

    setFabricCanvas(canvas);

    canvas.on("object:moving", (e) => {
      const obj = e.target;
      const safetyPadding = 10;
      const canvasWidth = 600;
      const canvasHeight = 248;

      // If the object is larger than the safety area, don't constrain it
      if (
        obj.getScaledHeight() > canvasHeight - safetyPadding * 2 ||
        obj.getScaledWidth() > canvasWidth - safetyPadding * 2
      ) {
        return;
      }

      obj.setCoords();

      const objBoundingRect = obj.getBoundingRect();

      const safetyZone = {
        left: safetyPadding,
        top: safetyPadding,
        right: canvasWidth - safetyPadding,
        bottom: canvasHeight - safetyPadding,
      };

      // Keep object within safety zone
      if (objBoundingRect.left < safetyZone.left) {
        obj.left = safetyZone.left;
      }

      if (objBoundingRect.top < safetyZone.top) {
        obj.top = safetyZone.top;
      }

      if (objBoundingRect.left + objBoundingRect.width > safetyZone.right) {
        obj.left = safetyZone.right - objBoundingRect.width;
      }

      if (objBoundingRect.top + objBoundingRect.height > safetyZone.bottom) {
        obj.top = safetyZone.bottom - objBoundingRect.height;
      }
    });

    return () => {
      setFabricCanvas(null);
      canvas.dispose();
    };
  }, [setFabricCanvas]);

  return <canvas ref={canvasEl} />;
};

export default CanvasEditor;
