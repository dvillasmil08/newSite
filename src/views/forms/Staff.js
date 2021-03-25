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
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        {/* <LandingPageHeader /> */}
        <div className="main">
        <div className="section" style={{color:'white', backgroundImage:`url(${BackgroundImage})`}}>
        <Container>
        <Col className="ml-auto mr-auto " md="12" style={{}}>
                <h2 className="" style={{marginTop:'8rem'}}>STAFF APPLICATION</h2>

                <div>
                <p><a href='/index' style={{textDecoration:'none', color:'grey'}}>HOME / </a>
                <span style={{color:'#e4b85d'}}>STAFF APPLICATION</span></p>
                </div>
                


               
                <h4 className="" style={{color:'white'}}>The Staff team at WildRP has learned that running a brand new style of total game modification roleplay community 
                        is difficult and challenging work. The team often requires more help then we have available, and may be looking for 
                        new team members to assist the community. Support Staff are the frontline of WildRP and everything we do starts with 
                        them. Support Staff must be able to adhere to the following criteria;
                        
                    <p>1. All staff members are expected to conduct themselves professionally and within WildRPs rules and guidelines at 
	                    all times when publicly representing the server and staff team.</p>

                    <p>2. All staff must be calm, strong, clear, well equipped communicators.</p>

	                <p>3. Support staff must utilize WildRP’s rules, Discord/Twitch ToS, and common sense to moderate the community.</p>

	                <p>4. All staff must prioritize server good over personal gameplay.</p>

	                <p>5. Support staff must be able to assist with WildRP’s application and interview process.</p>

	                <p>6. Support staff must be available to cover at two potential member interview time slots per week.</p> 

                    <p>If you fulfil the above criteria and are a white-listed community member in good standing and want to help out, please feel 
                        free to apply for a support staff role by filling out the application below!</p>

                        
                        </h4>
               
        </Col>
       
                <h2 className="">QUESTION #1.</h2>
            
                {/* discord id */}
                <div>
                    <Input type='field' name='text' id='discordId' placeholder='Discord ID Name#1234' required/>
                    
                </div>
            
                {/* Age */}
                <div><Input type='field' name='text' id='age' placeholder='Age' required/></div>
            
            
        {/* SECOND PART */}
        <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                <h2 className="" style={{color:'white'}}>QUESTION #2</h2>
                    <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                {/* <div style={{backgroundImage:`url(${AlertImage})`}}> */}
                    <div>
                         <Label for='position'>What kind of position would you like to apply for?</Label>
                        <Input type='field' name='text' id='position' placeholder=''required />
                    
                        <Label for='anyBan'>Have you received any warnings or bans in WildRPs discord or game servers?</Label>
                        <Input type='field' name='text' id='anyBan' placeholder='' required />
                        
                        <Label for='why'>Why are you applying for this staff position?</Label>
                        <Input type='field' name='text' id='why' placeholder='' required />
                        
                        <Label for='howLong'>How long have you been a member of the WildRP community?</Label>
                        <Input type='field' name='text' id='howLong' placeholder='' required />

                        <Label for='experience'>Explain your past experience with being a team leader, community moderator, etc</Label>
                        <Input type='field' name='text' id='experience' placeholder='' required />

                        <Label for='weekhour'>How much time would you be able to volunteer per week</Label>
                        <Input type='field' name='text' id='weekhour' placeholder='' required />

                        <Label for='example'>What value do you think you would provide to the WildRP community</Label>
                        <Input type='field' name='text' id='example' placeholder='' required />

                        <Label for='example'>If you could change something about the WildRP community, what would it be</Label>
                        <Input type='field' name='text' id='example' placeholder='' required />

                        <Label for='example'>Any other comments?</Label>
                        <Input type='field' name='text' id='example' placeholder='' required />

                    </div>

                    
                {/* </div> */}
        </Col>



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

export default Staffapp;