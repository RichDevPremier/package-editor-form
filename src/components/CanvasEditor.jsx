import React, { useEffect, useRef } from "react";
import * as fabric from "fabric";

const CanvasEditor = ({ setFabricCanvas }) => {
  const canvasEl = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasEl.current, {
      width: 500,
      height: 400,
      backgroundColor: "#f0f0f0",
    });
    setFabricCanvas(canvas);

    // Add a sample image to the canvas
    const addSampleImage = async () => {
      try {
        const img = await fabric.Image.fromURL(
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBKNkWgS7-L56_G-3rS36cs0WtwVokqZZB253izH8q6fdAp8MrhGdpqBe4WQcPJE0_4foWTiRKHDBZgUPzIZ9UTaB0yEwz-BszJcdaMstJyw7k8OTr0kxGBkZAYXgt3c6ePo7MFTcfuThWg-o_h0KqY_BaJ8M-wOKAozg82ECaD967QEkZJKmYz8tsT9c3gc1OSvTyaZUBPJ1sUjVgGrQ8l22iCEtj-J4Qvmedi9uiN_4AwTNO4LrmMOxv6hVoTz2A8W11OVfqsQys",
          { crossOrigin: "anonymous" }
        );
        img.scaleToWidth(200);
        canvas.add(img);
        canvas.centerObject(img);
        canvas.renderAll();
      } catch (error) {
        console.error("Error loading sample image:", error);
      }
    };
    addSampleImage();

    return () => {
      setFabricCanvas(null);
      canvas.dispose();
    };
  }, [setFabricCanvas]);

  return <canvas ref={canvasEl} />;
};

export default CanvasEditor;
