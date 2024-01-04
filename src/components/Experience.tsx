import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import SubItem from "./SubItem";
import { getAllExperienceData } from "@/pages/api/hello";

const allExperience = getAllExperienceData();

const Experience: React.FC = () => {
  return (
    <section className="blocks content content--layout content--layout-1" id="experience">
    <div className="mx-lg-5" >
      <h2 className="mb-5">0.1. Where I&lsquo;ve Worked</h2>

      <Tab.Container id="left-tabs-example" defaultActiveKey="0">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {allExperience.map((experience) => {
                return (
                  <Nav.Item key={experience.id}>
                    <Nav.Link eventKey={`${experience.id}`}>{experience.title}</Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {allExperience.map((experience) => {
                return (
                  <Tab.Pane eventKey={experience.id} key={experience.id}>
                    <SubItem item={experience.content} key={experience.id} />
                  </Tab.Pane>
                );
              })}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
    </section>
  );
};

export default Experience;
