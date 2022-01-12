import { Button, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const { REACT_APP_EMAIL } = process.env;

const TopBar = () => {
  return (
    <Container>
      <Nav
        navbar={true}
        className="d-flex justify-content-between align-items-center"
      >
        <Nav.Item>
          <Nav.Link href={REACT_APP_EMAIL}>Support Center</Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-flex justify-content-between gap-2">
          <Link to="/register" variant="primary">
            <Button variant="primary" size="sm">
              Register
            </Button>
          </Link>
          <Link to="/login" variant="primary">
            <Button variant="outline-primary" size="sm">
              Login
            </Button>
          </Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default TopBar;
