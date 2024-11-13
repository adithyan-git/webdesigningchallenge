import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Clients = () => {
  return (
    <Container fluid>
        <Row>
            <Col lg={12}>
                <div className='client-head'>
                  <h1>Our Clients</h1>
                  <p>We have been working with some Fortune 500+ clients</p>
                </div>
            </Col>
            <Col lg={12}>
                <div className='logo-div'>
                    <ul>
                        <li><img src="/Images/Logo (1).svg" alt="" /></li>
                        <li><img src="/Images/Logo (2).svg" alt="" /></li>
                        <li><img src="/Images/Logo (3).svg" alt="" /></li>
                        <li><img src="/Images/Logo (4).svg" alt="" /></li>
                        <li><img src="/Images/Logo (5).svg" alt="" /></li>
                        <li><img src="/Images/Logo (6).svg" alt="" /></li>
                        <li><img src="/Images/Logo (7).svg" alt="" /></li>
                    </ul>
                </div>
            </Col>
            <Col lg={12}>
            <div className='client-second-div'>
                <h1>Manage your entire community <br /> in a single system</h1>
            </div>
            </Col>
        </Row>
        <Row>
            
            <Col lg={4} className='details-col-three'>
                <div className='card-div'>
                    <span><img src="/Images/Icon.svg" alt="" /></span>
                    <h4>Membership <br /> Organisations</h4>
                    <p>Our membership management <br /> software provides full automation of <br /> membership renewals and  payments</p>
                </div>
            </Col>
            <Col lg={4}  className='details-col-three'>
            <div className='card-div'>
                    <span><img src="/Images/Icon (1).svg" alt="" /></span>
                    <h4>National <br /> Associations</h4>
                    <p>Our membership management <br /> software provides full automation of <br /> membership renewals and <br /> payments</p>
                </div>
            </Col>
            <Col lg={4}  className='details-col-three'>
            <div className='card-div'>
                    <span><img src="/Images/Icon (2).svg" alt="" /></span>
                    <h4>Clubs And <br /> Groups</h4>
                    <p>Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
                </div>
            </Col>
            
           
        </Row>
        <Row>
            <Col lg={6}>
            <div className='img-div-second'>
             <img src="/Images/Frame 35.png" alt="" />
            </div>
            </Col>
            <Col lg={6}  className='img-second-col'>
            <div className='detail-div-two'>
                <h4>The unseen of spending three <br /> years at Pixelgrade</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed <br /> sit amet justo ipsum. Sed  accumsan quam vitae est varius fringilla. Pellentesque <br /> placerat vestibulum lorem sed  porta. Nullam mattis tristique iaculis. Nullam pulvinar <br /> sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. <br /> Donec elementum pulvinar odio.</p>
                <Button>Learn More</Button>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Clients