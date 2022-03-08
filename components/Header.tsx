import React from 'react'
import Link from 'next/link'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>NextAuth Example</Navbar.Brand>
        </Link>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as="div">
              <Button>SignIn</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
