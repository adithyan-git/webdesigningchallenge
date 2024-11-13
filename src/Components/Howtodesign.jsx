import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Howtodesign = () => {
  return (
    <Container fluid>
         <Row>
            <Col lg={6}>
            <div className='img-div-second'>
             <img src="/Images/pana.png" alt="" />
            </div>
            </Col>
            <Col lg={6}  className='img-second-col'>
            <div className='detail-div-two'>
                <h4>How to design your site footer like <br /> we did</h4>
                <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt <br /> molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero <br /> ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis <br /> finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla <br /> commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. <br /> Donec consectetur faucibus ipsum id gravida.</p>
                <Button>Learn More</Button>
            </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Howtodesign