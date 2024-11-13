import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Help = () => {
  return (
   <Container fluid className='help-container'>
    <Row className='row-padding-help'>
        <Col lg={6} className='col-details-help '>
            <div className='help-div-one'>
                <h3>
                Helping a local <br /> <span> business reinvent itself</span>
                </h3>
                <p>
                We reached here with our hard work and dedication
                </p>
            </div>
        </Col>
        <Col lg={3}>
        <div className='help-icon-div'>
            <span><img src="/Images/Icon (3).svg" alt="" /></span>
                <div className='margin-left'>
                <h3>2,245,341</h3>
                <p>Members</p>
                </div>

        </div>
        <div className='help-icon-div'>
        <span><img src="/Images/Icon (4).svg" alt="" /></span>
                <div className='margin-left'>
                <h3>828,867</h3>
                <p>Event Bookings</p>
                </div>
        </div>
        
        </Col>
        <Col lg={3}>
        <div className='help-icon-div'>
            <span><img src="/Images/Icon (5).svg" alt="" /></span>
                <div className='margin-left'>
                <h3>46,328</h3>
                <p>Clubs</p>
                </div>

        </div>
        <div className='help-icon-div'>
        <span><img src="/Images/Icon (6).svg" alt="" /></span>
                <div>
                <h3>1,926,436</h3>
                <p>Payments</p>
                </div>
        </div>
        </Col>
    </Row>
   </Container>
  )
}

export default Help