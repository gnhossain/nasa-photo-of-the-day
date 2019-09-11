import React, { useState, useEffect } from "react";
import APODCard from "./APODCard";
import axios from "axios";

export default function APODList() {
  // NOTE: The value given to useState() must be of the same type as your value is expected to be
    const [photo, setPhoto] = useState([]);
    const [photo2, setPhoto2] = useState([]);

    useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(response => {
        const photo = response.data;
        console.log("NASA APOD", photo);
        setPhoto(photo);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
    }, []);
    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`)
          .then(response => {
            const photo2 = response.data;
            console.log("NASA APOD", photo2);
            setPhoto2(photo2);
          })
          .catch(error => {
            console.log("The data was not returned", error);
          });
        }, []);
        
    
    return (
        <div className="APOD">
        
            <APODCard apod={photo}/>
            <APODCard apod={photo2}/>
        </div>
    );
        
}