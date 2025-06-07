import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css'; // Import the CSS file

const About = () => {
  // Sample data for images and videos
  const mediaItems = [
    { type: 'image', src: require('../assets/images/graduationPic.jpg'), alt: 'Graduation Photo', description: 'Graduation Day - University of Bedfordshire' },
    { type: 'image', src: require('../assets/images/posterdayPic2.jpg'), alt: 'Poster Presentation', description: 'Poster Presentation Day' },
    { type: 'video', src: require('../assets/videos/graduationVideo.mp4'), alt: 'Graduation Video', description: 'Graduation Ceremony Video' },
  ];

  // Split media items into images and videos
  const images = mediaItems.filter(item => item.type === 'image');
  const videos = mediaItems.filter(item => item.type === 'video');

  return (
    <Container className="mt-5">
      <div className="about-header">
        <h1>About Me</h1>
        <p className="lead">
          I am Md Abdullah Al Mamun, a recent Computer Science graduate from the University of Bedfordshire, currently working as a Desktop and Media Service Technician. With a robust background in technical support, multimedia management, and network troubleshooting, I am passionate about leveraging my skills to solve complex IT challenges and enhance user experiences.
        </p>
      </div>

      <div className="about-content">
        <h2>My Journey</h2>
        <p>
        My journey into the world of technology began with a deep curiosity about how things work behind the screen. That curiosity turned into passion, and that passion shaped my academic, professional, and personal life.        </p>
        <p>
        I’m currently part of the ICT department at the University of Bedfordshire, where I work as a Desktop and Media Services Technician. My day-to-day involves helping students and staff with everything tech—solving hardware and software issues, setting up multimedia equipment for lectures and events, and ensuring systems run smoothly. It’s hands-on, fast-paced, and always evolving—just the way I like it.        </p>
        <p>
        Before stepping into this technical role, I spent almost three years managing The Metro Café at Beds SU. It wasn’t just about coffee and orders—it was about creating a welcoming space for students, leading a team, and making sure every service ran like clockwork. My efforts were recognised when I was proudly awarded "Student Staff of the Year" two years in a row. During that time, I even built a website for the café, blending my love for tech with creativity.        </p>
        <p>
        Teaching has also played a part in my journey. Back in Bangladesh, I taught students from Class 1 to 12 and prepared learners for the IELTS exam. Creating lessons that matched different learning styles helped me develop empathy, patience, and communication—skills that still guide me today.        </p>
        <p>
        Academically, I hold a B.Sc. (Hons) in Computer Science from the University of Bedfordshire. It wasn’t just about lectures and assignments—I took on leadership roles as Vice-President of the Computing Society, Marketing Officer for Enactus Bedfordshire, and President of the Bangladeshi Society. My final year project won awards for both commercial potential and presentation, and that recognition meant a lot.        </p>
        <p>
        Over time, I’ve picked up a wide range of IT skills. I also enjoy public speaking, problem-solving, and finding creative solutions to everyday challenges. I believe learning never stops, and I’m always looking for ways to grow.        </p>
        <p>
        Beyond the screen, I’m passionate about table tennis, chess, and taking part in community events and cultural activities. I love keeping up with new trends in educational technology, and I strongly value collaboration, diversity, and inclusion in every space I’m part of.        </p>
        <p> 
        Looking ahead, my goal is to dive deeper into the world of cybersecurity. Focusing on Cyber Security—a step I believe will help me make a real impact in protecting digital systems and data in today’s world.</p>
        <p>
        Every chapter of my journey—whether in teaching, tech support, leadership, or learning—has brought me closer to who I am today: someone driven by purpose, passionate about IT, and ready to take on what’s next.</p>
      </div>

      <div className="gallery-section">
        <h2 className="text-center mb-4">Gallery</h2>

        <h3>Images</h3>
        <div className="images-gallery">
          {images.map((item, index) => (
            <div className="image-card" key={index}>
              <img src={item.src} alt={item.alt} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <h3>Videos</h3>
        <div className="videos-gallery">
          {videos.map((item, index) => (
            <div className="video-card" key={index}>
              <video controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default About;
