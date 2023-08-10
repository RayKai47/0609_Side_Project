import { Outlet,Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import styled from 'styled-components'
import { ShoppingCart } from 'phosphor-react';

const Header = () => {

  // const ButtonSearch = styled(Button)`
  //   .btn{
  //     font-size: 12px;
  //   }
  // `
  return (
    <>
      <Navbar sticky="top" expand="sm" className="header_nav">
        <Container fluid>
          <Link className="navbar-brand" to="/">極度紳士</Link>
          <Navbar.Toggle aria-controls="offcanvaOpen" />
          <Navbar.Offcanvas
            id="offcanvaOpen"
            aria-labelledby="offcanvaOpen"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                極度紳士
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/category">Suits</Link>
                <Link className="nav-link" to="/category">Clothes</Link>
                <Link className="nav-link" to="/category">Jeans</Link>
                <Link className="nav-link" to="/category">Shoes</Link>
                <Link className="nav-link" to="/shopItem">單品頁面</Link>
                <Link className="nav-link" to="/shopCart">購物車</Link>
                <Link className="nav-link" to="/shopCart2">購物車2</Link>
                {/* <NavDropdown
                  title="Dropdown"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="搜尋商品..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className="module">
        <Outlet/>
        <Link className="cart-fix" path="/shopCart"><ShoppingCart size={32}/></Link>
      </div>
    </>
  )
};

export default Header;