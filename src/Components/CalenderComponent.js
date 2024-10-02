import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CalenderGrid from "./CalenderGrid";

// Reusable Schedule Tag Component
const ScheduleTag = ({ variant, children }) => (
  <Button variant={variant} className="tag me-2 mb-2">
    {children}
  </Button>
);

// Reusable Music Item Component
const MusicItem = ({ label, id }) => (
  <div className="music-item border rounded p-2 mb-2">
    <div className="d-flex align-items-center justify-content-between">
      <label htmlFor={id} className="me-2">
        {label}
      </label>
      <div className="d-flex align-items-center">
        <Form.Check type="switch" id={id} className="me-2" />
        <i className="bi bi-trash" title="Delete"></i>
      </div>
    </div>
  </div>
);

const CalendarComponent = () => {
  const [googleCalendarEnabled, setGoogleCalendarEnabled] = useState(false);
  const [miniCalendarValue, setMiniCalendarValue] = useState(new Date());

  const handleGoogleCalendarToggle = () => {
    setGoogleCalendarEnabled(!googleCalendarEnabled);
  };

  return (
    <Container fluid className="mt-4">
      <Card>
        <Card.Body>
          <Row className="align-items-center justify-content-between mb-4">
            <Col md={8}>
              <h2>Calendar</h2>
            </Col>
            <Col md={4} className="text-md-end text-sm-start">
              <div className="d-flex align-items-center justify-content-end">
                <i className="bi bi-lock me-2"></i>
                <label htmlFor="google-calendar-switch" className="me-2">
                  <b>Google Calendar</b>
                </label>
                <Form.Check
                  type="switch"
                  id="google-calendar-switch"
                  checked={googleCalendarEnabled}
                  onChange={handleGoogleCalendarToggle}
                />
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="align-items-center justify-content-between mb-3">
            <Col md={8} className="d-flex align-items-center">
              <div className="arrow-box me-3">
                <i className="bi bi-chevron-left" aria-label="Previous"></i>
              </div>

              <h5 className="mb-0 me-3">May 27, 2022 Today</h5>

              <div className="arrow-box ms-3">
                <i className="bi bi-chevron-right" aria-label="Next"></i>
              </div>

              <div className="btn-group btn-group-sm ms-4">
                <Button variant="warning">Day</Button>
                <Button variant="outline-secondary">Week</Button>
                <Button variant="outline-secondary">Month</Button>
              </div>

              <Button variant="warning" size="sm" className="ms-5">
                + Schedule Session
              </Button>
            </Col>
          </Row>

          <Row>
            <Col md={8}>
              <CalenderGrid />
            </Col>

            <Col md={4}>
              <Calendar
                onChange={setMiniCalendarValue}
                value={miniCalendarValue}
              />

              <h5 className="mt-3">Schedule</h5>
              <div className="d-flex flex-wrap align-items-center schedule-tags">
                {/* Schedule Tags */}
                <ScheduleTag variant="secondary">Listen</ScheduleTag>
                <ScheduleTag variant="warning">Learn</ScheduleTag>
                <ScheduleTag variant="info">Work-Out</ScheduleTag>
                <ScheduleTag variant="success">Study</ScheduleTag>
                <ScheduleTag variant="warning">Practice</ScheduleTag>
                <ScheduleTag variant="info">Other</ScheduleTag>
                <ScheduleTag variant="info">Work-Out</ScheduleTag>
                <ScheduleTag variant="success">Study</ScheduleTag>
                <ScheduleTag variant="secondary">Listen</ScheduleTag>
                <ScheduleTag variant="warning">Learn</ScheduleTag>
                <ScheduleTag variant="info">Work-Out</ScheduleTag>
                <ScheduleTag variant="success">Study</ScheduleTag>
                <ScheduleTag variant="warning">Practice</ScheduleTag>
                <ScheduleTag variant="info">Other</ScheduleTag>
                <ScheduleTag variant="info">Work-Out</ScheduleTag>

                <div className="d-flex align-items-center me-2 mb-2">
                  <div className="arrow-box me-2">
                    <i className="bi bi-chevron-left" aria-label="Previous"></i>
                  </div>
                  <div className="arrow-box">
                    <i className="bi bi-chevron-right" aria-label="Next"></i>
                  </div>
                </div>
              </div>

              <h5 className="mt-3">Music</h5>
              <div className="music-playlist-container">
                {/* Music Items */}
                <MusicItem label="Ronald Rich Playlist" id="music-switch-1" />
                <MusicItem label="Chloe McKinney Hits" id="music-switch-2" />
              </div>

              <Button className="mt-3" variant="warning">
                <i className="bi bi-share"></i> Share
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CalendarComponent;
