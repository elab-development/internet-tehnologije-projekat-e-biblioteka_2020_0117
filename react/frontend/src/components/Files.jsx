import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import OneFile from './OneFile';
import "../style/Files.css";
import axios from "axios";

const Files = ({ files,currentUser }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const [showFileViewer, setShowFileViewer] = useState(false);
  
  const [filteredFiles, setFilteredFiles] = useState(files);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (Array.isArray(files)) {
      // Apply filtering based on the search term
      
      const filtered = files.filter(
        (file) =>
          (file.fileName &&
          file.fileName.toLowerCase().includes(searchTerm.toLowerCase()))
          || (file.authorName &&
            file.authorName.toLowerCase().includes(searchTerm.toLowerCase()))
          || (file.genreName &&
            file.genreName.toLowerCase().includes(searchTerm.toLowerCase()))
      );
     
      setFilteredFiles(filtered);
    }
  }, [files, searchTerm]);

  const pageCount = filteredFiles ? Math.ceil(filteredFiles.length / itemsPerPage) : 0;

  const displayFiles = () => {
    if (!Array.isArray(filteredFiles) || filteredFiles.length === 0) {
      return <p>No files to display.</p>;
    }

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
      <div>
        {filteredFiles.slice(startIndex, endIndex).map((file) => (
          <OneFile key={file.id} file={file} handleReadBook={handleReadBook} currentUser={currentUser}/>
        ))}
      </div>
    );
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
 const handleReadBook = (fileId) => {
   setShowFileViewer((prevShowFileViewer) => ({
     ...prevShowFileViewer,
     [fileId]: true,
   }));
 };
  return (
    <div>
      <input
        type="text"
        placeholder="Search files (name)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          margin: '10px',
          padding: '8px',
          width: '30%',
          display: 'block',
          margin: '0 auto',
        }}
      />
      {displayFiles()}
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        previousLabel={'previous'}
        nextLabel={'next'}
      />
    </div>
  );
};

export default Files;



// const Files = ({ files }) => {
//   console.log(files);
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 2; // Max broj knjiga po stranici

//   const [filteredFiles, setFilteredFiles] = useState([]);
// const [searchTerm, setSearchTerm] = useState('');
// console.log(files, filteredFiles);

// useEffect(() => {
//   if (Array.isArray(files)) {
//     const filtered = files.filter((file) =>
//       file.bookName && file.bookName.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredFiles(filtered);
//   }
// }, [files, searchTerm]);
// const pageCount = files ? Math.ceil(files.length / itemsPerPage) : 0;

// const displayFiles = () => {
//   if (!Array.isArray(filteredFiles)) {
//     return <p>No files to display.</p>;
//   }

//   const pageCount = Math.ceil(filteredFiles.length / itemsPerPage);
  
//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   return (
//     <div>
//       {filteredFiles.slice(startIndex, endIndex).map((file) => (
//         <OneFile key={file.id} file={file} />
//       ))}
//     </div>
//   );
// };

  

//   const handlePageClick = ({ selected }) => {
//     setCurrentPage(selected);
//   };

//   const handleNextClick = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePrevClick = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   return (
//     <div>

//          {/* Pretraga */}
//       <input
//         type="text"
//         placeholder="Search files (name)"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{
//             margin: '10px',
//             padding: '8px', 
//             width: '30%',   
//             display: 'block', 
//             margin: '0 auto', 
//           }}
//       />
//       {displayFiles()}

    
//       <ReactPaginate
//          pageCount={pageCount}
//          pageRangeDisplayed={3}
//          marginPagesDisplayed={1}
//          onPageChange={handlePageClick}
//          containerClassName={'pagination'}
//          activeClassName={'active'}
//          previousLabel={'previous'}
//          nextLabel={'next'}
//       />
//         {/*To do za projekat - napraviti ogroman JOIN u laravelu da obuhvata fajlove, autore i zanrove i da se prosledi ovde i da se search deo u navbaru 
//         podesi slicno kao i ovo polje u Files fajlu ali da pretrazuje po celom tom JOIN-u (autor, zanr i knjiga imena)*/ }
        
//       {/*Gledali smo i u delu node_modules/react-paginate da nadjemo markere i da ih sklonimo sa dugmiadi next, previous itd ali nismo ih nasli*/ }


//       {/*ovo je pokusaj zamene dugmadi koje su defaultno date sa paginacijom ali nismo uspeli da obrisemo te default dugmice*/}
//       {/* <button onClick={handlePrevClick} disabled={currentPage === 0}>
//         Previous
//       </button>
//       <button onClick={handleNextClick} disabled={currentPage === pageCount - 1}>
//         Next
//       </button> */}
//     </div>
//   );
// };

// export default Files;

// const Files = ({ files }) => {
//   console.log(files);
 
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 2;
//   const [filteredFiles, setFilteredFiles] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showFileViewer, setShowFileViewer] = useState(false);
  

//   useEffect(() => {
//     const filtered = files && Array.isArray(files) ? files.filter((file) =>
//       file.fileName && file.fileName.toLowerCase().includes(searchTerm.toLowerCase())
//     ) : [];

//     setFilteredFiles(filtered);
//   }, [files, searchTerm]);

  

//   const pageCount = filteredFiles ? Math.ceil(filteredFiles.length / itemsPerPage) : 0;
//   //stara verzija
//   // const displayFiles = () => {
//   //   if (!filteredFiles) {
//   //     return null;
//   //   }

//   //   const startIndex = currentPage * itemsPerPage;
//   //   const endIndex = startIndex + itemsPerPage;
//   //   return filteredFiles.slice(startIndex, endIndex).map((file) => (
//   //     <OneFile key={file.id} file={file} />
//   //   ));
//   // };
//   const displayFiles = () => {
//     if (!filteredFiles || filteredFiles.length === 0) {
//       return <p>No files found</p>;
//     }
  
//   //   const startIndex = currentPage * itemsPerPage;
//   //   const endIndex = startIndex + itemsPerPage;
//   //   return filteredFiles
//   //     .slice(startIndex, endIndex)
//   //     .map((file, index) => (
//   //       <OneFile key={`${file.id}_${index}`} file={file} />
//   //     ));
//   // };

//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   return filteredFiles
//     .slice(startIndex, endIndex)
//     .map((file, index) => (
//       <OneFile
//         key={`${file.id}_${index}`}
//         file={file}
//         handleReadBook={handleReadBook}
//         //showFileViewer={showFileViewer}
//       />
//     ));
// };


// const handleReadBook = (fileId) => {
//   setShowFileViewer((prevShowFileViewer) => ({
//     ...prevShowFileViewer,
//     [fileId]: true,
//   }));
// };

//   const handlePageClick = ({ selected }) => {
//     setCurrentPage(selected);
//   };

//   const handleNextClick = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePrevClick = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   // const resetPage = () => {
//   //   setCurrentPage(0);
//   // };

//   return (
//     <div>
//       {/* Pretraga */}
//       <input
//         type="text"
//         placeholder="Search files (name)"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
        
//         style={{
//           margin: '10px',
//           padding: '8px',
//           width: '30%',
//           display: 'block',
//           margin: '0 auto',
//         }}
//       />
//       {/*{displayFiles()}*/ }
//       {displayFiles(handleReadBook, showFileViewer)}
//       <ReactPaginate
//         pageCount={pageCount}
//         pageRangeDisplayed={3}
//         marginPagesDisplayed={1}
//         onPageChange={handlePageClick}
//         containerClassName={'pagination'}
//         activeClassName={'active'}
//         previousLabel={'previous'}
//         nextLabel={'next'}
//       />
//     </div>
//   );
// };

// export default Files;
