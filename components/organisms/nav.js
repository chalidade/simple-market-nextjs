import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/router'

export default function navigation() {
  const router = useRouter();

  return (
    <>
      <Navbar style={{ background: "#0086CF", padding: "10px 50px" }}>
        <Navbar.Brand onClick={() => router.push('/')}>
          <img src="/client/nav_logo.svg" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="text-light ml-3 mr-3" href="#home">
            Trends
          </Nav.Link>
          <Nav.Link className="text-light ml-3 mr-3" href="#features">
            Explore
          </Nav.Link>
          <Nav.Link className="text-light  ml-3 mr-3" href="#pricing">
            Collection
          </Nav.Link>
          <Nav.Link className="text-light  ml-3 mr-3" href="#pricing">
            About Us <i className="fa fa-arrow-right text-light"></i>
          </Nav.Link>
        </Nav>
        <Form inline>
          <div className="row">
            <div className="col-2" onClick={() => router.push('/product/cart')}>
              <img src="/client/nav_cart.svg" />
            </div>
            <div className="ml-4 col-2">
              <img src="/client/nav_user.svg" />
            </div>
          </div>
        </Form>
      </Navbar>
    </>
  );
}
