import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br />
          {url &&
            (<a href={url} target="_blank" rel="noopener noreferrer"><button className="proj-button">連結</button></a>
            )
          }
        </div>
      </div>
    </Col>
  )
}
