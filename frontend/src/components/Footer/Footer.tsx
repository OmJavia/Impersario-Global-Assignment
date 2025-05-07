import "./Footer.css";
import icon from "../../assets/images/real.png"

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section shop-title">
          <img src={icon} 
        alt="Real Estate Logo" />
          </div>
  
          <div className="footer-section links">
            <div className="footer-links">
            <ul>
              <li>sit amet</li>
              <li>ipsum</li>
              <li>ut labore</li>
              <li>consectetur</li>
            </ul>
            </div>
          </div>
  
          <div className="footer-section links">
            <ul>
              <li>sit amet</li>
              <li>ipsum</li>
              <li>ut labore</li>
              <li>consectetur</li>
            </ul>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
