import React, { useState } from "react";

const CallDetailsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Button to Open Panel */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="bg-blue-600 text-white py-2 px-4 rounded shadow-md hover:bg-blue-700 transition"
      >
        Show Call Details
      </button>

      {/* Sliding Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-1/4 bg-white shadow-lg border-l border-gray-300 p-4 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with Close Button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Call Details</h2>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-red-500 hover:text-red-700 transition"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Request Method and URL */}
        <div className="mb-4">
          <button className="bg-blue-100 text-blue-600 font-semibold py-1 px-2 rounded">
            POST
          </button>
          <span className="text-blue-600 ml-2">/crm/v3/objects/contacts</span>
          <button className="text-blue-600 ml-2 hover:text-blue-800 transition">
            Copy
          </button>
        </div>

        {/* Result */}
        <div className="mb-4">
          <h3 className="text-gray-700 font-semibold">Result:</h3>
          <p className="text-green-500 font-bold">HTTP 201</p>
        </div>

        {/* Request ID */}
        <div className="mb-4">
          <h3 className="text-gray-700 font-semibold">Request ID</h3>
          <p className="text-gray-700 bg-gray-100 p-2 rounded">
            935fba83-794c-42cd-b0fb-57c00405a69d
          </p>
          <button className="text-blue-600 mt-2 hover:text-blue-800 transition">
            Copy request ID
          </button>
        </div>

        {/* Request Tab */}
        <div className="mb-4">
          <button className="text-gray-700 font-semibold py-2 px-4 border-b-2 border-blue-600">
            Request
          </button>
        </div>

        {/* Header Section */}
        <div className="mb-4">
          <h3 className="text-gray-700 font-semibold">HEADER</h3>
          <button className="text-blue-600 ml-2 hover:text-blue-800 transition">
            Copy
          </button>
          <pre className="bg-gray-100 p-2 rounded mt-2">{`{}`}</pre>
        </div>

        {/* Body Section */}
        <div>
          <h3 className="text-gray-700 font-semibold">BODY</h3>
          <pre className="bg-gray-100 p-2 rounded mt-2">
            No body was recorded for this request.
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CallDetailsPanel;
