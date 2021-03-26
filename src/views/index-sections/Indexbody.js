import React from "react";

// reactstrap components
import { Button, 
  Container, 
  UncontrolledTooltip,
  Row,
  Col,
 } from "reactstrap";

// core components

function Indexbody() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
     <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/cover.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        
          <div 
          className="content-center">
          <Row className="justify-content-md-center">
          <img
              alt="..."
              src={require('../../assets/img/a_new_day.png')}
              style={{width:'100%'}}
              >

          </img>
            <Col className="text-center" lg="8" md="12">
              <h3 className="h1-seo">Get ready to ride in saints crossing</h3>
              <h5 className="description">
              WildRP is a premiere roleplay community. We aim to bring an atmosphere of high quality roleplay that encourages in-depth character development while providing a wide range of features and constant updates.
              </h5>
            </Col>
            <Col className="text-center" lg="8" md="12">
            <Button
              className="btn-round"
              outline
              size="lg"
              target="_blank"
              style={{color:'#e4b85d', fontSize:'20px', marginBottom:'60px', background:'transparent', justifyContent:'center'}}
              >Allowlist Application
              <img style={{width:'40px', alignItems:'center'}} src={require('../../assets/img/wheel.svg')} alt='wheel'></img>
                    </Button>
            </Col>
          </Row>
          </div>
        
      </div>
      <div
        className="section section-download"
        id="download-section"
        style={{backgroundColor:'#050b0b', color:'white'}}
      >
        <Container>
          <Row className="justify-content-md-center">
              <a href="https://storage.googleapis.com/wildrp-launcher-downloads/WildRPLauncherSetup.exe">
                <img
                  alt="..."
                  className="img-raised"
                  src={require('../../assets/img/launcher.png')}
                ></img>
              </a>
              
            
              <Col className="text-center" lg="8" md="12">
              <h5 className="description"><br></br>
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
              href="https://discord.gg/kagKhnW"
              className="btn-round"
              outline
              size="lg"
              target="_blank"
              style={{color:'#e4b85d', fontSize:'20px', marginBottom:'60px', background:'transparent', justifyContent:'center'}}
              >Launch discord
              <img style={{width:'40px', alignItems:'center'}} src={require('../../assets/img/wheel.svg')} alt='wheel'></img>
            </Button>
              
            </Col>
          </Row>
          <Row className="justify-content-md-center text-center mt-5">
            <Col md="8">
            <h6 className="description " >
            IF YOU ARE NOT ON THE WILDRP DISCORD AT THE TIME OF YOUR APPLICATION SUBMISSION, YOUR APPLICATION WILL BE AUTOMATICALLY DENIED. DUE TO THE CURRENT VOLUME OF APPLICATIONS WILDRP IS CURRENTLY ONLY HANDLING APPLICATION COMMUNICATION VIA DISCORD.
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Indexbody;
