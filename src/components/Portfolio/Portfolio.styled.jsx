import styled from "styled-components";
import img from '../../assets/images/project1.png';

export const PortfolioSection = styled.div`
    width: 100%;
`;

export const PortfolioHeading = styled.h2`
  text-align: center;
  letter-spacing: 3px;
`;

export const ProjectEdgeDivContainer = styled.div`
  position: relative;
  height: 580px;
  display: flex;

  
@media (max-width: 900px) {
  width: 100%;
  height: 400px;
}

@media (max-width: 500px) {
  width: 100%;
  height: 250px;
}
`;

// Project Edge divs

export const ProjectEdgeDivTopLeft = styled.div`
position: absolute;
border-top: 10px solid rgb(0, 255, 234);
border-left: 10px solid rgb(0, 255, 234);
width: 10%;
height:10%;
`;


export const ProjectEdgeDivTopRight = styled.div`
position: absolute;
border-top: 10px solid rgb(0, 255, 234);
border-right: 10px solid rgb(0, 255, 234);
width: 10%;
height:10%;
right: 0;
`;

export const ProjectEdgeDivBottomLeft = styled.div`
position: absolute;
border-bottom: 10px solid rgb(0, 255, 234);
border-left: 10px solid rgb(0, 255, 234);
width: 10%;
height:10%;
bottom: 0;
`;

export const ProjectEdgeDivBottomRight = styled.div`
position: absolute;
border-bottom: 10px solid rgb(0, 255, 234);
border-right: 10px solid rgb(0, 255, 234);
width: 10%;
height:10%;
bottom: 0;
right: 0;
`;

export const ProjectImgDiv = styled.div`
height: 500px;
width: 90%;
border: 3px dashed rgb(0, 255, 234);
margin: auto;
display: inherit;


@media (max-width: 900px) {
    width: 85%;
    height: 350px;
  }

  @media (max-width: 500px) {
    width: 85%;
    height: 200px;
  }
`;

export const ProjectImg = styled.div`
  width: 93%;
  margin: auto;
  height: 90%;
  border: 2px solid rgb(0, 255, 234);
  background-image: url(${img});
  background-size: cover;
`;

export const WireFrameClick = styled.div`
  width: 100%;
  height: 20px;
  position: absolute;
  bottom: 0;
  text-align: center;
  font-size: smaller;
  color: rgb(0, 255, 234);
`;

export const ProjectText = styled.div`
text-align: center;
margin-top: 20px;
`;

export const ProjectNavigator = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const PreviousProject = styled.div`
  border: thin solid rgb(0, 255, 234);
`;

export const PreviousProjectButton = styled.button`
background: none;
box-shadow: none;
color: rgb(0, 255, 234);
font-family: inherit;
border: none;
padding: 8px;

&:hover{
  background: rgb(0, 255, 234);
  color: black;
  transition: 550ms;
}

`;

export const NextProject = styled.div`
  border: thin solid rgb(0, 255, 234);
`;

export const NextProjectButton = styled.button`
background: none;
box-shadow: none;
color: rgb(0, 255, 234);
font-family: inherit;
border: none;
padding: 8px;

&:hover{
  background: rgb(0, 255, 234);
  color: black;
  transition: 550ms;
}

`;