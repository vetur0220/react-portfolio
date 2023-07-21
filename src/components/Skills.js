import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                <br />主要使用JavaScript、Vue3 開發前端頁面，使用.Net 5 開發API並撰寫Stored Procedure
                <br />在SideProject、接案專案上使用過了Electron, React.js作為開發工具
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter2} alt="80%" />
                  <h5>Vue</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="90%" />
                  <h5>Javascirpt</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="50%" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="95%" />
                  <h5>.NET</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="80%" />
                  <h5>MSSQL</h5>
                </div>


              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="colorSharp" />
    </section >
  )
}
