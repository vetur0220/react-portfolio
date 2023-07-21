import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1_1 from "../assets/img/project/project1-1.png";
import projImg1_2 from "../assets/img/project/project1-2.png";
import projImg1_3 from "../assets/img/project/project1-3.png";
import projImg2_1 from "../assets/img/project/project2-1.png";
import projImg2_2 from "../assets/img/project/project2-2.png";
import projImg2_3 from "../assets/img/project/project2-3.png";
import projImg3_1 from "../assets/img/project/project3-1.png";
import projImg3_2 from "../assets/img/project/project3-2.png";
import projImg3_3 from "../assets/img/project/project3-3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsFirst = [
    {
      title: "Fun市集",
      description: ".Net5 | StoredProcedure | Redis | JavaScript | Jquery | Vue.js | Rxjs",
      imgUrl: projImg1_1,
      url: "https://funmart.beanfun.com/"
    },
    {
      title: "電商平台",
      description: ".Net Core 3 | Dapper | Blazor | Razer | JavaScript | Jquery",
      imgUrl: projImg1_2,
      url: "https://eight-days.com.tw/Public/Index"
    },
    {
      title: "形象網站",
      description: ".Net Core 2.2 | JavaScript | Jquery | Kendo UI | TinyMce | ContentBuilder",
      imgUrl: projImg1_3,
      url: "https://eod.com.tw/"
    }
  ];

  const projectsSecond = [
    {
      title: "客製形象網站後台",
      description: ".Net Core 2.2 | JavaScript | Jquery | Kendo UI | TinyMce | ContentBuilder",
      imgUrl: projImg2_1,
      url: ""
    },
    {
      title: "ERP客製化系統",
      description: ".Net Core 2 | Dapper | Razer | JavaScript | Jquery",
      imgUrl: projImg2_2,
      url: ""
    },
    {
      title: "客製化課程系統",
      description: ".Net Core 2.2 | Dapper | JavaScript | Jquery | Kendo UI",
      imgUrl: projImg2_3,
    }
  ];
  const projectsThird = [
    {
      title: "訂單匯入小工具",
      description: ".Net Core 2.2 | Dapper | JavaScript | Jquery | Kendo UI",
      imgUrl: projImg3_1,
      url: ""
    },
    {
      title: "檔案整理小工具",
      description: "Electron | Node.js | JavaScript",
      imgUrl: projImg3_2,
      url: ""
    },
    {
      title: "Line Bot",
      description: ".Node.js | Heroku",
      imgUrl: projImg3_3,
    }
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">專案</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">客製需求</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">個人接案</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projectsFirst.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projectsSecond.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projectsThird.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
  )
}
