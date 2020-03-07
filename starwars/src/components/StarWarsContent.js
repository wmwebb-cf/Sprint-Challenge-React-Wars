import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';


const StarWarsContent = props => {

  return (
    <div>
      <Card>
        <CardBody>
          <h3><CardTitle>Name: {props.name}</CardTitle></h3>
          <CardText>{props.gender}</CardText>
          <CardText>{props.height}</CardText>
          <CardText>{props.mass}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default StarWarsContent;
