// import React, { useState, useEffect } from 'react';
// import React2 from 'react';

// const FileViewer = ({ filename }) => {
//   const [fileContent, setFileContent] = useState('');

//   useEffect(() => {
//     const fetchFileContent = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/getFile/${filename}`);
//         const data = await response.json();
//         console.log('FileViewer se montira za fajl:', filename);
//         if (data.content) {
//           setFileContent(data.content);
//         } else {
//           console.error('File content not found');
//         }
//       } catch (error) {
//         console.error('Error fetching file content:', error);
//       }
//     };

//     fetchFileContent();
//   }, [filename]);

//   return (
//     <div>
//       <h2>File Content Viewer</h2>
//       <pre>{fileContent}</pre>
//     </div>
//   );
// };

// export default FileViewer;


//verzija ne radi zbog importova koje ne mozemo da instaliramo
// import React, { useState, useEffect } from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/pdf-viewer';
// import mammoth from 'mammoth';

// const FileViewer = ({ filename }) => {
//   const [fileContent, setFileContent] = useState('');
//   const [fileExtension, setFileExtension] = useState('');

//   useEffect(() => {
//     const fetchFileContent = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/getFile/${filename}`);
//         const data = await response.json();
//         console.log('FileViewer se montira za fajl:', filename);
//         if (data.content) {
//           setFileContent(data.content);

//           // Extract the file extension
//           const extension = filename.split('.').pop().toLowerCase();
//           setFileExtension(extension);

//           // Render content based on the file extension
//           renderFileContent(data.content, extension);
//         } else {
//           console.error('File content not found');
//         }
//       } catch (error) {
//         console.error('Error fetching file content:', error);
//       }
//     };

//     const renderFileContent = (content, extension) => {
//       if (extension === 'pdf') {
//         // For PDF files, use the react-pdf library
//         setFileContent(
//           <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
//             <Viewer fileUrl={`data:application/pdf;base64,${content}`} />
//           </Worker>
//         );
//       } else if (extension === 'docx' || extension === 'doc') {
//         // For Word files, use the mammoth library
//         const arrayBuffer = base64ToArrayBuffer(content);
//         mammoth.extractRawText({ arrayBuffer })
//           .then((result) => setFileContent(<div dangerouslySetInnerHTML={{ __html: result.value }} />));
//       } else {
//         // For other file types, display raw content
//         setFileContent(<pre>{content}</pre>);
//       }
//     };

//     const base64ToArrayBuffer = (base64) => {
//       const binaryString = window.atob(base64);
//       const bytes = new Uint8Array(binaryString.length);
//       for (let i = 0; i < binaryString.length; i++) {
//         bytes[i] = binaryString.charCodeAt(i);
//       }
//       return bytes.buffer;
//     };

//     fetchFileContent();
//   }, [filename]);

//   return (
//     <div>
//       <h2>File Content Viewer</h2>
//       {fileContent}
//     </div>
//   );
// };

// export default FileViewer;


//ovo radi ali ne cita fajlove lepo
// import React, { useState, useEffect } from 'react';
 
// const FileViewer = ({ filename }) => {
//   const [fileContent, setFileContent] = useState('');
//   const [fileExtension, setFileExtension] = useState('');
 
//   useEffect(() => {
//     const fetchFileContent = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/getFile/${filename}`);
//         const data = await response.json();
//         if (data.content) {
//           setFileContent(data.content);
 
//           const extension = filename.split('.').pop().toLowerCase();
//           setFileExtension(extension);
 
//           renderFileContent(data.content, extension);
//         } else {
//           console.error('File content not found');
//         }
//       } catch (error) {
//         console.error('Error fetching file content:', error);
//       }
//     };
 
//     const renderFileContent = (content, extension) => {
//       if (extension === 'pdf') {
//         setFileContent(
// <embed
//             src={`data:application/pdf;base64,${content}`}
//             type="application/pdf"
//             width="100%"
//             height="500px"
//           />
//         );
//       } else if (extension === 'docx' || extension === 'doc') {
//         // Prikaz Word fajlova na drugi način, ovisno o potrebama
//         setFileContent(<pre>{content}</pre>);
//       } else {
//         setFileContent(<pre>{content}</pre>);
//       }
//     };
 
//     fetchFileContent();
//   }, [filename]);
 
//   return (
// <div style={{ width: '95vw', overflowX: 'hidden' }}>
// <h2>File Content Viewer</h2>
//       {fileContent}
// </div>
//   );
// };
 
// export default FileViewer;

import React, { useState, useEffect } from 'react';

const FileViewer = ({ filename }) => {
  const [fileContent, setFileContent] = useState('');
  const [fileExtension, setFileExtension] = useState('');

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/getFile/${filename}`);
        const data = await response.json();
        if (data.content) {
          setFileContent(data.content);
          const extension = filename.split('.').pop().toLowerCase();
          setFileExtension(extension);
          renderFileContent(data.content, extension);
        } else {
          console.error('File content not found');
        }
      } catch (error) {
        console.error('Error fetching file content:', error);
      }
    };

    const renderFileContent = (content, extension) => {
      if (extension === 'pdf') {
        setFileContent(
          <embed
            src={`data:application/pdf;base64,${content}`}
            type="application/pdf"
            width="100%"
            height="500px"
          />
        );
      } else if (extension === 'docx' || extension === 'doc') {
        setFileContent(<pre>{content}</pre>);
      } else {
        setFileContent(<pre>{content}</pre>);
      }
    };

    fetchFileContent();
  }, [filename]);

  return (
    <div style={{ width: '95vw', overflowX: 'hidden' }}>
      <h2>File Content Viewer</h2>
      {fileContent}
    </div>
  );
};

export default FileViewer;



//ovo ne radi jer trazi mammotha da se ubaci negde

// import React, { useState, useEffect } from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import { Worker as DocWorker, Viewer as DocViewer } from 'react-doc-viewer';
// import 'react-doc-viewer/dist/index.css';
// import mammoth from 'mammoth';

// const FileViewer = ({ filename }) => {
//   const [fileContent, setFileContent] = useState('');
//   const [fileExtension, setFileExtension] = useState('');

//   useEffect(() => {
//     const fetchFileContent = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/getFile/${filename}`);
//         const data = await response.json();
//         if (data.content) {
//           setFileContent(data.content);

//           const extension = filename.split('.').pop().toLowerCase();
//           setFileExtension(extension);
//         } else {
//           console.error('File content not found');
//         }
//       } catch (error) {
//         console.error('Error fetching file content:', error);
//       }
//     };

//     fetchFileContent();
//   }, [filename]);

//   const renderFileContent = (content, extension) => {
//     if (extension === 'pdf') {
//       return (
//         <div>
//           <h2>File Content Viewer</h2>
//           <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${window.pdfjs.version}/build/pdf.worker.min.js`}>
//             <Viewer fileUrl={`data:application/pdf;base64,${content}`} />
//           </Worker>
//         </div>
//       );
//     } else if (extension === 'docx' || extension === 'doc') {
//       return (
//         <div>
//           <h2>File Content Viewer</h2>
//           <DocWorker workerUrl="https://unpkg.com/react-doc-viewer@latest/dist/react-doc-viewer.worker.js" />
//           <DocViewer files={[{ uri: `data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,${content}` }]} />
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <h2>File Content Viewer</h2>
//           <pre>{content}</pre>
//         </div>
//       );
//     }
//   };

//   return renderFileContent(fileContent, fileExtension);
// };

// export default FileViewer;


// import React, { useState, useEffect } from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import mammoth from 'mammoth';

// const FileViewer = ({ filename }) => {
//   const [fileContent, setFileContent] = useState('');
//   const [fileExtension, setFileExtension] = useState('');
//   const [htmlContent, setHtmlContent] = useState('');

//   useEffect(() => {
//     const fetchFileContent = async () => {
//       try {
//         const response = await fetch(`http://127.0.0.1:8000/getFile/${filename}`);
//         const data = await response.json();
//         if (data.content) {
//           setFileContent(data.content);

//           const extension = filename.split('.').pop().toLowerCase();
//           setFileExtension(extension);

//           if (extension === 'docx' || extension === 'doc') {
//             const convertedHtml = await convertToHtml(data.content);
//             setHtmlContent(convertedHtml);
//           }
//         } else {
//           console.error('File content not found');
//         }
//       } catch (error) {
//         console.error('Error fetching file content:', error);
//       }
//     };

//     fetchFileContent();
//   }, [filename]);

//   const renderFileContent = (content, extension) => {
//     if (extension === 'pdf') {
//       return (
//         <div>
//           <h2>File Content Viewer</h2>
//           <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${window.pdfjs.version}/build/pdf.worker.min.js`}>
//             <Viewer fileUrl={`data:application/pdf;base64,${content}`} />
//           </Worker>
//         </div>
//       );
//     } else if (extension === 'docx' || extension === 'doc') {
//       return (
//         <div>
//           <h2>File Content Viewer</h2>
//           <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <h2>File Content Viewer</h2>
//           <pre>{content}</pre>
//         </div>
//       );
//     }
//   };

//   const convertToHtml = async (docxContent) => {
//     const result = await mammoth.extractRawText({ arrayBuffer: docxContent });
//     return result.value;
//   };

//   return renderFileContent(fileContent, fileExtension);
// };

// export default FileViewer;


