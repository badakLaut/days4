import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/esm/Button';

function ComponentLima() {
  return (
    <Card>
        <Card.Header>Past Meetup</Card.Header>
        <CardGroup>
            <Card>
                <Card.Body>
                <Card.Title>27 November 2022</Card.Title>
                <Card.Text>
                    #11 JakartaJs meetup with kumparan
                </Card.Text>
                <Card.Text>
                    139 went
                </Card.Text>
                <Button variant="primary">View</Button>{' '}
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>28 November 2022</Card.Title>
                <Card.Text>
                    #12 JakartaJs meetup with blibli
                </Card.Text>
                <Card.Text>
                    139 went
                </Card.Text>
                <Button variant="primary">View</Button>{' '}
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>29 November 2022</Card.Title>
                <Card.Text>
                    #11 JakartaJs meetup with Hacktiv8
                </Card.Text>
                <Card.Text>
                    139 went
                </Card.Text>
                <Button variant="primary">View</Button>{' '}
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </CardGroup>
    </Card>
  );
}

export default ComponentLima;