import React from "react";

const TextToolbar = ({ selectedObject, onPropertyChange }) => {
  if (!selectedObject || selectedObject.type !== "i-text") return null;

  const handleFontSizeChange = (e) => {
    onPropertyChange("fontSize", parseInt(e.target.value, 10));
  };

  const incrementFontSize = () => {
    onPropertyChange("fontSize", selectedObject.fontSize + 1);
  };

  const decrementFontSize = () => {
    onPropertyChange("fontSize", selectedObject.fontSize - 1);
  };

  const toggleBold = () => {
    onPropertyChange(
      "fontWeight",
      selectedObject.fontWeight === "bold" ? "normal" : "bold"
    );
  };

  const handleColorChange = (e) => {
    onPropertyChange("fill", e.target.value);
  };

  const handleAlignment = (alignment) => {
    onPropertyChange("textAlign", alignment);
  };

  const toggleUnderline = () => {
    onPropertyChange("underline", !selectedObject.underline);
  };

  const toggleLinethrough = () => {
    onPropertyChange("linethrough", !selectedObject.linethrough);
  };

  const handleFontFamilyChange = (e) => {
    onPropertyChange("fontFamily", e.target.value);
  };

  const fonts = [
    "Arial",
    "Verdana",
    "Georgia",
    "Times New Roman",
    "Courier New",
    "Roboto",
    "Open Sans",
    "Lato",
    "Montserrat",
  ];

  return (
    <div className="bg-white rounded-lg shadow-md flex items-center p-1 gap-1">
      {/* Font Family */}
      <select
        className="border rounded-md px-2 py-1 text-sm bg-gray-50"
        value={selectedObject.fontFamily}
        onChange={handleFontFamilyChange}
      >
        {fonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>

      {/* Font Size */}
      <div className="flex items-center border rounded-md">
        <button
          onClick={decrementFontSize}
          className="px-2 py-1 text-sm hover:bg-gray-100"
        >
          -
        </button>
        <input
          type="number"
          value={selectedObject.fontSize}
          onChange={handleFontSizeChange}
          className="w-12 text-center border-l border-r text-sm"
        />
        <button
          onClick={incrementFontSize}
          className="px-2 py-1 text-sm hover:bg-gray-100"
        >
          +
        </button>
      </div>

      {/* Color Picker */}
      <div className="relative">
        <input
          type="color"
          value={selectedObject.fill}
          onChange={handleColorChange}
          className="absolute opacity-0 w-6 h-6 cursor-pointer"
        />
        <div
          className="w-6 h-6 rounded-full border border-gray-300"
          style={{ backgroundColor: selectedObject.fill }}
        ></div>
      </div>

      {/* Bold Button */}
      <button
        onClick={toggleBold}
        className={`p-2 rounded-md hover:bg-gray-100 ${
          selectedObject.fontWeight === "bold" ? "bg-gray-200" : ""
        }`}
      >
        <span className="material-symbols-outlined !text-xl">format_bold</span>
      </button>

      {/* Underline Button */}
      <button
        onClick={toggleUnderline}
        className={`p-2 rounded-md hover:bg-gray-100 ${
          selectedObject.underline ? "bg-gray-200" : ""
        }`}
      >
        <span className="material-symbols-outlined !text-xl">
          format_underlined
        </span>
      </button>

      {/* Strikethrough Button */}
      <button
        onClick={toggleLinethrough}
        className={`p-2 rounded-md hover:bg-gray-100 ${
          selectedObject.linethrough ? "bg-gray-200" : ""
        }`}
      >
        <span className="material-symbols-outlined !text-xl">
          format_strikethrough
        </span>
      </button>

      {/* Alignment Buttons */}
      <div className="flex items-center text-gray-500 gap-1">
        <button
          onClick={() => handleAlignment("left")}
          className={`p-2 rounded-md hover:bg-gray-100 ${
            selectedObject.textAlign === "left" ? "bg-gray-200" : ""
          }`}
        >
          <span className="material-symbols-outlined !text-xl">
            format_align_left
          </span>
        </button>
        <button
          onClick={() => handleAlignment("center")}
          className={`p-2 rounded-md hover:bg-gray-100 ${
            selectedObject.textAlign === "center" ? "bg-gray-200" : ""
          }`}
        >
          <span className="material-symbols-outlined !text-xl">
            format_align_center
          </span>
        </button>
        <button
          onClick={() => handleAlignment("right")}
          className={`p-2 rounded-md hover:bg-gray-100 ${
            selectedObject.textAlign === "right" ? "bg-gray-200" : ""
          }`}
        >
          <span className="material-symbols-outlined !text-xl">
            format_align_right
          </span>
        </button>
        <button className="p-2 rounded-md hover:bg-gray-100">
          <span className="material-symbols-outlined !text-xl">
            format_list_bulleted
          </span>
        </button>
        <button className="p-2 rounded-md hover:bg-gray-100">
          <span className="material-symbols-outlined !text-xl">
            format_line_spacing
          </span>
        </button>
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md hover:bg-gray-100">
          <span className="material-symbols-outlined !text-lg">
            magic_button
          </span>
          Effects
        </button>
        <div className="w-px h-6 bg-gray-200 mx-2"></div>
        <button className="p-2 rounded-md hover:bg-gray-100">
          <span className="material-symbols-outlined !text-xl">layers</span>
        </button>
        <button className="p-2 rounded-md hover:bg-gray-100">
          <span className="material-symbols-outlined !text-xl">flip</span>
        </button>
        <button className="p-2 rounded-md hover:bg-gray-100">
          <span className="material-symbols-outlined !text-xl">animation</span>
        </button>
        <button className="p-2 rounded-md hover:bg-gray-100">
          <span className="material-symbols-outlined !text-xl">more_horiz</span>
        </button>
      </div>
    </div>
  );
};

export default TextToolbar;
