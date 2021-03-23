/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, 
  Container, 
  UncontrolledTooltip,
  Row,
  Col,
 } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/cover.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">A NEW DAY</h1>
            <h1 className="h1-seo">IS DAWNING</h1>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">Get ready to ride in saints crossing</h3>
              <h5 className="description">
              WildRP is a premiere roleplay community. We aim to bring an atmosphere of high quality roleplay that encourages in-depth character development while providing a wide range of features and constant updates.
              </h5>
            </Col>
            <Col className="text-center" lg="8" md="12">
            <Button 
            className="btn-round" 
            color="default" 
            outline type="button">
                Allowlist Application
              </Button>
            </Col>
          </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
