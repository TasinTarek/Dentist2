import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = (props) => {

    const {name, description, img} = props.service; 

    return (
        <>
           <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button>Book Appointment</Button>
        </Card.Body>
      </Card>
    </Col> 
        </>
    );
};

export default Service;