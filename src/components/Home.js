import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css'; // Custom CSS for Home component

// Import images
import aboutImage from '../assets/images/posterdayPic.jpg';
import resumeImage from '../assets/images/graduationPic.jpg';
import contactImage from '../assets/images/eidPic.jpg';
import blogImage from '../assets/images/background.jpg';
import ballotImage from '../assets/images/voteMamun.png';

const Home = () => {
  return (
    <div>
      <section className="hero-section text-center">
        <Container className="hero-container">
          <h1 className="hero-title">WELCOME TO MY WEBSITE</h1>
          <p className="hero-subtitle">Md Abdullah Al Mamun</p>
        </Container>
      </section>


{/* Election Message Section */}
<section className="election-section py-5">
  <Container>
    <Row className="justify-content-center">
      <Col lg={11} xl={10}>
        <div className="election-wrapper">

          {/* Top Heading */}
          <div className="election-header text-center mb-5">
            <span className="election-badge">Beds SU Elections</span>
            <h2 className="election-title mt-3">Election Message</h2>
            <p className="election-subtitle mx-auto">
              Your vote helps choose who represents students.
              <br />
              <strong>Voting is open until 13 March at 12pm.</strong>
            </p>
          </div>

          {/* Main Feature Card */}
          <Card className="election-feature-card border-0 shadow-lg overflow-hidden">
            <Card.Body className="p-0">
              <Row className="g-0 align-items-stretch">

                {/* Left Content */}
                <Col lg={7}>
                  <div className="election-feature-content p-4 p-md-5">
                    <p className="feature-label mb-2">Candidate Introduction</p>
                    <h3 className="feature-heading">Hello everyone</h3>

                    <p className="feature-text">
                      My name is <strong>Mamun</strong>.
                      I’m running for <strong>Student Campaign Lead (International)</strong>
                      in the Student Union Elections.
                    </p>

                    <div className="feature-highlight mt-4">
                      <h5 className="mb-2">My Promise</h5>
                      <p className="mb-0">
                        If elected, I promise to spend every day of my
                        <strong> 365-day term </strong>
                        listening to you and turning your concerns into
                        <strong> real action</strong>.
                      </p>
                    </div>

                    <div className="vote-cta mt-4">
                      <h4 className="mb-2">Vote Mamun</h4>
                      <p className="mb-3">Student Campaign Lead – International</p>
                      <Button
                        variant="primary"
                        size="lg"
                        className="vote-btn"
                        href="https://www.bedssu.co.uk/vote"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Vote Here
                      </Button>
                    </div>
                  </div>
                </Col>

                {/* Right Image */}
                <Col lg={5}>
                  <div className="election-image-wrap">
                    <img
                      src={ballotImage}
                      alt="Vote Mamun Ballot Poster"
                      className="election-ballot-image"
                    />
                    <div className="image-overlay-badge">
                      <span>Support Mamun</span>
                    </div>
                  </div>
                </Col>

              </Row>
            </Card.Body>
          </Card>

          {/* Goals */}
          <div className="mt-5">
            <div className="text-center mb-4">
              <h3 className="section-title">My Goals</h3>
              <p className="section-subtitle">
                What I will work towards if elected
              </p>
            </div>

            <Row className="g-4">
              <Col md={4}>
                <Card className="goal-card border-0 h-100 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="goal-icon">🌍</div>
                    <h5 className="goal-title">Better Career Opportunities</h5>
                    <p className="goal-text mb-0">
                      Supporting students with better access to career development,
                      opportunities, and future success.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="goal-card border-0 h-100 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="goal-icon">🎓</div>
                    <h5 className="goal-title">A Better Student Life</h5>
                    <p className="goal-text mb-0">
                      Creating a more enjoyable, engaging, and rewarding university
                      experience for all students.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="goal-card border-0 h-100 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="goal-icon">🗣</div>
                    <h5 className="goal-title">Your Voice Heard</h5>
                    <p className="goal-text mb-0">
                      Making sure student concerns are heard, respected, and turned
                      into meaningful action.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          {/* About Me */}
          <Card className="about-election-card border-0 shadow-sm mt-5">
            <Card.Body className="p-4 p-md-5">
              <div className="text-center mb-4">
                <h3 className="section-title">About Me</h3>
                <p className="section-subtitle">
                  I have been part of the University community for over 5 years
                  as both a student and a staff member.
                </p>
              </div>

              <Row className="g-3">
                <Col md={6}>
                  <div className="about-item">
                    <span className="about-emoji">🎓</span>
                    <span>Computer Science Graduate</span>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="about-item">
                    <span className="about-emoji">🎓</span>
                    <span>Currently studying MSc Cyber Security</span>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="about-item">
                    <span className="about-emoji">💼</span>
                    <span>Worked with the University's ICT Department for 2 years</span>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="about-item">
                    <span className="about-emoji">💼</span>
                    <span>Working with the Student Union for 3+ years</span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

        </div>
      </Col>
    </Row>
  </Container>
</section>



      <Container className="mt-5">
        <Row className="text-center">
          <Col xs={12} md={4} className="mb-4">
            <Card className="info-card">
              <Card.Img variant="top" src={aboutImage} className="card-img-top" />
              <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>...
                </Card.Text>
                <Button variant="primary" as={Link} to="/about">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Card className="info-card">
              <Card.Img variant="top" src={resumeImage} className="card-img-top" />
              <Card.Body>
                <Card.Title>Resume</Card.Title>
                <Card.Text>...</Card.Text>
                <Button variant="primary" as={Link} to="/resume">View Resume</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Card className="info-card">
              <Card.Img variant="top" src={contactImage} className="card-img-top" />
              <Card.Body>
                <Card.Title>Contact</Card.Title>
                <Card.Text>...</Card.Text>
                <Button variant="primary" as={Link} to="/contact">Get in Touch</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} className="mb-4">
            <Card className="info-card">
              <Card.Img variant="top" src={blogImage} className="card-img-top" />
              <Card.Body>
                <Card.Title>Blog</Card.Title>
                <Card.Text>Read the latest blog posts and articles about IT.</Card.Text>
                <Button variant="primary" as={Link} to="/blog">Read Blog</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
