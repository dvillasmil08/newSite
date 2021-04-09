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
import DarkFooter from "components/Footers/DarkFooter.js";
import BackgroundImage from '../../assets/img/cover.jpg'
import IndexNavbar from "components/Navbars/IndexNavbar";
import Recaptcha from 'react-recaptcha';


function Banappeal() {
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
  // Modal
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
                backgroundColor: '#050b0b'
                }}>
        <Container>
        <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                <h2 className="" style={{color:'white',marginTop:'8rem'}}>APPEAL BAN</h2>

                <div>
                <p><a href='/index' style={{textDecoration:'none', color:'grey'}}>HOME / </a>
                <span style={{color:'#e4b85d'}}>BAN APPEAL</span></p>
                </div>
                


                
                <h4 className="" style={{color:'white'}}>If you have been banned, you can appeal to get your ban lifted below, please be patient
                this
                process can take a little while.</h4>
               
        </Col>
       
        <Col className="ml-auto mr-auto " md="12">
        <h3 className="" style={{color:'white'}}>QUESTION #1.</h3>
                {/* discord id */}
                <div>
                    <Input type='field' name='text' id='discordId' placeholder='Discord ID Name#1234' required/>
                    
                </div>
            
                {/* Character name */}
                <div><Input type='field' name='text' id='charName' placeholder='Character Name' required/></div>
            
                {/* Ban ID */}
                <div><Input type='field' name='text' id='banId' placeholder='Ban ID' required/></div>
            
                {/* Date */}
                <div><Input type='field' name='text' id='date' placeholder='Date of ban'required /></div>
    
                {/* ban reason */}
                <div><Input type='field' name='text' id='banReason' placeholder='Ban Reason'required /></div>
        </Col> 

        {/* SECOND PART */}
        <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                <h3 className="" style={{color:'white'}}>QUESTION #2</h3>
               
                    <div>
                        <Label for='appealReason'>Why you feel you should be unbanned</Label>
                        <Input type='field' name='text' id='appealReason' placeholder=''required />
                    </div>

                    
                    <Recaptcha
                    sitekey="6LfHY8QUAAAAANhkFVCaUI2gl9Te5phqd5VO6WEA"
                    render="explicit"
                    theme="dark"
                    />  
                        
                    <div>
                      <h6>
                      By clicking on the form submission button you are hereby giving WildRP's staff team the consent to utilize any data contained within the form for the express purposes of WildRP community membership administration functions.
                    </h6>
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

export default Banappeal;