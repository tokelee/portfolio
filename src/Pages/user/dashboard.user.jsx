import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { Container } from "../../components/container.styled";
import Navbar from "../../components/Navbar/Navbar";
import { PaintGrey } from "../../components/tags/PaintGrey.styled";
import AnimatedCircle from "../../components/AnimatedCircle/AnimatedCIrcle.component";
// import Blog from "../../components/Blog/blog";
import Portfolio from "../../components/Portfolio/Portfolio";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Dashboard() {
  var i = 0;
  const text = "THE CLEVER CODER.";
  const speed = 200;

  const typeWriter = () => {
    if (i < text.length) {
      document.getElementById("my-name").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  };

  useEffect(() => {
    document.title = 'Dashboard'
    document.getElementById("my-name").innerHTML = "";
    typeWriter();
    Aos.init({duration:2000});
  });

  return (
    <Container>
      {/* NavBar Component */}
      <Navbar />

      {/* Dashboard Body */}
      <p className="this-is">
        <PaintGrey>&lt;p&gt;</PaintGrey> This is
        <PaintGrey>&lt;/p&gt;</PaintGrey>
      </p>
      <div className="dashboard_content_flex">
        <div className="my-name">
          <h1>
            <PaintGrey>&lt;h1&gt;</PaintGrey>
            <br />
            <span id="my-name"></span>
            <br />
            <PaintGrey>&lt;/h1&gt;</PaintGrey>
          </h1>
          <p style={{ fontSize: "smaller" }}>
            <PaintGrey>&lt;p&gt;</PaintGrey>Physicist, Enterpreneur and Software Developer
            <PaintGrey>&lt;/p&gt;</PaintGrey>
          </p>
        </div>

        <div className="animated-circle">
          <AnimatedCircle />
        </div>
      </div>

      {/* Portfolio Component */}
      <Portfolio/>

      
      {/* Blog Component
      <Blog/> */}

      <div data-aos="fade-up" className="contact-me">
        <h2 style={{textAlign:'center'}} className="">
          <PaintGrey>&lt;h2&gt;</PaintGrey> Connect with me
          <PaintGrey>&lt;/h2&gt;</PaintGrey>
        </h2>

        <div className="social-handles-top">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/tokelee">
            <div className="handle github small-text">
              <PaintGrey>&lt;a&gt;</PaintGrey> Github
              <PaintGrey>&lt;/a&gt;</PaintGrey>
            </div>
          </a>

          <a target="_blank" rel="noopener noreferrer" href="https://mobile.twitter.com/mrtokx">
            <div className="handle twitter small-text">
              <PaintGrey>&lt;a&gt;</PaintGrey> Twitter
              <PaintGrey>&lt;/a&gt;</PaintGrey>
            </div>
          </a>
        </div>

        <div className="social-handles-bottom">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abdullah-omotoke-95a654139">
            <div className="handle linked-in small-text">
              <PaintGrey>&lt;a&gt;</PaintGrey> Linked In
              <PaintGrey>&lt;/a&gt;</PaintGrey>
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mrtokx/">
            <div className="handle instagram small-text">
              <PaintGrey>&lt;a&gt;</PaintGrey> Instagram
              <PaintGrey>&lt;/a&gt;</PaintGrey>
            </div>
          </a>
        </div>
      </div>
    </Container>
  );
}
