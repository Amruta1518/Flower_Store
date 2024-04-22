import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Aditya from '../img/Aditya.png';

export default function FAQ() {
  return (
    <div className="d-flex">
      <Card style={{ width: '18rem', marginRight: '150px' }}>
        <Card.Img variant="top" src={Aditya} />
        <Card.Body>
          <Card.Title>Aditya Reddy</Card.Title>
          <Card.Text>
            For Service Related Queries
            Contact No. 8080214930
          </Card.Text>
          <Button variant="primary" href="https://www.linkedin.com/in/aditya-reddy-5797741b3/" target="_blank">
          For Linkedin
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginRight: '150px' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginRight: '150px' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
