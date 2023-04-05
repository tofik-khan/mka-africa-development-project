import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <div
      className="w-100 py-5"
      style={{ backgroundColor: "#042c3d", color: "white" }}
    >
      <Container>
        <Row className=" justify-content-center justify-content-lg-between align-items-center text-center text-lg-left">
          <Col
            sm="12"
            md="auto"
            className="order-last order-lg-first mt-4 mt-lg-0"
          >
            <a href="https://mkausa.org">
              <img src="/images/mka-logomark.svg" width={200} />
            </a>
            <div className="py-2 text-italic text-muted">
              &copy; MKA USA 2023. All rights reserved
            </div>
          </Col>
          <Col sm="12" md="auto" className="order-first order-lg-last">
            <div
              className="py-2"
              style={{
                fontFamily: "'Noto Nastaliq Urdu', serif;",
              }}
            >
              قوموں کی اصلاح نوجوانوں کی اصلاح کے بغیر نہیں ہو سکتی
            </div>
            <div>
              Nations cannot be reformed without the reformation of the youth
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
