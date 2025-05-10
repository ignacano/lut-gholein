import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css"

function navbar() {
return (
    <div className='menuNavbar'>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        <Navbar.Brand href="/landing">Lut Gholein</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/home">Inicio</Nav.Link>
            <Nav.Link href="https://discord.gg/R4xXZCNK" target="_blank" rel="noopener noreferrer">Discord</Nav.Link>            
            <Nav.Link href="/aboutUs">Contacto</Nav.Link>
            <NavDropdown title="Próximamente" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">Campañas</NavDropdown.Item>
            <NavDropdown.Item href="#">Información general</NavDropdown.Item>
            <NavDropdown.Item href="#">Aportes</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Comunidad</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Nav>
            <Nav.Link eventKey={2} href="/legal">
            REGLAS
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>
);
}

export default navbar;