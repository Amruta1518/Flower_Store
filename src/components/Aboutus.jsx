import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Aditya from '../img/Aditya.png';
import Amruta from '../img/amruta.jpeg';
import Chirayu from '../img/Chirayu.jpeg'

export default function Aboutus() {
  return (
    <div className="d-flex">
      <Card style={{ width: '18rem', marginRight: '150px' }}>
        <Card.Img variant="top" src={Aditya} />
        <Card.Body>
          <Card.Title>Aditya Reddy</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" href="https://www.linkedin.com/in/aditya-reddy-5797741b3/" target="_blank">
          For Linkedin
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginRight: '150px' }}>
        <Card.Img variant="top" src={Amruta} />
        <Card.Body>
          <Card.Title>Amruta Sarode</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" href= "http://www.linkedin.com/in/amruta-sarode-a399a628a">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginRight: '150px' }}>
        <Card.Img variant="top" src={Chirayu} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" href="https://www.linkedin.com/in/chirayu-vibhute-572a49128?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
