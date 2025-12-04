import React from "react";

const TextToolPanel = ({ textObjects, onTextChange, onAddText, onClose }) => {
  return (
    <div className="absolute top-14 md:top-0 left-0 md:left-16 w-64 h-[calc(100vh-3.5rem)] md:h-full bg-white border-r border-gray-200 z-30 p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Text</h2>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-md">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Edit your text below, or click on the field you'd like to edit directly
        on your design.
      </p>

      <div className="flex-1 overflow-y-auto space-y-2 pt-4">
        {textObjects.map((obj) => (
          <input
            key={obj.id}
            type="text"
            className="w-full p-2 border-b border-gray-300 focus:border-primary focus:outline-none"
            value={obj.text}
            onChange={(e) => onTextChange(obj.id, e.target.value)}
          />
        ))}
      </div>

      <button
        onClick={onAddText}
        className="w-full mt-4 bg-cyan-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-500 transition-colors"
      >
        New Text Field
      </button>
    </div>
  );
};

export default TextToolPanel;
