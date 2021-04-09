import IndexNavbar from "components/Navbars/IndexNavbar";
import React from "react";

// reactstrap components
import { Button, 
  Container, 
  Row,
  Col,
 } from "reactstrap";

// core components
import BackgroundImage from '../../assets/img/cover.jpg'

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
    <IndexNavbar/>
    <div className="wrapper">
      <div className='main'>
        <div className='section'
        style={{backgroundImage:`url(${BackgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#050b0b',
                color:'white'
                }}>


    <Container>
    <Row className="justify-content-md-center">
      <Col className="ml-auto mr-auto " md="12" >
        <div
          className="page-header-image"
          style={{backgroundImage:`url(${BackgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#050b0b'
        }}
        ref={pageHeader}
        ></div>
          <img
              alt="..."
              src={require('../../assets/img/a_new_day.png')}
              style={{width:'95%'}}
              ></img>
      </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="text-center" lg="6" md="12">
          <h1>Get ready to ride in saints crossing</h1>
        </Col>
        <Col className="text-center" lg="8" md="12">
          <h5>
            WildRP is a premiere roleplay community. We aim to bring an atmosphere of high quality roleplay that encourages in-depth character development while providing a wide range of features and constant updates.
            </h5>
          </Col>

              {/* empty separator */}
              <div style={{marginBottom:'10rem'}}></div>

          <Col className="text-center" lg="8" md="12">
            <br></br>
            <Button
              className="btn-round"
              outline
              size="lg"
              target="_blank"
              style={{color:'#e4b85d', fontSize:'20px', background:'transparent'}}
              >Allowlist Application
              <img style={{width:'40px', alignItems:'center'}} src={require('../../assets/img/wheel.svg')} alt='wheel'></img>
            </Button>
            
            {/* empty separator */}
            <div style={{marginBottom:'8rem'}}></div>

          </Col>
      </Row>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="10" >
              <a href="https://storage.googleapis.com/wildrp-launcher-downloads/WildRPLauncherSetup.exe" >
                <img
                  alt="..."
                  className="img-raised"
                  src={require('../../assets/img/launcher.png')}
                  ></img>
              </a>
            </Col>
            <Col className="text-center" lg="6" md="12">
              <h5><br></br>
                Our windows launcher is required to play WildRP. If the above image does not work you can use our
              <br></br>
              <a href='https://storage.googleapis.com/wildrp-launcher-downloads/WildRPLauncherSetup.exe' style={{color:'#e4b85d', textDecoration:'none'}}
                >alternative download link.</a></h5>
            </Col>
          </Row>

          {/* empty separator */}
          <div style={{marginBottom:'10rem'}}></div>

          <Row className="text-center mt-5">
            <Col className="ml-auto mr-auto" md="8">
              <h2>Discord</h2>
              <h5>
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
              >Launch Discord
              <img style={{width:'40px', alignItems:'center'}} src={require('../../assets/img/wheel.svg')} alt='wheel'></img>
              </Button>
              
            </Col>
            </Row>
                  <Row className="justify-content-md-center text-center mt-5">
                  <Col className="ml-auto mr-auto" md="9">
                  <h6 className="description">
                    IF YOU ARE NOT ON THE WILDRP DISCORD AT THE TIME OF YOUR APPLICATION SUBMISSION, YOUR APPLICATION WILL BE AUTOMATICALLY DENIED. DUE TO THE CURRENT VOLUME OF APPLICATIONS WILDRP IS CURRENTLY ONLY HANDLING APPLICATION COMMUNICATION VIA DISCORD.
                  </h6>
                 </Col>
                </Row>
              </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Indexbody;
