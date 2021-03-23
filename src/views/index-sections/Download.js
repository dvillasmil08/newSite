import React from "react";

// reactstrap components
import { Button, 
  Container, 
  UncontrolledTooltip,
  Row,
  Col,
 } from "reactstrap";

// core components

function Download() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
        style={{backgroundColor:'#050b0b'}}
      >
        <Container>
          <Row className="justify-content-md-center">
              <a href="https://storage.googleapis.com/wildrp-launcher-downloads/WildRPLauncherSetup.exe" target="_blank" rel="noopener noreferrer">
                <img
                  alt="..."
                  className="img-raised"
                  src={require('../../assets/img/launcher.png')}
                ></img>
              </a>
              
              <Col className="text-center" lg="8" md="12">
              <h5 className="description">
              Our windows launcher is required to play WildRP. If the above image does not work you can use our <a href='https://storage.googleapis.com/wildrp-launcher-downloads/WildRPLauncherSetup.exe' style={{color:'#e4b85d', textDecoration:'none'}}
              > alternative download link.</a></h5>
            </Col>
            
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2>Discord</h2>
              <h5 className="description">
                We organize our community primarily via Discord. All announcements, application status updates, developer previews, and other general communication can be found there.  
              </h5>
            </Col>
            <Col md="12">
            <Button
                className="btn-round mr-1"
                color="info"
                href="https://www.creative-tim.com/product/now-ui-kit-react?ref=nukr-index-page"
                outline type="button"
              >
                Launch Discord
                <i src={require('../../assets/img/wheel.svg')}></i>
              </Button>
            </Col>
          </Row>
          <Row className="text-center mt-5">
            <Col md="12">
            <h6 className="description">
            IF YOU ARE NOT ON THE WILDRP DISCORD AT THE TIME OF YOUR APPLICATION SUBMISSION, YOUR APPLICATION WILL BE AUTOMATICALLY DENIED. DUE TO THE CURRENT VOLUME OF APPLICATIONS WILDRP IS CURRENTLY ONLY HANDLING APPLICATION COMMUNICATION VIA DISCORD.
              </h6>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Thank you for supporting us!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                href="https://www.twitter.com/creativetim?ref=creativetim"
                id="tooltip86114138"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip86114138">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="youtube"
                href="https://www.facebook.com/creativetim?ref=creativetim"
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-youtube-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Like & Subscribe
              </UncontrolledTooltip>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href="https://www.linkedin.com/company-beta/9430489/?ref=creativetim"
                id="tooltip647117716"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-discord"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                Join us
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Download;
