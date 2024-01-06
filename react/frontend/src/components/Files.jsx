// import React from 'react'
// import OneFile from './OneFile'



// const Files = ({files}) => {



//     return (
//         <div>
//            {files.map((file) =>(<OneFile file = {file}/>))}
           
            
//         </div>
//     )
// }

// export default Files
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import OneFile from './OneFile';
import "../style/Files.css";

const Files = ({ files }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2; // Max broj knjiga po stranici

  

  const pageCount = Math.ceil(files.length / itemsPerPage);

  const displayFiles = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return files.slice(startIndex, endIndex).map((file) => (
      <OneFile key={file.id} file={file} />
    ));
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

  return (
    <div>
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

      
      {/* <button onClick={handlePrevClick} disabled={currentPage === 0}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={currentPage === pageCount - 1}>
        Next
      </button> */}
    </div>
  );
};

export default Files;
