import Image from "next/image";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ArrowRight } from "react-feather";

export interface ExampleOffcanvasProps {
  className?: string | undefined;
}

const ExampleOffcanvas: React.FC<ExampleOffcanvasProps> = ({ className }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <Button onClick={() => setShow((s) => !s)} className={className}>
            About me <ArrowRight/>
          </Button>
          <hr className="col-3 mt-5 mx-0" />
        </Col>
      </Row>

      <Offcanvas placement="end" show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title as="h3">About me</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div className="position-relative about mb-4">
              <div className="wrapper mx-auto">
                <Image
                  alt="Olena"
                  src="/img/Olena.jpg"
                  width={120}
                  height={120}
                />
              </div>
            </div>
            <p>
              Hi, I&lsquo;m Olena and I love creating things that live on the
              internet. I find my work relaxing and challenging at the same
              time. It is a perfect combination of certainty and variety, which
              covers all my basic human needs.
            </p>

            <p>Here are a few technologies I&lsquo;ve been working with recently:</p>
            <ul className="skills-list">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>WordPress</li>
            </ul>
            <Button href="/OlenaDmytrenko.pdf" target="_blank" rel="noopener" className="btn-primary btn mt-3">
             My Résumé <ArrowRight />
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ExampleOffcanvas;
