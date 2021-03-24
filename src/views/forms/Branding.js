import React from "react";

// reactstrap components
import {
  Container,
  Col,
Table} from "reactstrap";

// core components
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import BackgroundImage from '../../assets/img/cover.jpg'
import IndexNavbar from "components/Navbars/IndexNavbar";
import Recaptcha from 'react-recaptcha';


function Branding() {
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
        <div className="section" style={{backgroundImage:`url(${BackgroundImage})`}}>
        <Container>
        <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
                <h2 className="" style={{color:'white'}}>BRANDING</h2>

                <div>
                <p><a href='/index' style={{textDecoration:'none', color:'grey'}}>HOME / </a>
                <span style={{color:'#e4b85d'}}>BRANDING</span></p>
                </div>

                
                <h4 className="" style={{color:'white'}}>We are keen on keeping things in high quality, so if you are gonna use our art for something, please
                keep it tasteful, you can download our artwork below.
                </h4>
               
        </Col>
        
            
                
        
        {/* SECOND PART */}
        <Col className="ml-auto mr-auto " md="12" style={{color:'white'}}>
               
                
                    <div>
                    {/* <p>Streamer Package<a href="/branding-dir/wildrp_streamer.zip">Download File</a></p> */}
                    <p>Logo White<a style={{color:'#e4b85d'}} href="../../assets/branding-dir/logo.zip">Download File</a></p>
                    <p>Logo Print White<a style={{color:'#e4b85d'}} href="/branding-dir/logo-print.zip">Download File</a></p>
                    <p>Icon 24 x 24 (W)<a style={{color:'#e4b85d'}} href="/branding-dir/24x24.zip">Download File</a></p>
                    <p>Icon 48 x 48 (W)<a style={{color:'#e4b85d'}} href="/branding-dir/48x48.zip">Download File</a></p>
                    
                    
                    <p>Icon 96 x 96 (W)<a style={{color:'#e4b85d'}} href="../../assets/img/branding-dir/96x96-W.png" >Download File</a></p>
                    
                    
                    <p>Icon 144 x 144 (W)<a style={{color:'#e4b85d'}} href="/branding-dir/144x144.zip">Download File</a></p>
                    <p>Icon 192 x 192 (W)<a style={{color:'#e4b85d'}} href="/branding-dir/192x192.zip">Download File</a></p>
                    <p>Icon 512 x 512 (W)<a style={{color:'#e4b85d'}}href="/branding-dir/512x512.zip">Download File</a></p>
                    <p>Icon 1000 x 1000 (W)<a style={{color:'#e4b85d'}} href="/branding-dir/1000x1000.zip">Download File</a></p>

                    <p>Logo Black<a style={{color:'#e4b85d'}} href="/branding-dir/logo.zip">Download File</a></p>
                    <p>Logo Print Black<a style={{color:'#e4b85d'}} href="/branding-dir/logo-print.zip">Download File</a></p>
                    <p>Icon 24 x 24 (B)<a style={{color:'#e4b85d'}} href="/branding-dir/24x24.zip">Download File</a></p>
                    <p>Icon 48 x 48 (B)<a style={{color:'#e4b85d'}} href="/branding-dir/48x48.zip">Download File</a></p>
                    <p>Icon 96 x 96 (B)<a style={{color:'#e4b85d'}} href="/branding-dir/96x96.zip">Download File</a></p>
                    <p>Icon 144 x 144 (B)<a style={{color:'#e4b85d'}} href="/branding-dir/144x144.zip">Download File</a></p>
                    <p>Icon 192 x 192 (B)<a style={{color:'#e4b85d'}} href="/branding-dir/192x192.zip">Download File</a></p>
                    <p>Icon 512 x 512 (B)<a style={{color:'#e4b85d'}} href="/branding-dir/512x512.zip">Download File</a></p>
                    <p>Icon 1000 x 1000 (B)<a style={{color:'#e4b85d'}} href="/branding-dir/1000x1000.zip">Download File</a></p>
                    
                    
                    <Table borderless className= 'justify-content-center'>
                  <tbody>
                    <tr>
                      <th><a href='../../assets/branding-dir/logo.zip' style={{textDecoration:'none', color:'#e4b85d'}}>Logo White</a></th>
                      <th><a href='' style={{textDecoration:'none', color:'#e4b85d'}}>192 x 192 (w)</a></th>
                      <th><a href='' style={{textDecoration:'none', color:'#e4b85d'}}>48 x 48 (B)</a></th>
                    
                    
                    
                    </tr>
                    <tr>
                      <th><a href='https://py.pl/aSFZb' style={{textDecoration:'none', color:'#e4b85d'}}>24 x 24 (W)</a></th>
                      <th><a href='https://py.pl/1LTaol' style={{textDecoration:'none', color:'#e4b85d'}}>1000 x 1000 (W)</a></th>
                      <th><a href='' style={{textDecoration:'none', color:'#e4b85d'}}> 144 x 144 (B) </a></th>
                    </tr>
                    <tr>
                      <th><a href='https://py.pl/1ciVfH' style={{textDecoration:'none', color:'#e4b85d'}}>48 x 48 (W)</a></th>
                      <th><a href='https://py.pl/qgMTl' style={{textDecoration:'none', color:'#e4b85d'}}>Logo black</a></th>
                      <th> <a href='' style={{textDecoration:'none', color:'#e4b85d'}}>192 x 192 B</a></th>
                    </tr>
                    <tr>
                      <th><a href='https://py.pl/5ysu9' style={{textDecoration:'none', color:'#e4b85d'}}>96 x 96 (W)</a></th>
                      <th>Logo<a href='https://py.pl/eehFz'style={{textDecoration:'none', color:'#e4b85d'}} >Logo Print Black</a></th>
                      <th>Logo <a href='' style={{textDecoration:'none', color:'#e4b85d'}}> 512 x 512 (B)</a></th>
                    </tr>
                    <tr>
                      <th>Logo<a href='https://py.pl/QNNA3zOV4m' style={{textDecoration:'none', color:'#e4b85d'}}>144 x 144 (W)</a></th>
                      <th>Logo<a href='https://py.pl/fIqHn'style={{textDecoration:'none', color:'#e4b85d'}} >24 x 24 (B)</a></th>
                      <th>Logo <a href='' style={{textDecoration:'none', color:'#e4b85d'}}>1000 x 1000 (B)</a></th>
                    </tr>
                    <tr>
                      <th>Logo<a href='https://py.pl/QNNA3zOV4m' style={{textDecoration:'none', color:'#e4b85d'}}>192 x 192 (W)</a></th>
                      <th>Logo<a href='https://py.pl/fIqHn'style={{textDecoration:'none', color:'#e4b85d'}} >48 x 48 (B)</a></th>
                      <th>Logo <a href='' style={{textDecoration:'none', color:'#e4b85d'}}>Download File</a></th>
                    </tr>
                  </tbody>
              </Table>
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
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

export default Branding;