import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid className='footer-clr'>
        <Row>
            <Col lg={6} className='footer-first-col'>
                <div>
                    <img src="/Images/logofooter.svg" alt="" className='img-footer'/>
                   <div className='para-div'>
                   <p>Copyright © 2020 Nexcent ltd.</p>
                   <p className='para'>All rights reserved</p>
                   </div> 
                    <div>
                    <ul>
                        <li ><img src="/Images/Social Links.png" alt="" /></li>
                       
                    </ul>
                    </div>
                </div>
            </Col>
            <Col lg={2}>
            <div  className='footer-list'>
                <h4>Company</h4>
                <ul>
                    <li>About us</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            
            </Col>
            <Col lg={2}>
            <div className='footer-list'>
                <h4>Support</h4>
                <ul>
                    <li>Help center</li>
                    <li>Terms of service</li>
                    <li>Legal</li>
                    <li>Privacy policy</li>
                    <li>Status</li>
                </ul>
            </div>
            </Col>
            <Col lg={2}>
            <div>
                <h4>Stay up to date</h4>
                <span className='spn-ftr'><p>Your email address</p> <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg></p></span>
            </div>
            </Col>
        </Row>

    </Container>
  )
}

export default Footer