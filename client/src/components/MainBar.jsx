import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MainBar = () => (
  <Navbar bg="light" expand="lg" collapseOnSelect className="mx-1">
    <Navbar.Brand>
      <Link to="/">
        <img src="" alt="Dumps" />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mx-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        {/* <Link to="/home">
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link to="/vendors">
          <Nav.Link href="#action2">Vendors</Nav.Link>
        </Link> */}
        <Nav.Link href="#action2">Home</Nav.Link>
        <Nav.Link href="#action2">Vendor</Nav.Link>
        <Nav.Link href="#action2">Guarantee</Nav.Link>
        <Nav.Link href="#action2">Contact us</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default MainBar;
