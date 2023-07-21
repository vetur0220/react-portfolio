import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeImg from "../assets/img/home.JPG";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toRotate = ["Full-Stack Developer", "Front-End Developer"];
  const period = 2000;
  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    };

    let ticker = setInterval(tick, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, isDeleting, loopNum, setIndex, toRotate]);


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! 我是Ash`}
                  </h1>
                  <h1>
                    <span className="txt-rotate" data-rotate='[ "Full-Stack Developer", "Front-End Developer" ]'>
                      <span className="wrap">{text}</span></span></h1>
                  <p>我是一位具有豐富全端開發經驗的工程師，擁有六年的開發經驗，另對前端技術有著更深入的研究與經驗。</p>
                  <p>在我的職業生涯中，我參與過電商平台的開發、ERP系統、客製化網站系統等專案。</p>
                  <p>我是個樂於學習和探索新的技能與知識， 擅長於團隊合作和獨立工作的一位工程師。</p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={homeImg} alt="Home Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section >
  )
}
