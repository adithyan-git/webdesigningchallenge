import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <Container fluid className='bg-clr'>
          <Row>
            <Col lg={6}>
            <div className='img-div-second'>
             <img src="/Images/image 9.png" alt="" />
            </div>
            </Col>
            <Col lg={6}  className='img-second-col'>
            <div className='detail-div-two'>
               
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus  <br />tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. <br /> Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. <br /> Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis <br /> vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. <br /> Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus <br /> ac sit amet magna.</p>
                <h6>Tim Smith</h6>
                <p>British Dragon Boat Racing Association</p>
                <span className='details-span'>
                    <ul>
                        <li><img src="/Images/Logo (8).svg" alt="" /></li>
                        <li><img src="/Images/Logo (2).svg" alt="" /></li>
                        <li><img src="/Images/Logo (3).svg" alt="" /></li>
                        <li><img src="/Images/Logo (4).svg" alt="" /></li>
                        <li><img src="/Images/Logo (5).svg" alt="" /></li>
                        <li><img src="/Images/Logo (6).svg" alt="" /></li>
                        <li ><Link className='link-details'>Meet all customers <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg></Link></li>
                    </ul>
                </span>
                
            </div>
            </Col>
        </Row>

    </Container>
  )
}

export default Details