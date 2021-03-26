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


function Law() {
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
                <h2 className="" style={{color:'white',marginTop:'8rem'}}>LAW APPLICATION</h2>

                <div>
                <p>
                  <a href='/' style={{textDecoration:'none', color:'grey'}}>HOME / </a>
                <span style={{color:'#e4b85d'}}>LAW APPLICATION</span></p>
                </div>
                
                <Media style={{padding:'15px', color:"white", border:'1px solid', borderColor:'#e4b85d', backgroundColor: 'rgba(129, 97, 35, 0.1)'}}>
                    <Media left>
                        <Media object src={require('../../assets/img/stamp.png')} style={{width:'50px', marginRight:'10px'}} atl='stamp'/>
                    </Media>
                        <Media body>
                        <p>Law Enforcement applications are currently available for whitelisted members only.
                        Please provide as much detail as possible to the questions below as these positions will be
                        limited and in high demand, and we want to be sure this department provides satisfying roleplay
                        for our community.</p>
                        </Media>
                </Media>
              
        </Col>
        <Col className="ml-auto mr-auto " md="12">
                <h3 className="" style={{color:'white'}}>QUESTION #1</h3>
        
                {/* DISCORD */}
                <div>
                    <Input type='field' name='text' id='discordId' placeholder='Discord ID Name#1234' required/>
                    
                </div>
            
            
                {/* Steam 64 ID */}
                <div><Input type='field' name='text' id='steamId' placeholder='Steam 64 ID (https://steamidfinder.com)' required/></div>
            
            
                {/* Twitch/FB */}
                <div><Input type='field' name='text' id='twitchFacebook' placeholder='Twitch / Facebook' required/></div>
            
            
                {/* Time Zone */}
                <div><Input type='field' name='text' id='timeZone' placeholder='Time Zone'required /></div>
          </Col>
        
        {/* SECOND PART */}
        <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                <h3 className="" style={{color:'white'}}>QUESTION #2</h3>
              
                
                <div>
                        <Label for='position'>Do you have past Law Enforcement experience? If, for how long?</Label>
                        <Input type='field' name='text' id='position' placeholder=''required />
                    
                        <Label for='anyBan'>Do you have past LEO roleplay experience? If so, for how long?</Label>
                        <Input type='field' name='text' id='anyBan' placeholder='' required />
                        
                        <Label for='why'>Why should your character be hired for Law Enforncement? Who might (in character) recommend you?</Label>
                        <Input type='field' name='text' id='why' placeholder='' required />
                        
                        <Label for='howLong'>Which LEO Role are you applying for? (Sheriff, Deputy)</Label>
                        <Input type='field' name='text' id='howLong' placeholder='' required />

                        <Label for='experience'>In your role, what tasks do you expect to perform? How capable is your character of performing these tasks?</Label>
                        <Input type='field' name='text' id='experience' placeholder='' required />

                        <Label for='weekhour'>Do you plan on being corrupt in any way? If yes, what are your reasons for doing so?</Label>
                        <Input type='field' name='text' id='weekhour' placeholder='' required />

                        <Label for='example'>You have shot down the neighborhood outlaw as he was getting rowdy in the saloon and drew his weapon. What are your next steps?</Label>
                        <Input type='field' name='text' id='example' placeholder='' required />

                        <Label for='example'>When is it appropiate for you, as an LEO of the server, to shoot another player with the intention to kill them?</Label>
                        <Input type='field' name='text' id='example' placeholder='' required />

                    </div>

                    
                
        </Col>
        <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                    <Recaptcha
                    sitekey="6LfHY8QUAAAAANhkFVCaUI2gl9Te5phqd5VO6WEA"
                    render="explicit"
                    theme="dark"
                    />  

                    

                    <div>
                      <p>By clicking on the form submission button you are hereby giving WildRP's staff team the consent to utilize any data contained within the form for the express purposes of WildRP community membership administration functions.</p>
                    </div>
                    <div>
                        
                  <Button
                  className="btn-round"
                  // color="info"
                  href="https://discord.gg/kagKhnW"
                  outline
                  size="lg"
                  target="_blank"
                  style={{color:'#e4b85d', fontSize:'20px', marginBottom:'60px', background:'transparent', height:'60px', justifyContent:'center'}}
                  >Submit
                  <img style={{width:'40px', alignItems:'center'}} src={require('../../assets/img/wheel.svg')} alt='...'></img>
                  </Button>
                        
                    </div>
                
        </Col>
        </Container>
        </div>   
        </div>
        <DarkFooter />
    </div>
    </>
  );
}

export default Law;