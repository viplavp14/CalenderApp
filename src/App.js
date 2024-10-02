import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import TopComponent from "./Components/TopComponent";
import SideBar from "./Components/SideBar";
import MusicPlayer from "./Components/MusicPlayer";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import CalendarApp from "./Components/CalenderComponent";
import "./App.css";
import CalendarGrid from "./Components/CalenderGrid";

function App() {
  return (
    <Router>
      <div className="app-layout">
       <TopComponent />
       <Container fluid className="content-wrapper">
          <Row className="content-row">
            <Col xs={2} className="sidebar-container">
              <SideBar />
            </Col>
            <Col xs={10} className="main-container">
              <NavBar />
              
                <CalendarApp />
               
             
            </Col>
          </Row>
        </Container>
        <Footer />
        <MusicPlayer />
      </div>
    </Router>
  );
}
export default App;
