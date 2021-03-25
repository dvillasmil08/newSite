import React from "react";

// reactstrap components
import {
  Button,
  Input,
  Container,
  Col,
  Label, Media} from "reactstrap";

// core components
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import BackgroundImage from '../../assets/img/cover.jpg';
import IndexNavbar from "components/Navbars/IndexNavbar";
import Recaptcha from 'react-recaptcha';

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

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="main " >
        <div className="section "style={{backgroundImage:`url(${BackgroundImage})`}} >
        <Container>
        <Col className="ml-auto mr-auto " md="12" >
        <h2 className="" style={{color:'white', marginTop:'8rem'}}>Allowlist Application</h2>
               
                {/* Breadcrumb */}
                <div>
                <p><a href='/index' 
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

                <h2 
                className="" style={{color:'white'}}
                >GENERAL QUESTIONS</h2>
        </Col>
        
            <Col
            className="ml-auto mr-auto " md="12"
            
            >
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
                <Col className="ml-auto mr-auto " md="12">
                <Media style={{padding:'15px', color:"white", border:'1px solid', borderColor:'#e4b85d', backgroundColor: 'rgba(129, 97, 35, 0.1)'}}>
                    <Media left>
                        <Media object src={require('../../assets/img/stamp.png')} style={{width:'50px', marginRight:'10px'}} atl='stamp'/>
                    </Media>
                        <Media body>
                            <p style={{fontWeight:'bold'}}>WildRP has a set standard of roleplay that we expect from our whitelisted members.</p>
                            <p>Please submit some sort of media that showcases your roleplaying ability. Here are a few examples:</p>
                            <p>- Voice Acting Reel</p>
                            <p>- Roleplaying Compilation Video</p>
                            <p>- Narration or Monologue</p>
                            <p>You may also submit links to other forms of media not listed. Twitch clips will be accepted, however please be sure they are concise and representative of your roleplay.
                             Please be creative when submitting your media.</p>
                    
                    <h2 className="" style={{color:'white'}}>CHARACTER BACKGROUND</h2>
    
                        <Label for='charBackground'>Character Background</Label>
                        <Input type='field' name='text' id='charBackground' onChange={(e) => wordCounter(e.target.value)} required />
                
                    <h2 className="" style={{color:'white'}}>OTHER QUESTIONS</h2>
                    <Label>How did you hear about WildRP (Twitter, Twitch, Google, Facebook, Referral, etc.)</Label>
                        <Input type='field' name='text' id='charBackground' required />

                    <p className="">Name 3 one word characteristics of a good roleplayer.</p>
                        <Input type='field' name='text' id='charBackground' required />

                    <p className="">A sheriff, a criminal, and a civilian are all in one area. Please describe a scenario that you think would be unique, and entertaining for all three of these individuals to partake in simultaneously.</p>
                        <Input type='field' name='text' id='charBackground' required />
                    
                    <p className="">Do you have past roleplay experience?</p>
                        <Input type='field' name='text' id='charBackground' required />

                    <p className="">What is RDM and can you provide and example.</p>
                        <Input type='field' name='text' id='charBackground' required />
                        
                    <p className="">When is acceptable to break character.</p>
                        <Input type='field' name='text' id='charBackground' required />
                        
                    <p className="">What is the definition of Metagaming.</p>
                        <Input type='field' name='text' id='charBackground' required />
                    
                    <p className="">If you could have two super powers and had to use them hand in hand, what woukd they be and why? Also, what would be your kryptonite?</p>
                        <Input type='field' name='text' id='charBackground' required />


                    
                    <Recaptcha
                    sitekey="6LfHY8QUAAAAANhkFVCaUI2gl9Te5phqd5VO6WEA"
                    render="explicit"
                    theme="dark"
                    />  
                        
                    <div><p>By clicking on the form submission button you are hereby giving WildRP's staff team the consent to utilize any data contained within the form for the express purposes of WildRP community membership administration functions.</p>
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




                    </div>
 
        
        
                            </Media>
                    </Media>
        </Col>
        </Container>
        </div>
        <DarkFooter />
    </div>
    </div>
    </>
  );
}

export default Allowlist;
