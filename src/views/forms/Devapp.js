import React from "react";

// reactstrap components
import {
  Button,
  Input,
  Container,
  Col,
  Label} from "reactstrap";

// core components
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import BackgroundImage from '../../assets/img/cover.jpg'
import IndexNavbar from "components/Navbars/IndexNavbar";
import Recaptcha from 'react-recaptcha';


function Devapp() {
  React.useEffect(() => {
    document.body.classList.add("banappeal-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("banappeal-page");
      document.body.classList.remove("sidebar-collapse");
    };
});
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        {/* <LandingPageHeader /> */}
        <div className="main">
        <div className="section" style={{color:'white', backgroundImage:`url(${BackgroundImage})`}}>
        <Container>
        <Col className="ml-auto mr-auto " md="12" style={{marginTop:'8rem'}}>
                <h2 className="">DEVELOPER APPLICATION</h2>

                <div>
                <p><a href='/index' style={{textDecoration:'none', color:'grey'}}>HOME / </a>
                <span style={{color:'#e4b85d'}}>DEVELOPER APPLICATION</span></p>
                </div>

               
                <p className="" style={{color:'white'}}>
                  We are always on the lookout for like-minded developers to join our team and help us improve our world. If you are up to the job, please fill in the form below
                </p>
               
        </Col>
        <Col className="ml-auto mr-auto " md="12">
                <h3 className="" style={{color:'white'}}>QUESTION #1.</h3>
            
                {/* discord id */}
                <div>
                    <Input type='field' name='text' id='discordId' placeholder='Discord ID Name#1234' required/>
                    
                </div>
            
                {/* Age */}
                <div><Input type='field' name='text' id='age' placeholder='Age' required/></div>
        </Col>
            
        {/* SECOND PART */}
        <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                <h3 className="" style={{color:'white'}}>QUESTION #2</h3>
                    <div>
                         <Label for='position'>Have you received any warnings or bans in WildRPs discord or game servers?</Label>
                        <Input type='field' name='text' id='position' placeholder=''required />
                    
                        <Label for='anyBan'>What experience do you have with coding and programming? Can you explain any previous projects you have worked on?</Label>
                        <Input type='field' name='text' id='anyBan' placeholder='' required />
                        
                        <Label for='why'>Why are you applyin for this developer position?</Label>
                        <Input type='field' name='text' id='why' placeholder='' required />
                        
                        <Label for='howLong'>What coding languages are you most comfortable with</Label>
                        <Input type='field' name='text' id='howLong' placeholder='' required />

                        <Label for='experience'>How much time would you be able to volunteer per week (estimated)</Label>
                        <Input type='field' name='text' id='experience' placeholder='' required />

                        <Label for='weekhour'>Are you able to work well within a group setting?</Label>
                        <Input type='field' name='text' id='weekhour' placeholder='' required />

                        <Label for='example'>Explain features or systems in short detail, that you would like to develop if given approval?</Label>
                        <Input type='field' name='text' id='example' placeholder='' required />

                    </div>

                    
                    </Col>
                      </Container>
                      </div>
                      
              <div className="section" style={{color:'white', backgroundColor:'#050b0b', marginTop:'-100px'}}>
              <Container>

                    <Col className="ml-auto mr-auto " md="12">
                    <Recaptcha
                    sitekey="6LfHY8QUAAAAANhkFVCaUI2gl9Te5phqd5VO6WEA"
                    render="explicit"
                    theme="dark"
                    />  
                    <div><p>By clicking on the form submission button you are hereby giving WildRP's staff team the consent to utilize any data contained within the form for the express purposes of WildRP community membership administration functions.</p>
                    </div>
                    <Button
                            className="btn-round"
                            // color="info"
                            
                            outline
                            size="lg"
                            target="_blank"
                            style={{color:'#e4b85d', fontSize:'20px', marginTop:'110px', marginBottom:'60px', background:'transparent', height:'60px', justifyContent:'center'}}
                            >Submit
                            <img style={{width:'40px', alignItems:'center'}} src={require('../../assets/img/wheel.svg')} alt='wheel'></img>
                    </Button>
                    </Col>
                  </Container>
                  </div>

          
        </div>
        <DarkFooter />
    </div>
    </>
  );
}

export default Devapp;