import React from "react";

// reactstrap components
import {
  Button,
  Input,
  Container,
  Col,
  Label, 
  Media, 
  Modal, ModalBody, ModalFooter, Form} from "reactstrap";

// core components
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import BackgroundImage from '../../assets/img/cover.jpg';
import IndexNavbar from "components/Navbars/IndexNavbar";
import Recaptcha from 'react-recaptcha';
import ModalHeader from "reactstrap/lib/ModalHeader";
import FormGroup from "reactstrap/lib/FormGroup";
import {sendMessage} from '../../components/DiscordHook';



function Allowlist() {
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
function wordCounter(val){
    
    console.log(val.split(" ").length)
}
    // submit modal
    const [modal1, setModal1] = React.useState(false);
    
    // submit form to discord
function submitForm(event){
        event.preventDefault();
        console.log(event.target.discordId.value)
        const params = {
            username: 'Allowlist Application',
            avatar_url:'',
            content:'',
            embeds:
            [
                {
                    title: '**Allowlist Application**',
                    description: 'If this message does not have reactions underneath, it will need to be reviewed by staff members. Please use attached file for submitted form values.',
                    color: Math.floor(Math.random() * 16777214) + 1, 
                fields:[
                {
                    name: 'Discord ID',
                    value: event.target.discordId.value,
                    inline: true
                },
                {
                    name: 'Steam ID',
                    value: event.target.steamId.value,
                    inline: true 
                }, 
                {
                    name: 'Twitch',
                    value: event.target.twitchFacebook.value,
                    inline: true 
                },
                {
                    name: 'Mic',
                    value: event.target.mic.value,
                    inline: true 
                },
                {
                    name: 'When is it okay to OOC',
                    value: event.target.ooc.value,
                    inline: true 
                },
                {
                    name: 'What is RDM',
                    value: event.target.rdm.value,
                    inline: true 
                },
                {
                    name: 'What is metagaming',
                    value: event.target.metagaming.value,
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
        <div className="main " >
        <div className="section "
        style={{backgroundImage:`url(${BackgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#050b0b'
                }}>
                    
        <Container>
        <Col className="ml-auto mr-auto " md="12" >
        <h2 style={{color:'white', marginTop:'8rem'}}>ALLOWLIST APPLICATION</h2>
               
                {/* Breadcrumb */}
                <div>
                <p><a href='/' 
                style={{textDecoration:'none', color:'grey'}}
                >HOME / </a>
                <span style={{color:'#e4b85d'}}>ALLOWLIST APPLICATION</span></p>
                </div>
                
                <Media style={{padding:'15px', color:"white", border:'1px solid', borderColor:'#e4b85d', backgroundColor: 'rgba(129, 97, 35, 0.1)'}}>
                    <Media left>
                        <Media object src={require('../../assets/img/stamp.png')} style={{width:'50px', marginRight:'10px'}} atl='stamp'/>
                    </Media>
                        <Media body>
                        <p>We are currently accepting new whitelist applications, fill out our form with as
                        much detail as possible to have the best chance at being accepted. To be eligible for whitelist,
                        you <b>MUST</b> be a member of our community <b><a style={{color:'#e4b85d', textDecoration:'none'}} href="https://discord.gg/wildrp">Discord</a></b>,
                        have microphone suitable for voice-based roleplay, and be 18+</p>
                        </Media>
                </Media>

        </Col>
        <Form onSubmit={submitForm}>

        <FormGroup>

            <Col
            className="ml-auto mr-auto " md="12">
            <h3 className="" style={{color:'white',marginTop:'3rem'}}>GENERAL QUESTIONS</h3>
                {/* DISCORD */}
                <div>
                    <Input 
                    type='field' 
                    name='text' 
                    id='discordId' 
                    placeholder='Discord ID Name#1234' required/>
                    
                </div>
            
            
                {/* Steam 64 ID */}
                <div><Input 
                type='field' 
                name='text' 
                id='steamId' 
                placeholder='Steam 64 ID (https://steamidfinder.com)' required/></div>
            
            
                {/* Twitch/FB */}
                <div><Input 
                type='field' 
                name='text' 
                id='twitchFacebook' 
                placeholder='Twitch / Facebook' required/></div>
            
            
                {/* Time Zone */}
                <div><Input 
                type='field' 
                name='text' 
                id='timeZone' 
                placeholder='Time Zone'required />
                <br></br>
                </div>
            </Col>
            
        
                {/* SECOND PART */}
                <Col className="ml-auto mr-auto " md="12" style={{color:'#bfc1c0'}}>
                <Media style={{padding:'15px', color:"white", border:'1px solid', borderColor:'#e4b85d', backgroundColor: 'rgba(129, 97, 35, 0.1)'}}>
                    <Media left>
                        <Media object src={require('../../assets/img/stamp.png')} style={{width:'50px', marginRight:'10px'}} atl='stamp'/>
                    </Media>
                        <Media body>
                            <p style={{fontWeight:'bold'}}>WildRP has a set standard of roleplay that we expect from our whitelisted members.</p>
                            <p>While not required, submitting media showcasing your roleplaying ability will greatly assist the staff team in evaluating your application. Here are a few examples:</p>
                            <p>- Voice Acting Reel</p>
                            <p>- Roleplaying Compilation Video</p>
                            <p>- Narration or Monologue</p>
                            <p>You may also submit links to other forms of media not listed. Twitch clips will be accepted, however please be sure they are concise and representative of your roleplay.
                             Please be creative when submitting your media.</p>

                            <Label for='mediaLink'>Media Links</Label>
                            <Input type='textarea' name='text' id='mediaLink' onChange={(e) => wordCounter(e.target.value)} required />
                    
                        </Media>
                        </Media>

                    <h3 style={{color:'white', marginTop:'3rem'}}>CHARACTER BACKGROUND</h3>
    
                        <Label for='charBackground'>Character Background</Label>
                        <Input type='textarea' name='text' id='charBackground' onChange={(e) => wordCounter(e.target.value)} required />
                
                    <h3 style={{color:'white'}}>OTHER QUESTIONS</h3>
                    <Label for='media' style={{fontSize:'1rem'}}>How did you hear about WildRP (Twitter, Twitch, Google, Facebook, Referral, etc.)</Label>
                        <Input type='field' name='text' id='media' required />

                    <Label for='mic'>What kind of microphone do you use?</Label>
                        <Input type='field' name='text' id='mic' required />

                    <Label for="threeChara">Name 3 one word characteristics of a good roleplayer.</Label>
                        <Input type='field' name='text' id='threeChara' required />

                    <Label for="scenario">A sheriff, a criminal, and a civilian are all in one area. Please describe a scenario that you think would be unique, and entertaining for all three of these individuals to partake in simultaneously.</Label>
                        <Input type='textarea' name='text' id='scenario' required />
                    
                    <Label for="rpExp">Do you have past roleplay experience?</Label>
                        <Input type='textarea' name='text' id='rpExp' required />

                    <Label for="rdm">What is RDM and can you provide and example.</Label>
                        <Input type='textarea' name='text' id='rdm' required />
                        
                    <Label for="ooc">When is acceptable to break character.</Label>
                        <Input type='textarea' name='text' id='ooc' required />
                        
                    <Label for="metagaming">What is the definition of Metagaming.</Label>
                        <Input type='textarea' name='text' id='metagaming' required />

                    <Label for="banHist">Have you ever been banned from a gaming community, if so, why?.</Label>
                        <Input type='textarea' name='text' id='banHist' required />
                    
                    <Label for="powers">If you could have two super powers and had to use them hand in hand, what woukd they be and why? Also, what would be your kryptonite?</Label>
                        <Input type='textarea' name='text' id='powers' required />

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
                        style={{color:'#e4b85d', fontSize:'20px', marginBottom:'60px', background:'transparent', height:'60px', justifyContent:'center'}}
                        type='submit'
                        onClick={() => setModal1(true)}
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
           </FormGroup>
          </Form>
        </Container>
        </div>
        <DarkFooter />
    </div>
    </div>




    </>
  );
}

export default Allowlist;
