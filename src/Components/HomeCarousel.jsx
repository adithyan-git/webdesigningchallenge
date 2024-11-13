import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const HomeCarousel = () => {
  return (
   <Container fluid className='padding-top  home-carousel'>
    <Row>
        <Col lg={6} className='carousel-col'>
            <div className='details-div'>
                <h1>Lesson and insights <br /> <span>from 8 years</span></h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <Button>Register</Button>
            </div>
        </Col>
        <Col lg={6}>
            <div className='img-div'>
                <img src="/Images/homeman.png" alt="" />
            </div>
        </Col>
            <Col lg={12}>
                <div className='icon-div'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot first-icon" viewBox="0 0 16 16">
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
</svg>
                </div>
            </Col>
    </Row>
   </Container>
  )
}

export default HomeCarousel
