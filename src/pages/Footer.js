import { useOutlet ,Link } from "react-router-dom";
import Logo from '../betterLogo.png'
import '../pages/PageCss/Footer.css'

const Bottom = () => {
  return (
    <>
      <div>
      <img src={Logo} id="Image" alt="Logo"></img>
        <ul className="container">
        <Link to="/" className="item1">Home</Link> 
        <Link to="/About" className="item1">About</Link>
        <Link to="/Shop" className="item1">Shop</Link>
        <Link to="/Ship" className="item1">Shipping</Link>
      
        </ul>
      </div>

      <useOutlet />
    </>
  )
};

export default Bottom;