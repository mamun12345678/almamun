import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  return (
    <Container className="resume">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Md Abdullah Al Mamun</h1>
        <p className="hero-subtitle">Desktop & Media Service Technician | IT Support Enthusiast</p>
        <p className="hero-contact">
          mdabdullah.almamun.one@gmail.com | 07394032549 | 5 Westbourne Road, Luton
        </p>
      </section>

      {/* Resume Sections */}
      <section className="resume-sections">
        <Row>
          <Col md={12}>
            <Card className="resume-card">
              <Card.Body>
                <Card.Title className="section-title"><FaBriefcase /> Objectives</Card.Title>
                <Card.Text>
                A dedicated Computer Science graduate from the University of Bedfordshire, currently working
as a Desktop and Media Services Technician in the university's ICT department. Passionate
about cybersecurity, IT infrastructure, and system security, with a strong background in IT
support, networking, and digital security practices.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="resume-card">
              <Card.Body>
                <Card.Title className="section-title"><FaBriefcase /> Experience</Card.Title>
                <Card.Text>
                  <strong>Desktop and Media Services Technician</strong>, ICT Department, University of Bedfordshire <em>(February 2024 - Present)</em>
                  <ul>
                    <li>Nominated for the University’s Beds Star Award in the Compassionate category.</li>
                    <li>Provide comprehensive IT support to students and staff, ensuring smooth technology operations.</li>
                    <li>Troubleshoot hardware, software, and network issues efficiently.</li>
                    <li>Maintain and set up audio-visual equipment for lectures, conferences, and events.</li>
                    <li>Maintained and managed multimedia equipment and computer labs.</li>
                    <li>Work collaboratively across departments to improve IT services and cybersecurity awareness.</li>
                    <li>Proactively monitor and maintain IT security best practices in system management.</li>
                  </ul>

                  <strong>Cafe Manager / Duty Manager / Student Staff</strong>, The Metro, Beds SU <em>(September 2021 - February 2024)</em>
                  <ul>
                    <li>Managed daily operations, ensuring effective service and student satisfaction.</li>
                    <li>Built strong relationships with students and staff across campuses.</li>
                    <li>Awarded "Student Staff of the Year" consecutively in 2022 and 2023.</li>
                  </ul>

                  <strong>Teaching Experience</strong>, Bangladesh<br />
                  <em>IELTS Students and Lower Grades (Class 1-12)</em>
                  <ul>
                    <li>Developed and delivered comprehensive lesson plans and study materials for IELTS students.</li>
                    <li>Adapted teaching methodologies to align with students' varied learning styles.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="resume-card">
              <Card.Body>
                <Card.Title className="section-title"><FaGraduationCap /> Education</Card.Title>
                <Card.Text>
                  <strong>B.Sc. Honors in Computer Science</strong>, University of Bedfordshire <em>(September 2020 - June 2023)</em>
                  <ul>
                    <li>Worked as a Quality Manager using agile project management.</li>
                    <li>Undergraduate Project Awards: “Best Commercial Project” - 3rd Place, “Best Project Presentation and Poster” - 2nd Place.</li>
                    <li>Roles: Enactus Bedfordshire Marketing Officer, Computing Society Vice-President, Bangladeshi Society President.</li>
                  </ul>

                  <strong>B.Sc. Honors in Psychology</strong>, National University, Bangladesh <em>(2018 - 2019)</em>
                  <ul>
                    <li>Completed 1st year, understanding human behavior and psychology.</li>
                  </ul>

                  <strong>HSC - Higher Secondary Certificate <em>(2016 - 2018)</em> & SSC - Secondary School Certificate <em>(2014 - 2016)</em> in Science</strong>, Bangladesh<br />
                  <em>Scholarships & Awards</em>
                  <ul>
                    <li>1st in Mathematics and Computing, 3rd in Science Project Presentation (In College, Class 11-12)</li>
                    <li>CBET Scholarship Award in 2017(In College, Class 11-12)</li>
                    <li>Different Scholarship Awards (IN CLASS 3,4,6,8,10)</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        

        <Row>
          <Col md={12}>
            <Card className="resume-card">
              <Card.Body>
                <Card.Title className="section-title"><FaStar /> Interests & Hobbies</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Keeping up-to-date with educational technology trends.</li>
                    <li>Engaging in physical and strategic activities like table tennis and chess.</li>
                    <li>Participating in community volunteering and cultural events.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Resume;
