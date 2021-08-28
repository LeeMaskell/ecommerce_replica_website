import us_flag from '../assests/header_images/us_flag.png';

const Header = () => {
    return ( 
        <div className="header">
            <div className="header__top-bar">
                <div className="header__top-bar--actions">
                    <h5 className="right-border-gray">FIND A DEALER</h5>
                    <img src={us_flag} alt="US flag"></img>
                    <h5 title="Feature Unavailable">UNITED STATES</h5>
                </div>
            </div>
        </div>
     );
}
 
export default Header;