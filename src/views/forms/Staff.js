import React from "react";

// reactstrap components
import {
  Button,
  Input,
  Container,
  Col,
  Label,
  Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

// core components
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import BackgroundImage from '../../assets/img/cover.jpg'
import IndexNavbar from "components/Navbars/IndexNavbar";
import Recaptcha from 'react-recaptcha';


function Staffapp() {
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
// submit modal
const [modal1, setModal1] = React.useState(false);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        {/* <LandingPageHeader /> */}
        <div className="main">
        <div className="section" 
        style={{backgroundImage:`url(${BackgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#050b0b',
                color:'white'
                }}>
        <Container>
        <Col className="ml-auto mr-auto " md="12">
                <h2 className="" style={{marginTop:'8rem'}}>STAFF APPLICATION</h2>

                <div>
                <p><a href='/index' style={{textDecoration:'none', color:'grey'}}>HOME / </a>
                <span style={{color:'#e4b85d'}}>STAFF APPLICATION</span></p>
                </div>            
                <p>
                  The Staff team at WildRP has learned that running a brand new style of total game modification roleplay community 
                  is difficult and challenging work. The team often requires more help then we have available, and may be looking for 
                  new team members to assist the community. Support Staff are the frontline of WildRP and everything we do starts with 
                  them. Support Staff must be able to adhere to the following criteria:     
                </p>
                  <p>1. All staff members are expected to conduct themselves professionally and within WildRPs rules and guidelines at 
	                  all times when publicly representing the server and staff team.</p>

                  <p>2. All staff must be calm, strong, clear, well equipped communicators.</p>

	                <p>3. Support staff must utilize WildRP’s rules, Discord/Twitch ToS, and common sense to moderate the community.</p>

	                <p>4. All staff must prioritize server good over personal gameplay.</p>

	                <p>5. Support staff must be able to assist with WildRP’s application and interview process.</p>

	                <p>6. Support staff must be available to cover at two potential member interview time slots per week.</p> 

                  <p>If you fulfil the above criteria and are a white-listed community member in good standing and want to help out, please feel 
                    free to apply for a support staff role by filling out the application below!</p>
   
        </Col>
        <Col
            className="ml-auto mr-auto " md="12">
                <h3 className="">QUESTION #1.</h3>
            
                {/* discord id */}
                <div>
                    <Input type='field' name='text' id='discordId' placeholder='Discord ID Name#1234' required/>
                    
                </div>
            
                {/* Age */}
                <div><Input type='field' name='text' id='age' placeholder='Age' required/></div>
          </Col>
            
        {/* SECOND PART */}
        <Col className="ml-auto mr-auto " md="12">
                <h3 className="">QUESTION #2</h3>
                    <div>
                        <Label for='position'>What kind of position would you like to apply for?</Label>
                        <Input type='textarea' name='text' id='position' placeholder=''required />
                    
                        <Label for='anyBan'>Have you received any warnings or bans in WildRPs discord or game servers?</Label>
                        <Input type='textarea' name='text' id='anyBan' placeholder='' required />
                        
                        <Label for='why'>Why are you applying for this staff position?</Label>
                        <Input type='textarea' name='text' id='why' placeholder='' required />
                        
                        <Label for='howLong'>How long have you been a member of the WildRP community?</Label>
                        <Input type='textarea' name='text' id='howLong' placeholder='' required />

                        <Label for='experience'>Explain your past experience with being a team leader, community moderator, etc</Label>
                        <Input type='textarea' name='text' id='experience' placeholder='' required />

                        <Label for='weekhour'>How much time would you be able to volunteer per week</Label>
                        <Input type='textarea' name='text' id='weekhour' placeholder='' required />

                        <Label for='yourvalue'>What value do you think you would provide to the WildRP community</Label>
                        <Input type='textarea' name='text' id='yourvalue' placeholder='' required />

                        <Label for='bring'>If you could change something about the WildRP community, what would it be</Label>
                        <Input type='textarea' name='text' id='bring' placeholder='' required />

                        <Label for='comments'>Any other comments?</Label>
                        <Input type='textarea' name='text' id='comments' placeholder='' required />

                    </div>

                    <Recaptcha
                    sitekey="6LfHY8QUAAAAANhkFVCaUI2gl9Te5phqd5VO6WEA"
                    render="explicit"
                    theme="dark"
                    />  
                 <div><h6>By clicking on the form submission button you are hereby giving WildRP's staff team the consent to utilize any data contained within the form for the express purposes of WildRP community membership administration functions.</h6>
                    </div>   
                    <Button 
                        onClick={() => setModal1(true)}
                        className="btn-round"
                        outline
                        size="lg"
                        target="_blank"
                        style={{color:'#e4b85d', fontSize:'20px', background:'transparent', height:'55px'}}
                        >Submit
                        <img style={{width:'40px', alignItems:'center'}} src={require('../../assets/img/wheel.svg')} alt='wheel'></img>
                    </Button> 
                    <Modal isOpen={modal1} ontoggle={() => setModal1(false)} style={{color:'white'}}>
                        <div style={{backgroundColor:'#050b0b'}}>
                            
                        </div>
                        <ModalHeader className='justify-content-center' style={{backgroundColor:'#050b0b', color:'#e4b85d'}}>
                            WE GOT THE TELEGRAM
                        </ModalHeader>
                        <ModalBody className='text-center' style={{backgroundColor:'#050b0b'}}>
                         
                            <p>
                              We will be in touch via Discord
                            </p>
                        </ModalBody>
                        <ModalFooter style={{backgroundColor:'#050b0b'}}>
                        <Button
                            tag='a'
                            href='/'
                            className="justify-content-end"
                            onClick={() => setModal1(false)}
                             style={{color:'#e4b85d', background:'transparent', textDecoration:'none'}}
                            >Close
                        </Button>
                        </ModalFooter>   
                   </Modal>
           </Col>
        </Container>
        </div>   
        </div>
        <DarkFooter />
    </div>
    </>
  );
}

export default Staffapp;