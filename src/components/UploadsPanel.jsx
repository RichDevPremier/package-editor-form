import React from 'react';

const UploadsPanel = ({ onClose, onUploadClick, recentUploads, onImageSelect, onImageDelete }) => {
  return (
    <div className="absolute top-14 md:top-0 left-0 md:left-16 w-80 h-[calc(100vh-3.5rem)] md:h-full bg-white border-r border-gray-200 z-30 p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Uploads</h2>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-md">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="space-y-2 mb-4">
        <button 
          onClick={onUploadClick}
          className="w-full flex items-center justify-center gap-2 bg-cyan-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-500 transition-colors"
        >
          <span className="material-symbols-outlined">cloud_upload</span>
          Upload from this device
        </button>
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
          <span className="material-symbols-outlined">qr_code_scanner</span>
          Upload from phone
        </button>
      </div>

      <div className="flex items-center justify-between py-2 border-t border-b border-gray-200 mb-4">
        <span className="text-sm font-medium">Specs and templates</span>
        <span className="material-symbols-outlined">chevron_right</span>
      </div>

      <h3 className="text-sm font-semibold mb-2">Recently uploaded</h3>
      <div className="flex-1 overflow-y-auto grid grid-cols-3 gap-2">
        {recentUploads.map((img, index) => (
          <div key={index} className="relative group">
            <img 
              src={img.src}
              alt="Recent upload" 
              className="w-full h-24 object-cover rounded-md cursor-pointer hover:opacity-80"
              onClick={() => onImageSelect(img.src)}
            />
            <button 
              onClick={() => onImageDelete(img.id)}
              className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full p-0.5 hidden group-hover:block"
            >
              <span className="material-symbols-outlined !text-sm">delete</span>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 mb-2">Sign in to access previous uploads.</p>
        <button className="w-full border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default UploadsPanel;

