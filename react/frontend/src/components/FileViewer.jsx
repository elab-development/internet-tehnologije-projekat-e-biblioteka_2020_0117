import React, { useState, useEffect } from 'react';
import React2 from 'react';

const FileViewer = ({ filename }) => {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/getFile/${filename}`);
        const data = await response.json();
        console.log('FileViewer se montira za fajl:', filename);
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
