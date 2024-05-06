import React, { useState } from 'react'

const About = () => {
  const [text, setText] = useState(false);

  const showText = () => {
    setText(true);
  }

  const hideText = () => {
    setText(false);
  }

  return (
    <section className='about-container'>
      <h2 className='about-header'>About Us</h2>
      <div className='about-grid'>
        <div>
          <p>Welcome to Discoverys Multi-solution your trusted partner in audit and risk management solutions. At Discoverys, we understand the critical role that robust auditing and risk management play in ensuring the success, sustainability, and compliance of businesses across industries.
            With years of experience and expertise in the field, we offer comprehensive audit and risk management services tailored to meet the unique needs and challenges of your organization. Our team of seasoned professionals is committed to delivering high-quality, objective, and actionable insights to help you navigate the complexities of today's business landscape with confidence.
            {!text && <button onClick={showText}>Read more</button>}
            {text ? (
              <>
              <br /><br />
                We recognize the pivotal role that standards such as ISO 45001, ISO 9001, and ISO 27001 play in driving organizational effectiveness, safety, and security. Leveraging our expertise and experience, we offer specialized certification and consultancy services to help you attain and maintain compliance with these internationally recognized standards.
                Here, we prioritize integrity, transparency, and excellence in everything we do. Whether you're looking to enhance your internal controls, mitigate risks, or optimize your business processes, we are here to support you every step of the way.
                <button onClick={hideText}>Hide</button>
              </>
            ) : null}
            


          </p>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default About