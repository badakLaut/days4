import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function ComponentEmpat() {
  return (
    <Card>
        <Card.Header>Members see all</Card.Header>
        <Row>
            <Col xs={6} md={4}>
                <Image src="https://play-lh.googleusercontent.com/3gDuQhFygehwtXb8gKj7XuMFILPeg-wbnwTunlTA8HjRQA5ptj80i-QW7bs_nA4GJf5K=w240-h480-rw" circle />
            </Col>
            <Col>
                <Card.Title>Organizer</Card.Title>
                <Card.Text>
                    Ardhi wiranata 
                </Card.Text>
            </Col>
        </Row>
    </Card>
  );
}

export default ComponentEmpat;