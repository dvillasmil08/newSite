import React from "react";

// reactstrap components
import {
  Button,
  Input,
  Container,
  Col,
  Label,
  Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup} from "reactstrap";

// core components
import DarkFooter from "components/Footers/DarkFooter.js";
import BackgroundImage from '../../assets/img/cover.jpg'
import IndexNavbar from "components/Navbars/IndexNavbar";
import Recaptcha from 'react-recaptcha';
import {sendMessage} from '../../components/DiscordHook';


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
// submit modal
const [modal1, setModal1] = React.useState(false);

// submit form to discord
function submitForm(event){
  event.preventDefault();
    console.log(event.target.discordId.value)
      const params = {
          username: 'Developer Application',
          avatar_url:'',
          content:'',
          embeds:
          [
              {
                  title: '**Developer Application**',
                  description: 'If this message does not have reactions underneath, it will need to be reviewed by staff members. Please use attached file for submitted form values.',
                  color: Math.floor(Math.random() * 16777214) + 1, 
              fields:[
              {
                  name: 'Discord ID',
                  value: event.target.discordId.value,
                  inline: true
              },
              {
                  name: 'Age',
                  value: event.target.age.value,
                  inline: true 
              }, 
              {
                  name: 'Coding Languages',
                  value: event.target.languages.value,
                  inline: true 
              },
              {
                  name: 'Hours',
                  value: event.target.hours.value,
                  inline: true 
              },
                  ]
              }
          ]
          
      }
      sendMessage(params)
  }

  return (
    
    <>
      <IndexNavbar />
      <div className="wrapper">
        {/* <LandingPageHeader /> */}
        <div className="main">
        <div className="section" 
        style={{color:'white', backgroundImage:`url(${BackgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#050b0b'}}>
        <Container>
        <Col className="ml-auto mr-auto " md="12" >
              <h2 style={{marginTop:'8rem', color:'white'}}>DEVELOPER APPLICATION</h2>
                {/* Breadcrumb */}  
                <div>
                <p><a href='/index' 
                style={{textDecoration:'none', color:'grey'}}>HOME / </a>
                <span style={{color:'#e4b85d'}}>DEVELOPER APPLICATION</span></p>
                </div>

                <p>
                  We are always on the lookout for like-minded developers to join our team and help us improve our world. If you are up to the job, please fill in the form below
                </p>     
        </Col>

        <Form onSubmit={submitForm}>
        <FormGroup>
          <Col className="ml-auto mr-auto " md="12">
                <h3 className="" style={{color:'white', marginTop:'4rem'}}>QUESTIONS #1.</h3>
            
                {/* discord id */}
                <div>
                    <Input type='field' name='text' id='discordId' placeholder='Discord ID Name#1234' required/>    
                </div>
            
                {/* Age */}
                <div>
                  <Input type='field' name='text' id='age' placeholder='Age' required/>
                </div>
        </Col>
            
        <Col className="ml-auto mr-auto " md="12" style={{color:'#bfc1c0', fontSize:'1rem', marginTop:'4rem'}}>
                <h3 className="" style={{color:'white'}}>QUESTIONS #2</h3>
                    <div>
                         <Label for='warnings'>Have you received any warnings or bans in WildRPs discord or game servers?</Label>
                        <Input type='field' name='text' id='warnings' placeholder=''required />
                    
                        <Label for='codeExp'>What experience do you have with coding and programming? Can you explain any previous projects you have worked on?</Label>
                        <Input type='textarea' name='text' id='codeExp' placeholder='' required />
                        
                        <Label for='why'>Why are you applying for this developer position?</Label>
                        <Input type='textarea' name='text' id='why' placeholder='' required />
                        
                        <Label for='languages'>What coding languages are you most comfortable with</Label>
                        <Input type='textarea' name='text' id='languages' placeholder='' required />

                        <Label for='hours'>How much time would you be able to volunteer per week (estimated)</Label>
                        <Input type='field' name='text' id='hours' placeholder='' required />

                        <Label for='teamwork'>Are you able to work well within a group setting?</Label>
                        <Input type='textarea' name='text' id='teamwork' placeholder='' required />

                        <Label for='example'>Explain features or systems in short detail, that you would like to develop if given approval?</Label>
                        <Input type='textarea' name='text' id='example' placeholder='' required />
                    </div>
                  </Col>
                      
                    <Col className="ml-auto mr-auto " md="12">
                    <Recaptcha
                    sitekey="6LfHY8QUAAAAANhkFVCaUI2gl9Te5phqd5VO6WEA"
                    render="explicit"
                    theme="dark"
                    /> 

                    <div style={{marginTop:'1rem'}}>
                      <h6>
                        By clicking on the form submission button you are hereby giving WildRP's staff team the consent to utilize any data contained within the form for the express purposes of WildRP community membership administration functions.
                        </h6>
                    </div>

                    <Button 
                        className="btn-round"
                        outline
                        size="lg"
                        target="_blank"
                        style={{color:'#e4b85d', fontSize:'20px', background:'transparent', height:'55px'}}
                        type='submit'
                        onClick={() => setModal1(true)}
                        >Submit
                        <img style={{width:'40px', alignItems:'center'}} src={require('../../assets/img/wheel.svg')} alt='wheel'></img>
                    </Button> 
                    <Modal isOpen={modal1} ontoggle={() => setModal1(false)} style={{color:'white'}}>
                        <div style={{backgroundColor:'#050b0b'}}> 
                        </div>
                        <ModalHeader className='justify-content-center' style={{backgroundColor:'#050b0b', color:'#e4b85d'}}>
                              <div style={{color:'#e4b85d'}}>
                                WE GOT THE TELEGRAM
                                </div>
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
             </FormGroup>
            </Form>
          </Container>
          </div>
        </div>
        <DarkFooter />
    </div>
    </>
  );
}

export default Devapp;