import React from "react"
import { Navbar } from "react-bootstrap"

const Nav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><img src="logo.png" alt=""/> PURITY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="facts.html">¿Sabías qué?</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="photoUpload.html">Toma tu foto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">¡Culturízate!</a>
            </li>
          </ul>
        </div>
    </Navbar>
  )
}

export default Nav;