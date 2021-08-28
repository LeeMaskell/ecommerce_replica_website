const FooterBanner = () => {
    return ( 
        <div className="footer-banner">
            <h2 className="footer-banner__heading">SIGN UP FOR NEWS & OFFERS</h2>
            <input type="email" placeholder="EMAIL ADDRESS" name="email"></input>
            <button title="Feature Unavailable" className="subscribe-btn">SUBSCRIBE</button>
            <div className="footer-banner__border"><h6>no content</h6></div>
        </div>
     );
}
 
export default FooterBanner;