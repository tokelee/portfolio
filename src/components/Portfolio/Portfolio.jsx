import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {
  ProjectText,
  ProjectImgDiv,
  PortfolioHeading,
  PortfolioSection,
  ProjectImg,
  ProjectEdgeDivContainer,
  ProjectEdgeDivBottomLeft,
  ProjectEdgeDivBottomRight,
  ProjectEdgeDivTopLeft,
  ProjectEdgeDivTopRight,
  WireFrameClick,
  ProjectNavigator,
  PreviousProject,
  NextProject,
  NextProjectButton,
  PreviousProjectButton,
} from "./Portfolio.styled";
import { PaintGrey } from "../tags/PaintGrey.styled";
// import Project1Image from "../../assets/images/project1.png";
import Aos from "aos";
import 'aos/dist/aos.css'


const Portfolio = () => {

  useEffect(() =>{
    Aos.init({duration:2000});
  }, []);

  return (
    <>
      <PortfolioSection data-aos="fade-up">
        <PortfolioHeading>
          <PaintGrey>&lt;h2&gt;</PaintGrey> My portfolio
          <PaintGrey>&lt;/h2&gt;</PaintGrey>
        </PortfolioHeading>
        <ProjectEdgeDivContainer>
          <WireFrameClick>
            <Link to=''>Click here for wireframe</Link>
           
          </WireFrameClick>
          <ProjectEdgeDivTopLeft/>
          <ProjectEdgeDivTopRight/>
          <ProjectEdgeDivBottomRight/>
          <ProjectEdgeDivBottomLeft/>
          <ProjectImgDiv>
            <ProjectImg/>
          </ProjectImgDiv>
        </ProjectEdgeDivContainer>
        <ProjectText>
          {/* <PaintGrey>&lt;p&gt;</PaintGrey> */}

          <h3>EXPLOITER.IO</h3>
          {/* <p>
            My personal research website, where i record my new discoveries and
            archieves
          </p>
          <p>FOUNDER AND CEO</p> */}

          {/* <PaintGrey>&lt;/p&gt;</PaintGrey> */}
        </ProjectText>

        <ProjectNavigator>
<PreviousProject>
<PreviousProjectButton>
Previous Project
</PreviousProjectButton>
</PreviousProject>

<NextProject>
<NextProjectButton>
Next Project
</NextProjectButton>
</NextProject>
        </ProjectNavigator>

      </PortfolioSection>
    </>
  );
}

export default Portfolio;
