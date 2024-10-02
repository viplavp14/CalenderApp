import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <Container>
                <Row className="text-center">
                    <Col md={12}>
                        <ul className="list-inline">
                            <li className="list-inline-item"><Link to="/about">About</Link></li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item"><Link to="/help">Help</Link></li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item"><Link to="/terms">Terms & conditions</Link></li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item"><Link to="/privacy">Privacy</Link></li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item"><Link to="/copyright">Copyright policy</Link></li>
                            <li className="list-inline-item">|</li>
                            <li className="list-inline-item"><Link to="/contact">Contact us</Link></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="text-center mt-2">
                    <Col md={12}>
                        <p>&copy; Curioushit 2023 - all rights reserved</p>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col md={12}>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <Link to="#"><i className="bi bi-facebook"></i></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#"><i className="bi bi-twitter"></i></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#"><i className="bi bi-linkedin"></i></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#"><i className="bi bi-instagram"></i></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#"><i className="bi bi-tiktok"></i></Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
