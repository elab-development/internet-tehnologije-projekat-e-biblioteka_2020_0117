import React from "react";
import "../style/OneFile.css";

const OneFile = () => {
  return (
    // <div className="file-container">
      
    //   <div className="file-body">
    //     <h3 className="file-name">File name</h3>
    //     <h3 className="file-author">Author name</h3>
    //     <h3 className="file-genre">Genre name</h3>
    //     <p className="file-description">
    //       File description where we can read more details about it.
    //     </p>
    //     <button className="btn">Read book</button>
    //     <button className="btn">Like File</button>
    //      {/* kad se klikne na Like file treba da se promeni boja srca koje ce da se stavi i da 
    //      se unese u bazu ili izbaci iz baze favourites */}
        
    //   </div>
    // </div>
    <div class="file-container">
        <div class="file">
            <div class="file-body">
            <h3 class="file-name">File name</h3>
            <h3 class="file-author">Author name</h3>
            <h3 class="file-genre">Genre name</h3>
            <p class="file-description">
                File description where we can read more details about it.
             </p>
             <button class="btn read-btn">Read book</button>
            <button class="btn like-btn">Like File</button>
            </div>
        </div>
        </div>
        
  );
};

export default OneFile;
