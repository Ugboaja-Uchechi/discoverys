import React from 'react';
import { FcCheckmark } from 'react-icons/fc';


const Services = () => {
  return (
    <section className='service-container' id='services'>
      <h2 className='service-header'>Our Services</h2>
      <div className='grid-container'>
        <div>
          <h3>Internal Control</h3>
          <p> Our internal control aims to provide reasonable assurance regarding the achievement of your organization's objectives in operational effectiveness, efficiency, financial reporting, and compliance with laws and regulations.</p>
          <hr />
          <ul>
            <h4>Services Offered</h4>
            <li>
              <FcCheckmark />
              <span>
                Design and implementation of control systems
              </span>

            </li>
            <li>
              <FcCheckmark />
              <span>
                Risk assessment
              </span>

            </li>
            <li>
              <FcCheckmark />
              <span>
                Monitoring and evaluation
              </span>

            </li>
            <li>
              <FcCheckmark />
              <span>
                Compliance assurance
              </span>

            </li>
          </ul>
        </div>
        <div>
          <h3>Internal Audit</h3>
          <p> Our internal audit provides independent, objective assurance and consulting services designed to add value and improve your organization's operations. It evaluates the effectiveness of internal controls, risk management, and governance processes.</p>
          <hr />
          <ul>
            <h4>Services Offered</h4>
            <li>
              <FcCheckmark />
              <span>
                Risk-based audits
              </span>

            </li>
            <li>
              <FcCheckmark />
              <span>
                Compliance audits
              </span>

            </li>
            <li>
              <FcCheckmark />
              <span>
                Operational audits
              </span>

            </li>
            <li>
              <FcCheckmark />
              <span>
                Fraud detection and prevention
              </span>

            </li>
            <li>
              <FcCheckmark />
              <span>
                Advisory services
              </span>

            </li>
          </ul>
        </div>
        <div>
          <h3>Risk Management</h3>
          <p> Our risk management involves identifying, assessing, and prioritizing risks followed by coordinated efforts to minimize, monitor, and control the probability or impact of unfortunate events.</p>
          <hr />
          <ul>
            <h4>Services Offered</h4>
            <li>
              <FcCheckmark />
              <span>
                Risk identification
              </span>
            </li>
            <li>
              <FcCheckmark />
              <span>
                Risk assessment
              </span>
            </li>
            <li>
              <FcCheckmark />
              <span>
                Risk mitigation
              </span>

            </li>
            <li>
              <FcCheckmark />
              <span>
                Risk monitoring and reporting
              </span>

            </li>
          </ul>
        </div>

        <div>
          <h3>ISO 45001 Consulting Services</h3>
          <p></p>
          <hr />
          <ul>
            <h4>Services Offered</h4>
            <li>
              <FcCheckmark />
              <span>
                Occupational Health and Safety Management System (OH&S) Implementation
              </span>
              <ul className='consulting'>
                <li>
                  Gap Analysis
                </li>
                <li>
                  Policy and procedure development
                </li>
                <li>
                  Risk assessment and hazard identification
                </li>
                <li>
                  Documentation support
                </li>
              </ul>
            </li>
            <li>
              <FcCheckmark />
              <span>
                ISO 45001 Certification Support
              </span>
              <ul className='consulting'>
                <li>
                  Implementation support
                </li>
                <li>
                  Internal audit preparation
                </li>
                <li>
                  Certification readiness assessment
                </li>
              </ul>
            </li>
            <li>
              <FcCheckmark />
              <span>
                Continuous Improvement
              </span>
              <ul className='consulting'>
                <li>
                  Monitoring and review
                </li>
                <li>
                  Training and awareness
                </li>
                <li>
                  Certification readiness assessment
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h3>ISO 27001 Consulting Services</h3>
          <p></p>
          <hr />
          <ul>
            <h4>Services Offered</h4>
            <li>
              <FcCheckmark />
              <span>
              Information Security Management System (ISMS) Implementation
              </span>
              <ul className='consulting'>
                <li>
                Risk assessment and management
                </li>
                <li>
                  Policy and procedure development
                </li>
                <li>
                Security controls implementation
                </li>
              </ul>
            </li>
            <li>
              <FcCheckmark />
              <span>
                ISO 27001 Certification Support
              </span>
              <ul className='consulting'>
                <li>
                Implementation guidance
                </li>
                <li>
                  Internal audit assistance
                </li>
                <li>
                  Certification readiness assessment
                </li>
              </ul>
            </li>
            <li>
              <FcCheckmark />
              <span>
                Continuous Improvement
              </span>
              <ul className='consulting'>
                <li>
                Security awareness training
                </li>
                <li>
                Incident response planning
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h3>ISO 9001 Consulting Services</h3>
          <p></p>
          <hr />
          <ul>
            <h4>Services Offered</h4>
            <li>
              <FcCheckmark />
              <span>
                Quality Management System (QMS) Implementation
              </span>
              <ul className='consulting'>
                <li>
                  Gap Analysis
                </li>
                <li>
                  Documentation development
                </li>
                <li>
                  Process mapping and optimization
                </li>

              </ul>
            </li>
            <li>
              <FcCheckmark />
              <span>
                ISO 9001 Certification Support
              </span>
              <ul className='consulting'>
                <li>
                  Implementation assistance
                </li>
                <li>
                  Internal audit support
                </li>
                <li>
                  Certification readiness preparation
                </li>
              </ul>
            </li>
            <li>
              <FcCheckmark />
              <span>
                Continuous Improvement
              </span>
              <ul className='consulting'>
                <li>
                  Performance metrics and monitoring
                </li>
                <li>
                  Training and development
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services