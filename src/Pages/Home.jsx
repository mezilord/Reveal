import React, { useRef, useEffect, useState } from 'react'
import '../App.css'

const Home = ({ section }) => {
  const services = [
    {
      name: 'Microneedling',
      profession: 'XYZ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad '
    },
    {
      name: 'Lip Fillers',
      profession: 'XYZ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad '
    },
    {
      name: 'HydraFacial',
      profession: 'XYZ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad '
    },
    {
      name: 'Botox',
      profession: 'XYZ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad '
    },
    {
      name: 'Chemical Pels',
      profession: 'XYZ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad '
    },
    {
      name: 'Demal Fillers',
      profession: 'XYZ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad '
    },
    {
      name: 'Laser Hair Removal',
      profession: 'XYZ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad '
    },
    {
      name: 'Skin Tightening Treatments',
      profession: 'XYZ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad '
    },
    {
      name: 'Acne Treatments',
      profession: 'XYZ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad '
    }
  ]

  const TeamMemberCard = ({
    imageSrc,
    name,
    profession,
    about,
    onReadMoreClick
  }) => (
    <div className="team-member-card" width="250px" height="350px">
      <img
        src={imageSrc}
        alt={`${name}'s headshot`}
        height="250"
        width="250"
        className="team-member-image"
      />

      <h3>{name}</h3>
      <p>{profession}</p>
      <p>{about}</p>
      <button
        onClick={() => onReadMoreClick({ name, profession, about, imageSrc })}
      >
        Read More
      </button>
    </div>
  )

  const [teamPopupContent, setTeamPopupContent] = useState(null)

  const handleTeamMemberReadMoreClick = ({
    name,
    profession,
    about,
    imageSrc
  }) => {
    setTeamPopupContent({ name, profession, about, imageSrc })
  }
  useEffect(() => {
    if (section === 'Discover') {
      const discoverSection = document.getElementById('Discover')
      if (discoverSection) {
        discoverSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [section])
  const handleCloseTeamPopup = () => {
    setTeamPopupContent(null)
  }

  const [popupContent, setPopupContent] = useState(null)

  const handleReadMoreClick = (description) => {
    setPopupContent(description)
  }

  const handleClosePopup = () => {
    setPopupContent(null)
  }

  const commonImageStyle = {
    objectFit: 'cover',
    height: '200px',
    width: '200px',
    borderRadius: '10%'
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const footerStyle = {
    backgroundColor: '#FEF9F0',
    color: '#black',
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }

  const contentStyle = {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '500px'
  }

  const socialIconStyle = {
    margin: '0 10px',
    cursor: 'pointer'
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }
  const ImageComponent = ({ src, alt }) => {
    return (
      <div>
        <img src={src} alt={alt} style={commonImageStyle} />
      </div>
    )
  }

  return (
    <>
      <section className="Home">
        <div className="HomeContainer">
          <div className="HomeText">
            <h1 id="HomeTextH1">
              Lorem ipsum dolor sit amet
              <span style={{ display: 'block' }}>consectetur</span>{' '}
            </h1>
            <p className="hero">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim vessniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in ddsdsd
            </p>
            <button className="buttonh">Lorem Ipsum</button>
          </div>
        </div>
      </section>
      <section
        id="Discover"
        className={section === 'Discover' ? 'Discover' : 'Discover'}
      >
        <div className="First">
          <div className="FirstContent">
            <h1 id="HomeTextH1">
              Lorem ipsum dolor sit amet
              <span style={{ display: 'block' }}>consectetur</span>{' '}
            </h1>
            <p className="Disp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim vessniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in ddsdsd
            </p>
            <button className="buttonh">Lorem Ipsum</button>
          </div>
        </div>

        <div className="Second"></div>
      </section>
      <section className="Gallery">
        <h1 style={{ marginTop: '30px', fontSize: '35px' }}>Gallery</h1>
        <div
          style={{ marginTop: '50px' }}
          className="video-container rounded video-wrapper"
        >
          <iframe
            width="900"
            height="500"
            src="https://www.youtube.com/embed/KOEfDvr4DcQ?autoplay=1&mute=1&loop=1&controls=0"
            title="YouTube video player"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="image-slider">
          <div>
            <ImageComponent src="../src/assets/images/1.jpeg" alt="Image 1" />
            <ImageComponent src="../src/assets/images/2.jpeg" alt="Image 2" />
            <ImageComponent src="../src/assets/images/3.jpeg" alt="Image 3" />
            <ImageComponent src="../src/assets/images/6.jpeg" alt="Image 4" />
            <ImageComponent src="../src/assets/images/5.jpeg" alt="Image 5" />
            <ImageComponent src="../src/assets/images/6.jpeg" alt="Image 6" />
            <ImageComponent src="../src/assets/images/7.jpeg" alt="Image 7" />
            <ImageComponent src="../src/assets/images/8.jpeg" alt="Image 8" />
            <ImageComponent src="../src/assets/images/9.jpeg" alt="Image 9" />
            <ImageComponent src="../src/assets/images/10.jpg" alt="Image 10" />
          </div>
        </div>
      </section>

      <section className="service">
        <div className="service-content">
          <h2 className="S">Our Services</h2>
          <div className="service-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h2 className="ServiceH2">{service.name}</h2>
                <h3>{service.profession}</h3>
                <p className="P">{service.description}</p>
                <button
                  className="buttonser"
                  onClick={() => handleReadMoreClick(service.description)}
                >
                  Learn More
                </button>
              </div>
            ))}
            {popupContent && (
              <div className="popup">
                <div className="popup-content">
                  <span className="close" onClick={handleClosePopup}>
                    &times;
                  </span>
                  <p>{popupContent}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-heading">Our Team</h2>
        <div className="team-cards-container">
          <TeamMemberCard
            imageSrc="../src/assets/images/MaleD.png"
            name="Dr. John Doe"
            // profession="Dermatologist"
            about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad"
            onReadMoreClick={handleTeamMemberReadMoreClick}
          />
          <TeamMemberCard
            imageSrc="../src/assets/images/FemaleD.png"
            name="Dr. Jane Smith"
            // profession="Dermatologist"
            about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad"
            onReadMoreClick={handleTeamMemberReadMoreClick}
          />
          {/* <TeamMemberCard
            imageSrc="../src/assets/images/Male.png"
            name="Bob Johnson"
            profession="Dermatologist"
            about="Bob is an experienced Dermatologist "
          /> */}

          {teamPopupContent && (
            <div className="team-popup">
              <div className="popupp-content">
                <span className="closee" onClick={handleCloseTeamPopup}>
                  &times;
                </span>
                <img
                  src={teamPopupContent.imageSrc}
                  alt={`${teamPopupContent.name}'s headshot`}
                  className="popupimage"
                />
                <div className="TeamC">
                  <h3>{teamPopupContent.name}</h3>
                  <p>{teamPopupContent.profession}</p>
                  <p>{teamPopupContent.about}</p>
                  <button>Book a consultation</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="Consultation">
        <h1
          style={{
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}
        >
          Book a Consultation
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              marginBottom: '10px',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ width: '45%' }}>
              <input
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  backgroundColor: '#f5f5f5',
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  fontSize: '16px',
                  marginBottom: '3px'
                }}
                required
              />
            </div>
            <div style={{ width: '45%' }}>
              <input
                placeholder="Email"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  fontSize: '16px',
                  marginBottom: '3px', // Add this line for gap
                  backgroundColor: '#f5f5f5'
                }}
                required
              />
            </div>
          </div>
          <div style={{ width: '100%', marginBottom: '15px' }}>
            <textarea
              placeholder="Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                display: 'block',
                width: '100%',
                height: '100px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                fontSize: '16px',
                backgroundColor: '#f5f5f5'
              }}
              required
            ></textarea>
          </div>
          <div style={{ width: '100%', marginBottom: '15px' }}>
            <button
              type="submit"
              style={{
                display: 'block',
                width: '105%',
                margin: '0 auto',
                padding: '10px',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Send
            </button>
          </div>
        </form>
      </section>
      <footer className="footer">
        <div className="content">
          <img
            src="../src/assets/images/Goldfont.png"
            alt="Company Logo"
            height="60px"
            width="100px"
          />
        </div>

        <div className="content">
          <address>
            2484 Muhammad Al Maqdimi, An Nafal
            <br />
            Riyadh 13312, Saudi Arabia
            <br />
            Email: info@example.com
            <br />
            Phone: +966 115 048 687
          </address>
        </div>

        <div className="content">
          <img
            src="../src/assets/images/whatsapp.svg"
            height="30px"
            width="30px"
            alt="WhatsApp Logo"
            className="social-icon"
          />
          <img
            src="../src/assets/images/instagram.svg"
            height="30px"
            width="30px"
            alt="Instagram Logo"
            className="social-icon"
          />
          <img
            src="../src/assets/images/snapchat.svg"
            height="30px"
            width="30px"
            alt="Instagram Logo"
            className="social-icon"
          />
          <img
            src="../src/assets/images/tiktok.svg"
            height="30px"
            width="30px"
            alt="Instagram Logo"
            className="social-icon"
          />
        </div>

        <div className="content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14489.855588028031!2d46.6611757!3d24.7795639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee36d7e688701%3A0xdae179a2547ddb46!2zUmV2ZWFsIENsaW5pY3MgfCDYudmK2KfYr9ipINix2YrapNmK2YQ!5e0!3m2!1sen!2sbh!4v1709058186953!5m2!1sen!2sbh"
            width="300px"
            height="120px"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </>
  )
}

export default Home
