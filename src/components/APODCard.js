import React from "react";

const APODCard = (props) => {

    console.log(props);
  return (
    <div className="nasa-photo">
      <h2>Title: {props.apod.title}</h2>
      <p>Date: {props.apod.date}</p>
      <img src={props.apod.hdurl}/>
      <p>Explanation: {props.apod.explanation}</p>
    </div>
  );
};

export default APODCard;
