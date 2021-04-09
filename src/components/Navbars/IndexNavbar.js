import React from "react";

// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  Modal,
  ModalBody,
  Table
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [modal1, setModal1] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 19 ||
        document.body.scrollTop > 19
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 20 ||
        document.body.scrollTop < 20
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} 
      color="info" expand="lg"
      >
          <Container>
        <div className="navbar-translate">
            <NavbarBrand
              href="/"
              id="navbar-brand"
            >
            <img  alt="..." src={require("../../assets/img/logo-white.png")} width='100'></img>  
            {/* <DropdownToggle nav className='dropbtn top-button-show'  style={{color:'#e4b85d', fontSize:'15px', textDecoration:'none'}}>
              MENU
          </DropdownToggle> */}
            </NavbarBrand>
      
          </div>
          <UncontrolledDropdown className="button-dropdown">
          <DropdownToggle nav className='dropbtn top-button-show'  style={{color:'#e4b85d', fontSize:'15px', textDecoration:'none'}}>
              MENU
          </DropdownToggle>

            <DropdownMenu aria-labelledby="navbarDropdown" style={{backgroundColor:'#000', color:'#fff'}}>
              <DropdownItem 
              tag='a' 
              href='https://storage.googleapis.com/wildrp-launcher-downloads/WildRPLauncherSetup.exe'
              style={{color:'#e4b85d', textDecoration:'none'}}
              >Download Launcher
              </DropdownItem>
              <DropdownItem divider></DropdownItem>

              <DropdownItem tag='a' href='/allowlist'>Allowlist</DropdownItem>
              <DropdownItem tag='a' href='/staff'>Staff</DropdownItem>
              <DropdownItem tag='a' href='/developer'>Developer</DropdownItem>
              <DropdownItem tag='a' href='/law'>Law Enforcement</DropdownItem>         
                          
              <DropdownItem divider></DropdownItem>
                          
              <DropdownItem tag='a' href='/bug'>Bug Report</DropdownItem>
              <DropdownItem tag='a' href='/report'>Report Player</DropdownItem>
              <DropdownItem tag='a' href='/appeal'>Ban Appeal</DropdownItem>
              
              <DropdownItem divider></DropdownItem>

              
              <DropdownItem tag='a' href='/branding'>Branding</DropdownItem>

              <DropdownItem divider></DropdownItem>
                          
              {/* <DropdownItem tag='a' href='/privacy'>Privacy Policy</DropdownItem> */}

              <DropdownItem tag='a' href='/rules'>Rules</DropdownItem>

              <Modal isOpen={modal1} toggle={() => setModal1(false)}
              style={{color:'gray'}}
              >
                <div className="modal-header justify-content-center" style={{backgroundColor:'#050b0b'}}>
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                    >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h7 className="title text-center">
                  Giving money to the server is never required but greatly appreciated. Any money sent will be used help us cover server costs.
                  Donations will open a channel where you can voice your suggestions to the server and it will NOT accelerate your application.
                  If you would like to help cover those costs you can send money via Paypal to Donations@wildrp.com.<br></br><br></br>
                  To sign up for a monthly subscription use the links below: 

                  </h7>
                </div>
                <ModalBody style={{backgroundColor:'#050b0b'}}>
                <Table borderless className= 'justify-content-center' >
                  <tbody style={{textAlign:'center'}}>
                    <tr>
                      <th><a href='https://py.pl/1F4tPfiddgM' style={{textDecoration:'none', color:'#e4b85d'}}>$5 USD</a></th>
                      <th><a href='https://py.pl/3z5RF' style={{textDecoration:'none', color:'#e4b85d'}}>$30 USD</a></th>
                    </tr>
                    <tr>
                      <th><a href='https://py.pl/aSFZb' style={{textDecoration:'none', color:'#e4b85d'}}>$10 USD</a></th>
                      <th><a href='https://py.pl/1LTaol' style={{textDecoration:'none', color:'#e4b85d'}}>$40 USD</a></th>
                    </tr>
                    <tr>
                      <th><a href='https://py.pl/1ciVfH' style={{textDecoration:'none', color:'#e4b85d'}}>$15 USD</a></th>
                      <th><a href='https://py.pl/qgMTl' style={{textDecoration:'none', color:'#e4b85d'}}>$50 USD</a></th>
                    </tr>
                    <tr>
                      <th><a href='https://py.pl/5ysu9' style={{textDecoration:'none', color:'#e4b85d'}}>$20 USD</a></th>
                      <th><a href='https://py.pl/eehFz'style={{textDecoration:'none', color:'#e4b85d'}} >$75 USD</a></th>
                    </tr>
                    <tr>
                      <th><a href='https://py.pl/QNNA3zOV4m' style={{textDecoration:'none', color:'#e4b85d'}}>$25 USD</a></th>
                      <th><a href='https://py.pl/fIqHn'style={{textDecoration:'none', color:'#e4b85d'}} >$100 USD</a></th>
                    </tr>
                  </tbody>
              </Table>
                </ModalBody>
                <div className="modal-footer justify-content-md-center text-center" style={{backgroundColor:'#050b0b'}}>
                  <h7 className="title text-center">
                  If you have subscribed monthly and wish to cancel your subscription you must do so through the 
                  <a href='https://www.paypal.com/us/smarthelp/article/how-do-i-cancel-a-billing-agreement,-automatic-recurring-payment-or-subscription-on-paypal-faq2254'
                  style={{textDecoration:'none', color:'#e4b85d'}}> Paypal website.</a>
                  </h7>
                </div>
              </Modal>

            </DropdownMenu>
          </UncontrolledDropdown>
            
          <div className="navbar-translate">
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            // isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                tag='a' 
                href='https://www.merchgardens.com/collections/WildRP'
                id='merch-tooltip'
                >
                <i className="fas fa-tshirt" style={{fontSize:'15px'}}></i>
                <p className="d-lg-none d-xl-none">Merchandise</p>
                {/* <li className="nav-item">Merch</li> */}
                </NavLink>
                <UncontrolledTooltip target="#merch-tooltip">Store</UncontrolledTooltip>
              </NavItem>
              
              <NavItem>
              <NavLink
                className="mr-1"
                onClick={() => setModal1(true)}
                id='donate-tooltip'
                >
                {/* <i className="fab fa-cc-paypal" style={{fontSize:'15px'}}></i>
                <i className="fas fa-comment-dollar" style={{fontSize:'20px'}}></i> */}
                <i class="fas fa-donate"style={{fontSize:'20px'}}></i>
                <p className="d-lg-none d-xl-none"> Donate</p>
                </NavLink>
                <UncontrolledTooltip target="#donate-tooltip">Donate</UncontrolledTooltip>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://twitter.com/WildRPofficial"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.youtube.com/channel/UCAfpEZ4Ffb8i1sqYHDLijXA"
                  target="_blank"
                  id="youtube-tooltip"
                >
                  <i className="fab fa-youtube-square"></i>
                  <p className="d-lg-none d-xl-none">Youtube</p>
                </NavLink>
                <UncontrolledTooltip target="#youtube-tooltip">
                  Like & Subscribe on Youtube
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://discord.gg/kagKhnW"
                  target="_blank"
                  id="discord-tooltip"
                >
                  <i className="fab fa-discord"></i>
                  <p className="d-lg-none d-xl-none">Discord</p>
                </NavLink>
                <UncontrolledTooltip target="#discord-tooltip">
                  Join us in Discord
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default IndexNavbar;
