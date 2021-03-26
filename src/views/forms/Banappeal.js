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
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        {/* <LandingPageHeader /> */}
        <div className="main">
        <div className="section" style={{backgroundImage:`url(${BackgroundImage})`}}>
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
                        <Label for='brokenRule'>Why you feel you should be unbanned</Label>
                        <Input type='field' name='text' id='appealReason' placeholder=''required />
                    </div>

                    
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