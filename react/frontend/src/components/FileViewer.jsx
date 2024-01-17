import React, { useState, useEffect } from 'react';
import React from 'react';

const FileViewer = ({ filename }) => {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch(`http://localhost/api/getFiles/${filename}`);
        const data = await response.json();
        if (data.content) {
          setFileContent(data.content);
        } else {
          console.error('File content not found');
        }
      } catch (error) {
        console.error('Error fetching file content:', error);
      }
    };

    fetchFileContent();
  }, [filename]);

  return (
    <div>
      <h2>File Content Viewer</h2>
      <pre>{fileContent}</pre>
    </div>
  );
};

export default FileViewer;
