import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Caring = () => {
  return (
    <Container fluid>
        <Row>
            <Col lg={12}>
               <div className='caring-head'>
               <h1>Caring is the new marketing</h1>
               <p>The Nexcent blog is the best place to read about the latest membership insights, <br /> trends and more. See who's joining the community,<br /> read about how our community are increasing their membership income and lot's more.​</p>
               </div>
            </Col>
        </Row>
        <Row className='row-margin'>
            <Col sm={12} md={6} lg={4} className='position-col'>
                <div className='care-img-div'>
                    <img src="/Images/image 18.png" alt="" />
                   
                </div>
                    <div className='img-details'>
                        <p>Creating Streamlined  <br />Safeguarding Processes with <br /> OneRen</p>
                        <span className='span-details'>Readmore <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg></span>
                    </div>
                
            </Col>
            <Col sm={12} md={6}lg={4}  className='position-col'>
            <div className='care-img-div'>
                    <img src="/Images/image 19.png" alt="" />
                </div>
                <div className='img-details'>
                        <p>Creating Streamlined  <br />Safeguarding Processes with <br /> OneRen</p>
                        <span className='span-details'>Readmore <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg></span>
                    </div>
                
            </Col>
            <Col sm={12} md={6} lg={4}  className='position-col'>
            <div className='care-img-div'>
                    <img src="/Images/image 20.png" alt="" />
                </div>
                <div className='img-details'>
                        <p>Creating Streamlined  <br />Safeguarding Processes with <br /> OneRen</p>
                        <span className='span-details'>Readmore <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg></span>
                    </div>
                
            </Col>
        </Row>
    </Container>
  )
}

export default Caring