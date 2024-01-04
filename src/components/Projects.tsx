import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GitHub} from "react-feather";
import { getAllProjectData } from "@/pages/api/hello";

const allProjects = getAllProjectData();

const Projects: React.FC = () => {
  return (
    <section className="blocks" id="work">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <hr className="col-3 mb-5 mx-0" />
          <h2 className="mb-md-5 mb-3">0.2. Some Things I&lsquo;ve Done</h2>

          {allProjects.map((project, index: number) => {
            return (
              <Row className="project" key={project.id}>
                <Col xs={{ order: "last" }} sm={7} md={{ order: index % 2 ? "last" : "first" }}>
                  <div className="project-image">
                    <Link href={project.url}>
                      <div className="img">
                        <Image
                          src={project.img_url}
                          alt={project.title}
                          width={750}
                          height={750}
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </Col>
                <Col sm={5} className="project-content">
                  <h3 className="project-title mb-3 mt-3">
                    <a href={project.url}>{project.title}</a>
                  </h3>
                  <div className="project-description">
                    {project.description}
                  </div>
                  <ul className="project-tech-list">
                    {project.tech.map((g, index: number) => {
                      return <li key={index}>{g}</li>;
                    })}
                  </ul>
                  <div className="project-links">
                    <a
                      href={project.git}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <GitHub size={18} />
                    </a>
                    <a
                      href={project.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    </section>
  );
};

export default Projects;
