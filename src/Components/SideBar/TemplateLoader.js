import React from 'react';
import '../../Styles/TemplateLoader.css'; // Updated CSS import path

const TemplateLoader = () => {
  return (
    <div className="button-container">
      <div className="btn btn-clear">
        Clear Resume
      </div>
      <div className="btn btn-load">Load Example</div>
    </div>
  );
};

export default TemplateLoader;

