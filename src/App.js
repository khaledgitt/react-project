import './App.css';
import {Navbar, Nav, NavDropdown, Container, Form, Button, ListGroup, ListGroupItem, Card} from 'react-bootstrap';
function App() {
  return (
    <div>
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Nakou3-Brothers</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    <>
  <Button variant="outline-primary">Primary</Button>{' '}
  <Button variant="outline-secondary">Secondary</Button>{' '}
  <Button variant="outline-success">Success</Button>{' '}
  <Button variant="outline-warning">Warning</Button>{' '}
  <Button variant="outline-danger">Danger</Button>{' '}
  <Button variant="outline-info">Info</Button>{' '}
  <Button variant="outline-light">Light</Button>{' '}
  <Button variant="outline-dark">Dark</Button>
</>
    <Form className="khaleeed">
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
  </div>
  );
}

export default App;
