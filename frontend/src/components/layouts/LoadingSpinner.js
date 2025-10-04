import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="loading-dots">
        <div style={{ '--dot-index': 0 }}></div>
        <div style={{ '--dot-index': 1 }}></div>
        <div style={{ '--dot-index': 2 }}></div>
      </div>
    </div>
  );
}