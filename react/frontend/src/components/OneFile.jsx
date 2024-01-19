import React from "react";
import "../style/OneFile.css";
import { FcLike } from "react-icons/fc";
import ReactState, { useState, useEffect } from 'react';
import FileViewer from './FileViewer';
    
  

const OneFile = ({file, handleReadBook}) => {

  
  const [currentColor, setCurrentColor] = useState('white');
  const [showFileViewer, setShowFileViewer] = useState(false);

  const handleReadBookLocal = () => {
    setShowFileViewer(true);
    handleReadBook(); // Call the callback from the parent component
  };
  const changeColor = () => {
    const newColor = currentColor === 'red' ? 'white' : 'red';
       setCurrentColor(newColor);
       //treba dodati i da se ubacuje u bazu ili izbacuje iz baze u tabeli favBooks u zavisnosti od boje

  };

  // const handleReadBook = () => {
  //   //postaje true kada se klikne na dugme Read more
  //   setShowFileViewer(true);
    //if(showFileViewer)
    //{
    //<FileViewer filename={file.name}/>;
    // console.log('treba da cita');
    // //}
    // };

  
  // const readFileText = () => {
  //   // Dodajemo funkciju za dobijanje teksta fajla
  //   fetch(`http://localhost/api/get-text`)
  //     .then((response) => response.json())
  //     .then((file) => {
  //       setFileText(file.data);
  //     })
  //     .catch((error) => console.error("Error:", error));
  // };

  // useEffect(() => {
  //   // Koristimo useEffect da pozovemo funkciju za dobijanje teksta kada se komponenta mountuje
  //   readFileText();
  // }, []);

  // return (
  //    <div className="file-container">
      
  //      <div className="file-body">
  //        <h3 className="file-name">{file.fileName}</h3>
  //        <h3 className="file-author">{file.authorName}</h3>
  //        <h3 className="file-genre">{file.genreName}</h3>
  //        <p className="file-description">
  //          {file.fileDescription}
  //        </p>
  //        <button className="btn" onClick = {handleReadBookLocal}>Read book</button>
  //        {showFileViewer && <FileViewer filename={file.fileName} />}
         
  //        <button className={`hearthBtn ${currentColor === 'red' ? 'red' : 'white'}`} onClick={changeColor}>
  //         <FcLike style={{ color: currentColor === 'red' ? 'white' : 'red' }} />
  //        </button>
  //         {/* kad se klikne na Like file treba da se promeni boja srca koje ce da se stavi i da 
  //         se unese u bazu ili izbaci iz baze favourites */}
  //         {/* Prikazi FileViewer komponentu ako je showFileViewer postavljeno na true */}
        
  //      </div>
  //    </div>
   
        
  // );
  return (
    <div className="file-container">
      <div className="file-body">
      <h3 className="file-name">{file.fileName}</h3>
          <h3 className="file-author">{file.authorName}</h3>
          <h3 className="file-genre">{file.genreName}</h3>
          <p className="file-description">
            {file.fileDescription}
          </p>
        <button className="btn" onClick={handleReadBookLocal}>
          Read book
        </button>
        {showFileViewer && <FileViewer filename={file.fileName} />}
        {/* ... (rest of your component JSX) */}
        <button
          className={`hearthBtn ${currentColor === 'red' ? 'red' : 'white'}`}
          onClick={changeColor}
        >
          <FcLike style={{ color: currentColor === 'red' ? 'white' : 'red' }} />
        </button>
      </div>
    </div>
  );

};

export default OneFile;
