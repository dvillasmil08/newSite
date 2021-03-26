import React from "react";

// reactstrap components
import {
  Col,
} from "reactstrap";

// core components
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import BackgroundImage from '../../assets/img/cover.jpg'
import IndexNavbar from "components/Navbars/IndexNavbar";


function Privacy() {
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
        <div className="main" >
        <div className="section" 
          style={{backgroundImage:`url(${BackgroundImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: '#050b0b',
                  color:'white'
                  
                }}>
          
           
              <Col className="ml-auto mr-auto " md="8" style={{marginTop:'8rem'}}>
                <h2 className="" >PRIVACY POLICY</h2>

                <div>
                <p><a href='/index' style={{textDecoration:'none', color:'grey'}}>HOME / </a>
                <span style={{color:'#e4b85d'}}>PRIVACY POLICY</span></p>
                </div>
                

                <h5>
                <p>WildRP.com respects the privacy of its website visitors, in particular their rights regarding the automatic processing of
                personal data. We have therefore formulated and implemented a policy on complete transparency with our customers
                regarding the processing of personal data, its purpose(s) and the possibilities to exercise your legal rights in the best possible
                way.</p>
                <p>If you require any additional information about the protection of personal data, please visit the website of the European Data
                Protection Authority <a href="https://gdpr.eu/tag/gdpr/" style={{color:'#e4b85d'}}>here. </a>
                 Until you accept the use of cookies and other tracking devices, we will not place any non-anonymised analytical cookies and
                / or tracking cookies on your computer, mobile phone or tablet.</p>
                <p>With the continued visit of this website you accept these terms of use and you accept the use of cookies and other tracking
                systems, unless we have provided for another method of accepting cookies on our website.
                The current available version of this privacy</p>
                </h5>
              </Col>
              <Col className="ml-auto mr-auto" md="8">
                <h2 >ARTICLE 1 - DEFINITIONS</h2>
                <h5 >
                <p>1. Website (hereinafter: "Website") www.WildRP.com.</p>
                <p>2. Party responsible for processing personal data (hereinafter: "the controller"): the current
                    Admin Team for WildRP</p>
                </h5>
              </Col>
              <Col className="ml-auto mr-auto" md="8">
                <h2>ARTICLE 2 - ACCESS TO THE WEBSITE</h2>
                <h5>
                <p>Access to and use of the website are strictly personal. You will refrain from using the data and information of this
                  website for your own commercial, political or advertising purposes, as well as for any commercial offers, in
                  particular unsolicited electronic offers.</p>
                
                </h5>
              </Col>
              <Col className="ml-auto mr-auto" md="8" >
                <h2 >ARTICLE 3 - WEBSITE CONTENT</h2>
                <h5 >
                <p>All brands, images, texts, comments, illustrations (animated) images, video images, sounds and all the technical
applications that can be used to operate this website and more generally all the components used on this website, are
protected by the laws on intellectual property. Any reproduction, repetition, use or modification, by any means
whatsoever, of all or just part of it, including technical applications, without the prior written permission of the
controller, is strictly prohibited. The fact that the controller may not take immediate action against any infringement,
can not be considered as a tacit consent, nor of a waiver of any right to prosecute the infringing party.</p>
                
                </h5>
              </Col>
              
              <Col className="ml-auto mr-auto" md="8">
                <h2>ARTICLE 4 - MANAGEMENT OF THE WEBSITE</h2>
                <h5>
                <p>For the purpose of proper management of the site, the controller may at any time:<br></br>
                Suspend, interrupt, reduce or decline the access to the website for a particular category of visitors<br></br>
                Delete all information that may disrupt the functioning of the website or conflicts with national or international
laws or is contrary to internet etiquette<br></br>
Make the website temporarily unavailable in order to perform updates
                
                </p>
                
                </h5>
              </Col>
              <Col className="ml-auto mr-auto" md="8">
                <h2 >ARTICLE 5 - RESPONSIBILITIES</h2>
                <h5 >
                <p>1. The controller is not liable for any failure, disturbances, difficulties or interruptions in the functioning of the website,
causing the (temporary) inaccessibility of the website or of any of its functionalities. You, yourself, are responsible
for the way you seek connection to our website. You need to take all appropriate steps to protect your equipment and
data against hazards such as virus attacks on the Internet. Furthermore, you are responsible for which websites you
visit and what information you seek.</p>
                <p>2. The controller is not liable for any legal proceedings taken against you because of the use of the website or services accessible via the Internet
for violating the terms of this privacy policy.</p>
                <p>3. The controller is not liable for any damages that incur to you or third parties or your equipment, as a result of your
connection to or use of the website and you will refrain from any subsequent (legal) action against the controller.</p>
                <p>4. If the controller is involved in a dispute because of your (ab)use of this website, he is entitled to (re)claim all
subsequent damages from you.</p>
                </h5>
              </Col>
              <Col className="ml-auto mr-auto" md="8">
                <h2 >ARTICLE 6 - COLLECTION OF DATA</h2>
                <h5>
                <p>1. Your personal data will be collected by WildRP.com.</p>
                <p>2. Personal data means any information relating to an identified or identifiable natural person (‘data subject’).</p>
                <p>3. An identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an
identifier such as a name, an identification number, location data, an online identifier or to one or more factors
specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.</p>
<p>4. The personal data that are collected on the website are used mainly by the collector in order to maintain a
(commercial) relationship with you and if applicable in order to process your orders. They are recorded in an
(electronic) register.</p>
                </h5>
              </Col>
              <Col className="ml-auto mr-auto" md="8">
                <h2>ARTICLE 7 - YOUR RIGHTS REGARDING INFORMATION</h2>
                <h5>
                <p>1. Pursuant to Article 13 paragraph 2 sub b GDPR each data subject has the right to information on and access to, and
rectification, erasure and restriction of processing of his personal data, as well as the right to object to the processing
and the right to data portability.</p>
                <p>2. You can exercise these rights by contacting us at privacy@wildrp.com.</p>
                <p>3. Each request must be accompanied by a copy of a valid ID, on which you put your signature and state the address
where we can contact you.</p>
                <p>4. Within one month of the submitted request, you will receive an answer from us.</p>
                <p>5. Depending on the complexity and the number of the requests this period may be extended to two months.</p>
                </h5>
              </Col>
              <Col className="ml-auto mr-auto" md="8">
                <h2>ARTICLE 8 - LEGAL OBLIGATIONS</h2>
                <h5>
                <p>Random Deathmatch is the act of intentionally harming another character without any attempted 
				form of roleplay interaction.</p>
                </h5>
              </Col>
              <Col className="ml-auto mr-auto" md="8">
                <h2>ARTICLE 9 - COLLECTED DATA AND COMMERCIAL OFFERS</h2>
                <h5>
                <p>1. In case of infringement of any law or regulation, of which a visitor is suspected and for which the authorities require
the personal data collected by the collector, they will be provided to them after an explicit and reasoned request of
those authorities, after which these personal data do not fall anymore under the protection of the provisions of this
Privacy policy.</p>
                <p>If any information is necessary in order to obtain access to certain features of the website, the controller will indicate
the mandatory nature of this information when requesting these data.</p>
                </h5>
              </Col>
              <Col className="ml-auto mr-auto" md="8">
                <h2>ARTICLE 10 - DATA RETENTION</h2>
                <h5>
                <p>The collected data are used and retained for the duration determined by law.</p>
                
                </h5>
              </Col>
              <Col className="ml-auto mr-auto" md="8">
                <h2>ARTICLE 11 - COOKIES</h2>
                <h5>
                <p>1. A cookie is a small text file placed on the hard drive of your electronic device upon visiting our website. A cookie
contains data so you can be recognized as a visitor when you are visiting our website. It enables us to adjust to your
needs and it facilitates you to log in on our website. When you visit our website, we inform you about the use of
cookies. By continuing to use our website you accept its use, unless we ask permission by other means. Your consent
is valid for a period of thirteen months.</p>
                <p>2. We use the following types of cookies on our website:</p>
                <p>- Functional cookies: like session and login cookies to collect session and login information.</p>
                <p>- Anonymised Analytic cookies: to obtain information regarding the visits to our website, like numbers of visitors,
popular pages and topics. In this way we can adjust our communication and information to the needs of our visitors.
We can not see who visits our sites or from which personal device the visit has taken place.</p>
                <p>3. Specifically, we use the following cookies on our website:</p>
                <p>- No other cookies</p>
                <p>4. When you visit our website, cookies from the controller and / or third parties may be installed on your equipment.</p>

                </h5>
              </Col>
              <Col className="ml-auto mr-auto " md="8">
                <h2>ARTICLE 12 - IMAGERY AND PRODUCTS OFFERED</h2>
                <h5>
                <p>You cannot derive any rights from the imagery that accompanies any offered product on our website.</p>                
                </h5>
              </Col>
              <Col className="ml-auto mr-auto " md="8">
                <h2>ARTICLE 13 - APPLICABLE LAW</h2>
                <h5>
                <p>These conditions are governed by Dutch law. The court in the district where the collector has its place of business has
the sole jurisdiction if any dispute regarding these conditions may arise, save when a legal exception applies.</p>
                </h5>
              </Col>
              <Col className="ml-auto mr-auto " md="8">
                <h2>ARTICLE 14 - CONTACT</h2>
                <h5>
                <p>For questions, product information or information about the website itself, please contact: Privacy departement of
WildRP, privacy@wildrp.com.</p>
                </h5>
              </Col> 
              </div>
            
              
          </div>
        </div>
        <DarkFooter />
        
    </>
  );
}

export default Privacy;