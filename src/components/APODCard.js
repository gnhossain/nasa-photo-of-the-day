import React from "react";

import {
  Card, CardImg, CardText, CardBody, CardFooter,
  CardTitle, CardSubtitle
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
        
       <CardTitle>Title: {props.apod.title}</CardTitle>
       <CardSubtitle>Date: {props.apod.date}</CardSubtitle>
       <CardBody>
       <CardImg width="100%" src={props.apod.hdurl} alt= "Nasa APOD" />
       </CardBody>
       <CardText>Explanation: {props.apod.explanation}</CardText>
       <CardFooter>Copyright:{props.apod.copyright}</CardFooter>
          {/* <CardLink href="#">Another Link</CardLink>
        */}
        </Card>

      
    </div>

  );
};

export default APODCard;
