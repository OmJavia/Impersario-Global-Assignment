import "./Footer.css";
import icon from "../../assets/images/real.png"

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section shop-title">
          <h2>Everest Group </h2>
          </div>
  
          <div className="footer-section links">
            <div className="footer-links">
              
            <ul style={{width:"150px"}}>
              <li><h4> Everest Dignity </h4></li>
              <li><h4> Everest Pentagon</h4></li>
              <li><h4> Everest Trinity</h4></li>
              <li><h4> Everest Hub</h4></li>
            </ul>
            </div>
          </div>
  
          <div className="footer-section links">
            <ul style={{width:"100px"}}>
              <li><h4> Contact Us</h4></li>
              <li>Vadodara</li>
              <li>Gujarat</li>
              <li>India</li>
            </ul>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
