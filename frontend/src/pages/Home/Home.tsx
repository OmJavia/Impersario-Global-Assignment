import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../validate/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import icon1 from "../../assets/images/icon1.png"
import icon2 from "../../assets/images/icon2.png"
import icon3 from "../../assets/images/icon3.png"
import icon4 from "../../assets/images/icon4.png"

const Home = () => {
  const { logout } = useAuth();
  const [ user , setUser] = useState<{ id: string; username: string } | null>(null);
  const HoverImage = ({ icon1, icon4, altText }: { icon1: string; icon4: string; altText: string }) => {
    const [currentImg, setCurrentImg] = useState(icon1);
  
    return (
      <img
        src={currentImg}
        alt={altText}
        onMouseEnter={() => setCurrentImg(icon4)}
        onMouseLeave={() => setCurrentImg(icon1)}
        style={{ width: "50px", height: "", transition: "0.3s ease-in-out" }}
      />
    );
  };

  useEffect(() => {
    axios.get("http://localhost:5000/auth/me", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => setUser(res.data as { id: string; username: string }))
      .catch(() => logout());
  }, [logout]);

  return (
    <div className="home-container">
      <Navbar />

      {/* Hero Section */}
      <header className="hero">
        <div className="overlay" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="hero-content">
            <h2>Find Your Dream Home </h2>
            <p>
            Explore the best properties at unbeatable prices.</p>
            <button className="cta-button">Search Properties</button>
          </div>
        </div>
      </header>

      {/* Feature Section */}
      <section className="features">
        <h1 className="section-title">Discover Properties That Match Your Lifestyle</h1>
        <div className="feature-cards">
          <div className="feature-card">
          <HoverImage
        icon1={icon1}
        icon4={icon4}
        altText="Hover to change"
      />
            <p>Trending <span style={{fontWeight: "bold"}}>Properties</span></p>
          </div>
          <div className="feature-card">
            <img src={icon2} alt="Feature 2" />
            <p>New <span style={{fontWeight: "bold"}}>Listings</span></p>
          </div>
          <div className="feature-card">
            <img src={icon3} alt="Feature 3" />
            <p>Investment <span style={{fontWeight: "bold"}}>Opportunities</span></p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="details">
  <div className="details-container">
    {/* Left Section with Title & Button */}
    <div className="details-text">
      <h1>
      Find Your Perfect Property <br/><span className="highlight">Today</span> 
      </h1>
      <button className="detail-button">Get Started</button>
    </div>

    {/* Right Section with Boxes */}
    <div className="details-grid">
      <div className="detail-box">
        <h3>01</h3>
        <p className="space">Easy Search</p>
      </div>
      <div className="detail-box highlight-box">
        <h3>02</h3>
        <p className="space"><span className="bold">Verified </span>Listings</p>
      </div>
      <div className="detail-box large-box">
        <h3>03</h3>
        <p className="space">Expert <span className="bold">Support</span> </p>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;