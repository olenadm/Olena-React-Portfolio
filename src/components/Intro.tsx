import ExamplePopover from "@/components/ExamplePopover";
import ExampleOffcanvas from "./ExampleOffcanvas";
import { Col, Row } from "react-bootstrap";

const Intro: React.FC = () => {
  return (
    <section className="h-100 intro">
      <div>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <span className="mt-md-5 d-block hi mb-3 fs-6">Hi, my name is</span>
          <h1 className="mb-2 mt-1">Olena Dmytrenko</h1>
          <h2>Experienced Front-End Developer</h2>
          <p className="fs-5 mt-4">
            Passionate about building beautiful digital experiences. <br />
            Currently, as a freelance developer, I&lsquo;m focused on building
            accessible, human-centered products.
          </p>
        </Col>
      </Row>
      <ExampleOffcanvas className="me-3 mt-3 btn-lg" />
      </div>
    </section>
  );
};

export default Intro;
