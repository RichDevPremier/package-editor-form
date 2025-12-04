import { useState, useEffect, useRef } from "react";
import * as fabric from "fabric";
import { v4 as uuidv4 } from "uuid";
import LeftSidebar from "./components/LeftSidebar";
import CanvasArea from "./components/CanvasArea";
import RightSidebar from "./components/RightSidebar";
import TextToolPanel from "./components/TextToolPanel";
import UploadsPanel from "./components/UploadsPanel";

import ImageAdjustPanel from "./components/ImageAdjustPanel";
function App() {
  const [fabricCanvas, setFabricCanvas] = useState(null);
  const [isTextPanelOpen, setIsTextPanelOpen] = useState(false);
  const [textObjects, setTextObjects] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);
  const fileInputRef = useRef(null);
  const [isReplacing, setIsReplacing] = useState(false);

  const triggerUpload = () => {
    fileInputRef.current.click();
  };

  const triggerReplace = () => {
    setIsReplacing(true);
    fileInputRef.current.click();
  };

  const [isUploadsPanelOpen, setIsUploadsPanelOpen] = useState(false);
  const [recentUploads, setRecentUploads] = useState([]);

  const openUploadsPanel = () => setIsUploadsPanelOpen(true);
  const closeUploadsPanel = () => setIsUploadsPanelOpen(false);

  const [isAdjustPanelOpen, setAdjustPanelOpen] = useState(false);

  const openAdjustPanel = () => setAdjustPanelOpen(true);
  const closeAdjustPanel = () => setAdjustPanelOpen(false);

  useEffect(() => {
    const savedUploads = localStorage.getItem("recentUploads");
    if (savedUploads) {
      setRecentUploads(JSON.parse(savedUploads));
    }
  }, []);

  const openTextPanel = () => setIsTextPanelOpen(true);
  const closeTextPanel = () => setIsTextPanelOpen(false);

  useEffect(() => {
    if (fabricCanvas) {
      const updateTextObjects = () => {
        const texts = fabricCanvas.getObjects("i-text").map((obj) => ({
          id: obj.id, // We'll need to assign IDs to objects
          text: obj.text,
        }));
        setTextObjects(texts);
      };

      fabricCanvas.on("object:added", updateTextObjects);
      fabricCanvas.on("object:removed", updateTextObjects);
      fabricCanvas.on("object:modified", updateTextObjects);

      // Initial load
      updateTextObjects();

      return () => {
        fabricCanvas.off("object:added", updateTextObjects);
        fabricCanvas.off("object:removed", updateTextObjects);
        fabricCanvas.off("object:modified", updateTextObjects);
      };
    }
  }, [fabricCanvas]);

  useEffect(() => {
    if (fabricCanvas) {
      const handleSelection = (e) => {
        setSelectedObject(e.selected[0]);
      };
      const handleSelectionCleared = () => {
        setSelectedObject(null);
      };

      fabricCanvas.on("selection:created", handleSelection);
      fabricCanvas.on("selection:updated", handleSelection);
      fabricCanvas.on("selection:cleared", handleSelectionCleared);

      return () => {
        fabricCanvas.off("selection:created", handleSelection);
        fabricCanvas.off("selection:updated", handleSelection);
        fabricCanvas.off("selection:cleared", handleSelectionCleared);
      };
    }
  }, [fabricCanvas]);

  const addText = () => {
    if (fabricCanvas) {
      const text = new fabric.IText("Your Text Here", {
        left: 100,
        top: 100,
        fill: "#000000",
        fontSize: 40,
        id: uuidv4(),
      });
      fabricCanvas.add(text);
      fabricCanvas.setActiveObject(text);
      fabricCanvas.renderAll();
    }
  };

  const handlePropertyChange = (property, value) => {
    if (fabricCanvas && selectedObject) {
      selectedObject.set(property, value);
      fabricCanvas.renderAll();
    }
  };

  const handleApplyFilter = (filterType, value) => {
    if (selectedObject && selectedObject.type === "image") {
      const capitalizedFilter =
        filterType.charAt(0).toUpperCase() + filterType.slice(1);
      let existingFilter = selectedObject.filters.find(
        (f) => f.type === capitalizedFilter
      );

      if (existingFilter) {
        existingFilter[filterType] = parseFloat(value);
      } else {
        const newFilter = new fabric.Image.filters[capitalizedFilter]({
          [filterType]: parseFloat(value),
        });
        selectedObject.filters.push(newFilter);
      }
      selectedObject.applyFilters();
      fabricCanvas.renderAll();
    }
  };

  const handleTextChange = (id, newText) => {
    if (fabricCanvas) {
      const textObject = fabricCanvas
        .getObjects("i-text")
        .find((obj) => obj.id === id);
      if (textObject) {
        textObject.set("text", newText);
        fabricCanvas.renderAll();
      }
    }
  };

  const addImageToCanvas = (src) => {
    if (!fabricCanvas) {
      console.error("Canvas not ready");
      return;
    }
    const imgElement = new Image();
    imgElement.crossOrigin = "anonymous";
    imgElement.src = src;
    imgElement.onload = () => {
      const fabricImg = new fabric.Image(imgElement);
      fabricImg.scaleToWidth(200);
      fabricCanvas.add(fabricImg);
      fabricCanvas.centerObject(fabricImg);
      fabricCanvas.setActiveObject(fabricImg);
      fabricCanvas.renderAll();
    };
    imgElement.onerror = (err) => {
      console.error("Error loading image element:", err);
    };
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    try {
      const data = await toBase64(file);

      if (isReplacing && selectedObject && selectedObject.type === "image") {
        selectedObject.setSrc(
          data,
          () => {
            fabricCanvas.renderAll();
          },
          { crossOrigin: "anonymous" }
        );
        setIsReplacing(false); // Reset mode
      } else {
        const newUpload = { id: uuidv4(), src: data };
        const updatedUploads = [newUpload, ...recentUploads];
        setRecentUploads(updatedUploads);
        localStorage.setItem("recentUploads", JSON.stringify(updatedUploads));
        addImageToCanvas(data);
      }
    } catch (error) {
      console.error("Error handling image upload:", error);
    }

    e.target.value = "";
  };

  const handleImageSelect = (src) => {
    addImageToCanvas(src);
  };

  const handleImageDelete = (id) => {
    const updatedUploads = recentUploads.filter((upload) => upload.id !== id);
    setRecentUploads(updatedUploads);
    localStorage.setItem("recentUploads", JSON.stringify(updatedUploads));
  };

  const deleteSelectedObject = () => {
    if (fabricCanvas) {
      const activeObject = fabricCanvas.getActiveObject();
      if (activeObject) {
        fabricCanvas.remove(activeObject);
        fabricCanvas.renderAll();
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Delete" || e.key === "Backspace") {
        deleteSelectedObject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [fabricCanvas]);

  function toggleMobileMenu() {
    const sidebar = document.getElementById("leftSidebar");
    const overlay = document.getElementById("mobileMenuOverlay");

    sidebar.classList.toggle("-translate-x-full");
    overlay.classList.toggle("hidden");
  }

  function toggle3DView() {
    const preview = document.getElementById("preview3D");
    const icon = document.getElementById("viewIcon");
    const text = document.getElementById("viewText");

    preview.classList.toggle("hidden");
    preview.classList.toggle("flex");

    if (preview.classList.contains("hidden")) {
      icon.textContent = "visibility";
      text.textContent = "Show 3D view";
    } else {
      icon.textContent = "visibility_off";
      text.textContent = "Hide 3D view";
    }
  }

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        style={{ display: "none" }}
        accept="image/*"
      />

      {isAdjustPanelOpen && (
        <ImageAdjustPanel
          selectedObject={selectedObject}
          onApplyFilter={handleApplyFilter}
          onClose={closeAdjustPanel}
        />
      )}

      <div className="flex flex-1 overflow-hidden">
        <div
          id="mobileMenuOverlay"
          className="fixed inset-0 bg-black bg-opacity-50 z-30 hidden md:hidden"
          onClick={toggleMobileMenu}
        ></div>

        {isTextPanelOpen && (
          <TextToolPanel
            textObjects={textObjects}
            onTextChange={handleTextChange}
            onAddText={addText}
            onClose={closeTextPanel}
            selectedObject={selectedObject}
            onPropertyChange={handlePropertyChange}
          />
        )}
        {isUploadsPanelOpen && (
          <UploadsPanel
            onClose={closeUploadsPanel}
            onUploadClick={triggerUpload}
            recentUploads={recentUploads}
            onImageSelect={handleImageSelect}
            onImageDelete={handleImageDelete}
          />
        )}
        <LeftSidebar
          openTextPanel={openTextPanel}
          openUploadsPanel={openUploadsPanel}
        />

        <main className="flex-1 flex overflow-hidden flex-col lg:flex-row">
          <CanvasArea
            setFabricCanvas={setFabricCanvas}
            selectedObject={selectedObject}
            onPropertyChange={handlePropertyChange}
            openAdjustPanel={openAdjustPanel}
            onReplace={triggerReplace}
          />
          <RightSidebar
            fabricCanvas={fabricCanvas}
            toggle3DView={toggle3DView}
          />
        </main>
      </div>

      <button className="fixed bottom-4 right-4 md:bottom-6 md:right-6 flex items-center justify-center rounded-full h-10 md:h-12 bg-[#FFC22E] text-black text-xs md:text-sm font-bold px-3 md:px-4 gap-2 shadow-lg z-30">
        <span className="material-symbols-outlined md:hidden">help</span>
        <span className="hidden md:inline">Need design help?</span>
      </button>
    </div>
  );
}

export default App;
