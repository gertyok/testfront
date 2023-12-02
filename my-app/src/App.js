import './App.css';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Catalog from './components/Catalog';
import PostData from './components/PostData';


function App() {
  const [currentSection, setCurrentSection] = useState('catalog');
  const handleNavClick = (section) => {
    setCurrentSection(section);
  };
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="consulting-navbar consulting-nav">
      <Container fluid>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
      >
      </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="consulting-nav">
            <Nav.Link className="consulting-nav a" href="#catalog" onClick={() => handleNavClick('catalog')}>Каталог</Nav.Link>
            <Nav.Link className="consulting-nav a" href="#postProduct" onClick={() => handleNavClick('postProduct')}>Добавить продукт</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {currentSection === 'catalog' && <Catalog />}
    {currentSection === 'postProduct' && <PostData />}
  </div> 
  );
}

export default App;