import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState, useEffect } from "react";
import axios from 'axios';
import "../style/Contact.css";
import MapComponent from './MapComponent';
import Advice from "./Advice";
import UseAdvice from './UseAdvice';

const Citat = () => {
  const [citat, setCitat] = useState('');

  useEffect(() => {
    const povuciCitat = async () => {
      try {
       const odgovor = await axios.get('https://api.quotable.io/random');
      
        
        
       
        if (odgovor.data && odgovor.data.content) {
          setCitat(odgovor.data.content);
        } else {
          console.error('Neispravan format odgovora API-ja:', odgovor.data);
        }
      } catch (error) {
        console.error('Greška pri povlačenju citata:', error);
      }
    };

    povuciCitat();
  }, [setCitat]);

  

  return (
    <div>
      <blockquote>{citat}</blockquote>
    </div>
  );
};




const Contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);  */

  return (
    <div>
       <Citat />
      {/*<div className="App">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={10}
          >
            <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
          </GoogleMap>
        )}
        </div>  */}
        <Advice />
        <MapComponent />

     
    </div>
  );
};  



export default Contact;



// const Contact = () => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
//   });
//   const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

//   return (
//     <div>
//     <div className="App">
//       {!isLoaded ? (
//         <h1>Loading...</h1>
//       ) : (
//         <GoogleMap
//           mapContainerClassName="map-container"
//           center={center}
//           zoom={10}
//         >
//           <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
//         </GoogleMap>
//       )}
//     </div>
//         {/* quote ide ovde */}





//     </div>
//   );
// };

// export default Contact;