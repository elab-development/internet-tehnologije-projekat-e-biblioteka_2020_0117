import React from "react";
import "../style/OneFile.css";
import { FcLike } from "react-icons/fc";
import ReactState, { useState } from 'react';

    
  

const OneFile = ({file}) => {

  
  const [currentColor, setCurrentColor] = useState('white');

  
  const changeColor = () => {
    const newColor = currentColor === 'red' ? 'white' : 'red';
       setCurrentColor(newColor);
       //treba dodati i da se ubacuje u bazu ili izbacuje iz baze u tabeli favBooks u zavisnosti od boje

  };

  return (
     <div className="file-container">
      
       <div className="file-body">
         <h3 className="file-name">{file.bookName}</h3>
         <h3 className="file-author">{file.authorName}</h3>
         <h3 className="file-genre">{file.genreName}</h3>
         <p className="file-description">
           File description where we can read more details about it.
         </p>
         <button className="btn">Read book</button>
         
         {/* <button className="hearthBtn" onClick={changeColor}><FcLike style={{ color: currentColor }}/></button> */}
         <button className={`hearthBtn ${currentColor === 'red' ? 'red' : 'white'}`} onClick={changeColor}>
          <FcLike style={{ color: currentColor === 'red' ? 'white' : 'red' }} />
         </button>
          {/* kad se klikne na Like file treba da se promeni boja srca koje ce da se stavi i da 
          se unese u bazu ili izbaci iz baze favourites */}
        
       </div>
     </div>
   
        
  );
};

export default OneFile;
