import '../styles/navbar.css';
import Gibson_header_logo from '../assests/header_images/Gibson_header_logo.png';
import { Link } from 'react-router-dom';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {
    function hideMenu(){
        let menuOpen = document.querySelector('#toggle').checked;
        if(menuOpen = true){
          document.querySelector('#toggle').checked = false;
        }
        }
    return (
        <div className="navbar">
            <div className="navbar__flex-container">
                <img id="gibson_logo" src={Gibson_header_logo} alt="Gibson Guitars logo"></img>
                <div className="navbar__primary-nav">
                    <ul className="navbar__primary-nav--menu-item">
                        <Link to="/"><li>ELECTRIC</li></Link>
                        <Link  to="/acoustic"><li>ACOUSTIC</li></Link>
                        <li title="Feature Unavailable">MERCHANDISE</li>
                        <li title="Feature Unavailable">ACCESSORIES</li>
                        <li title="Feature Unavailable">SERVICING</li>
                        <li title="Feature Unavailable">GIBSON TV</li>
                    </ul>
                   
                </div>
                
                {/* responsive 'hamburger' navigation */}
                <div className="navbar__responsive-nav">
                    <label for="toggle">&#9776;</label>
                    <input type="checkbox" id="toggle" />
                    <div className="navbar__responsive-nav--menu">
                        <Link onClick={hideMenu} class="responsive-link" to="/">ELECTRIC</Link>
                        <Link onClick={hideMenu} class="responsive-link" to="/acoustic">ACOUSTIC</Link>
                        <Link onClick={hideMenu} class="responsive-link" to="/cart">CART</Link>
                    </div>
                </div>

                <Link to="/cart" className="cart-icon"><FontAwesomeIcon icon={faShoppingCart} /></Link>
            </div>
        </div>
    );
}

export default Navbar;