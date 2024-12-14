import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import {
  Home,
  Message,
  ChartBar,
  Building,
  UserGroup,
  Setting,
} from "../../../icon";
import "./navbar.css";
import FeedsModal from "../feeds/modal";

function Navigationbar() {
  return (
    <div className="small">
      <Navbar expand="lg" className="bg-body-white">
        <Container>
          <Navbar.Brand href="/">
            <img src="/images/logo.png" style={{ width: "60px" }} alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-5">
              <Nav.Link href="/" className="fw-bold">
                <Home />
              </Nav.Link>
              <Nav.Link href="/chat" className="me-5 fw-bold">
                <Message />
              </Nav.Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search anything"
                  className="rounded-pill text-black-50 search"
                  style={{ width: "300px" }}
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <Nav className="ms-5 fw-bold">
              <Nav.Link href="#about">
                <FeedsModal />
              </Nav.Link>
              <Nav.Link href="/analysis">
                <ChartBar />
              </Nav.Link>
              <Nav.Link href="/market">
                <Building />
              </Nav.Link>
              <Nav.Link href="/organization">
                <UserGroup />
              </Nav.Link>
              <Nav.Link href="#market">
                <Setting />
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <img
                src="/images/passportimg.png"
                className="passport"
                alt="#"
                style={{ width: "40px" }}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
