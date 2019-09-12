import React from "react";

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const APODCard = (props) => {

    console.log(props);
  return (
    // <div className="nasa-photo">
    //   <h2>Title: {props.apod.title}</h2>
    //   <p>Date: {props.apod.date}</p>
    //   <img src={props.apod.hdurl}/>
    //   <p>Explanation: {props.apod.explanation}</p>
    // </div>

    <div className='APOD-card'>
      <Card>
        <CardImg top width="100%" src={props.apod.hdurl} alt="Nasa APOD" />
        <CardBody>
          <CardTitle>Title: {props.apod.title}</CardTitle>
          <CardSubtitle>Date: {props.apod.date}</CardSubtitle>
          <CardText>Explanation: {props.apod.explanation}</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </div>

  );
};

export default APODCard;
