import React from "react";
import "../style/OneFile.css";
import { FcLike } from "react-icons/fc";
import ReactState, { useState, useEffect } from 'react';
import FileViewer from './FileViewer';
import axios from "axios";
    
  

const OneFile = ({file, handleReadBook,currentUser, loadFavourites}) => {

  
  const [currentColor, setCurrentColor] = useState('white');
  const [showFileViewer, setShowFileViewer] = useState(false);

  const handleReadBookLocal = () => {
    
    if (currentUser.date_payment_valid === null || new Date(currentUser.date_payment_valid).getTime() < new Date().getTime()) {
     
      console.log(currentUser.date_payment_valid);
      alert("Give me your money first.");
    } else {
      
      console.log(new Date());

      setShowFileViewer(true);
      handleReadBook(); 
    }
  };
  const changeColor = () => {
    const newColor = currentColor === 'red' ? 'white' : 'red';
       setCurrentColor(newColor);
      

       var user_id = currentUser.id;
       var file_id = file.file_id;
       console.log("User_id: " , user_id, " file_id: ", file_id);

       const requestData = {
        file_id: file_id,
        user_id: user_id,
      };


    if(currentColor == 'white'){
      //posalji zahtev da se doda u bazu kod ovog korisnika id ovog fajla
      axios.post('http://127.0.0.1:8000/api/storeFavBook', requestData)
      .then(response => {
        console.log("Response data: ",response.data); 
      })
      .catch(error => {
        console.error('Error saving favorite book:', error);
       
      });

    }else{
      //posalji zahtev da se izbaci iz baze kod ovog korisnika id ovog fajla
      axios.delete(`http://127.0.0.1:8000/api/destroyFavBook/`,  {
        params: {
          file_id: file_id,
          user_id: user_id,
        }},)
        .then(response => {
          console.log("Response data: ",response.data); 
         
        })
        .catch(error => {
          console.error('Error deleting favorite book:', error);
          
        });
    }
        //ponovo ucitaj omiljene knjige za korisnika
        loadFavourites();


  };

  
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