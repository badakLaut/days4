import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function navbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Qtemu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#create-meetup">Create Meetup</Nav.Link>
            <Nav.Link href="#explore">Explore</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;