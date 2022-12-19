import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../pages/PageCss/Navbar.css'
import Logo from '../betterLogo.png'

const top = () => {
    return(
  <Navbar>
  <Container>
  <Nav.Link href="/"><img src={Logo}width="80px" alt='logo'></img></Nav.Link>
<Nav className="me-auto">
  <Nav.Link href="/"><b>Home</b></Nav.Link>
  <Nav.Link href="/ship"><b>Shipping</b></Nav.Link>
  <Nav.Link href="/about"><b>About</b></Nav.Link>
  <Nav.Link href="/shop"><b>Shop</b></Nav.Link>
</Nav>
</Container>
</Navbar>
    )
};

export default top;
