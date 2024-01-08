import React from "react";
import { Button, Col, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <section className="blocks  text-center" id="contact">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h2 className="mb-md-5 mb-3">0.3. What&rsquo;s Next?</h2>
          <p>Don&rsquo;t be shy! Feel free to get in touch.</p>
          <Button
            className="btn btn-primary btn-lg mt-4 mb-5"
            href="mailto:olenad@gmail.com"
            target="_blank"
          >
            Say Hello
          </Button>
        </Col>
      </Row>
    </section>
  );
}
