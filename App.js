import React from 'react';
import { Fragment } from 'react';
import { Navbar, Nav, Container, Card, Row, Col } from 'react-bootstrap';

const AppFragment = () => {
  return (
    <Fragment>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>My React App</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
        <Container className="mt-4">
          <h1>Welcome to My React App</h1>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src="images (4).jpg" />
                <Card.Body>
                  <Card.Title>IT</Card.Title>
                  <Card.Text>
                    This is the first card .
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="images (5).jpg" />
                <Card.Body>
                  <Card.Title>Food</Card.Title>
                  <Card.Text>
                    This is the second card .
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="images (6).jpg" />
                <Card.Body>
                  <Card.Title>Room</Card.Title>
                  <Card.Text>
                    This is the third card .
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default AppFragment;
