import { SocailIcon } from "./SocailIcon";
import { Container, Row, Col } from "react-bootstrap";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <SocailIcon></SocailIcon>
            <p>2023. Ash Su</p>
          </Col>
        </Row>
      </Container>
    </footer >
  )
}
