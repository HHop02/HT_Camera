import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";  // If you are using React Router for navigation
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";  // For social media icons
import "../assets/styles/index.css"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="text-center text-md-left mb-4 mb-md-0">
            <h5>HoangTuanCamera</h5>
            <p>
              HoangTuanCamera is your one-stop shop for all things photography.
              Explore our wide selection of cameras, lenses, and accessories.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="text-center text-md-left mb-4 mb-md-0">
            <h5>About Us</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="text-light">About</Link>
              </li>
              <li>
                <Link to="#" className="text-light">Contact</Link>
              </li>
              <li>
                <Link to="#" className="text-light">Products</Link>
              </li>
              <li>
                <Link to="#" className="text-light">FAQ</Link>
              </li>
            </ul>
          </Col>

          {/* Contact Info Section */}
          <Col md={4} className="text-center text-md-left">
            <h5>Contact Us</h5>
            <p>
              Email: <a href="mailto:info@hoangtuan.com" className="text-light">info@hoangtuan.com</a><br />
              Phone: +123 456 7890<br />
              Address: 123 Camera Street, Hanoi, Vietnam
            </p>

            {/* Social Media Icons */}
            <div className="d-flex justify-content-center justify-content-md-center">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="my-4" />

        {/* Copyright Section */}
        <Row>
          <Col className="text-center">
            <p>HoangTuanCamera &copy; {currentYear} | All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
