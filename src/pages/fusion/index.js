import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";

export const Fusion = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> CAD Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
              <div className="po_item">
                <iframe src="https://myhub.autodesk360.com/ue2a2471b/shares/public/SH30dd5QT870c25f12fc11d6d65fee647db6?mode=embed" width="300" height="300" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>
              </div>
              <div className="po_item">
                <iframe src="https://myhub.autodesk360.com/ue2a2471b/shares/public/SH30dd5QT870c25f12fc22f09d580bc47b44?mode=embed" width="300" height="300" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>
              </div>
              <div className="po_item">
                <iframe src="https://myhub.autodesk360.com/ue2a2471b/shares/public/SH30dd5QT870c25f12fcfb0f171ab0602245?mode=embed" width="300" height="300" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"  frameborder="0"></iframe>
              </div>
        </div>
        
      </Container>
    </HelmetProvider>
  );
};


