import React from "react";

// reactstrap components
import {
  Button,
  Input,
  Container,
  Col} from "reactstrap";

// core components
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import BackgroundImage from '../../assets/img/cover.jpg'
import IndexNavbar from "components/Navbars/IndexNavbar";

function Streamapp() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
});
  return (
    <>
      <IndexNavbar />
      <div className="wrapper" >
        {/* <LandingPageHeader /> */}
        <div className="main">
        <div className="section" style={{backgroundImage:`url(${BackgroundImage})`}}>
        <Container >
        <Col className="ml-auto mr-auto text-center " md="12" style={{color:'white'}}>

                
                <div>
                <h2 className="" style={{color:'white'}}>HIGHLIGHTED<br></br>STREAMER</h2>

                <p><a href='/index' style={{textDecoration:'none', color:'grey'}}>HOME / </a>
                <span style={{color:'#e4b85d'}}>STREAMER HIGHLIGHT</span></p>
                </div>
               
        </Col>
        
            
                {/* DISCORD */}
                <div>
                    <Input type='field' name='text' id='discordId' placeholder='Discord ID Name#1234' required/>  
                </div>
            
                {/* Twitch/FB */}
                <div><Input type='field' name='text' id='twitchFacebook' placeholder='Twitch / Facebook' required/></div>
        
        {/* SECOND PART */}
                <Col className="ml-auto mr-auto text-center" md="12" style={{color:'white'}}>
                    <div><p>By clicking on the form submission button you are hereby giving WildRP's staff team the consent to utilize any data contained within the form for the express purposes of WildRP community membership administration functions.</p>
                    </div>
                    <div>
                
                <Button
                className="btn-round"
                // color="info"
                
                outline
                size="lg"
                target="_blank"
                style={{color:'#e4b85d', marginTop:'70px', fontSize:'25px'}}
              >
                OPT-IN
                <img style={{width:'40px', alignItems:'center'}} src={require('../../assets/img/wheel.svg')} alt='wheel'></img>

              </Button>
            
                    </div>
                {/* </div> */}
        </Col>
        </Container>
        </div>

          
        </div>
        <DarkFooter />
    </div>
    </>
  );
}

export default Streamapp;