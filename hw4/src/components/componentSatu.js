import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/esm/Image';

function ComponentSatu() {
  return (
    <Card>
      <Card.Header>Members see all</Card.Header>
        <Row>
            <Col xs={2} md={4}>
                <Image src="https://qr.eraspace.com/_next/static/images/icon-eraspace-0180901e7d8c8851a1b59b00f94898cb.png" rounded />
            </Col>
            <Col>
            <Card>
              <Card.Body >
                <Card.Title>Hactiv8 Meetup</Card.Title>
                <Row>
                  <Col xs={4}>
                    <Card.Text>
                      Location
                    </Card.Text>
                    <Card.Text>
                      Member
                    </Card.Text>
                    <Card.Text>
                      Organizer
                    </Card.Text>
                  </Col>
                  <Col xs={8}>
                  <Card.Text>
                      Jakarta, Indonesia
                    </Card.Text>
                    <Card.Text>
                      1.078
                    </Card.Text>
                    <Card.Text>
                      Adhi Wiranata
                    </Card.Text>
                  </Col>
                </Row>
                <Button variant="primary">Join us</Button>{' '}
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Card>
  );
}

export default ComponentSatu;