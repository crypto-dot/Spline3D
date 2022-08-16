import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import IconLaptop from "./assets/icon-laptop.svg";
import IconLogo from "./assets/logo.svg";
import IconTwitter from "./assets/icon-twitter.svg";
import IconYoutube from "./assets/icon-youtube.svg";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/d3oI4k2G90CQuxoz/scene.splinecode"
      />

      <Content>
        <Menu>
          <li>
            <img src={IconLogo} alt="logo" />
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Download</a>
          </li>
          <li>
            <a href="">App</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <button>Get Started</button>
          </li>
        </Menu>
        <h1>Collaborate With People</h1>
        <p>
          Bring your team together and build your community by using our
          cross-platform app that lets you collaborate via chat, voice and by
          sharing and storing unlimited media files. A world of topics is
          waiting for you. Join the private beta.Bring your team together and
          build your community by using our cross-platform app that lets you
          collaborate via chat, voice and by sharing and storing unlimited media
          files. A world of topics is waiting for you. Join the private beta.
        </p>
        <button>
          {" "}
          <img src={IconLaptop} alt="download" />
          Download for Mac
        </button>
      </Content>
      <Social>
        <div />
        <img src={IconYoutube} />
        <img src={IconTwitter} />
      </Social>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 1rem;
  color: white;
  position: relative;
  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(500px);
    }
    @media (max-width: 750px) {
      transform: scale(0.5) translateX(675px) translateY(-450px);
    }
    @media (max-width: 650px) {
      transform: scale(0.45) translateX(675px) translateY(-450px);
    }
    @media (max-width: 500px) {
      transform: scale(0.45) translateX(775px) translateY(-450px);
    }
    @media (max-width: 430px) {
      transform: scale(0.45) translateX(875px) translateY(-450px);
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(975px) translateY(-450px);
    }
    @media (max-width: 330px) {
      transform: scale(0.45) translateX(1075px) translateY(-450px);
    }
    @media (max-width: 290px) {
      transform: scale(0.45) translateX(1175px) translateY(-450px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-family: "Spline Sans", sans-serif;
    font-weight: Bold;
    font-size: 4.5rem;
    margin: 0;
    max-width: 500px;
    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }
  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
    @media (max-width: 750px) {
      max-width: 300px;
    }
  }
  h1,
  p,
  button {
    margin: 0 2rem 0 6.25rem;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
  button {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    max-width: 280px;
    font-size: 1rem;
    padding: 0.8rem 2rem;
    border-radius: 0.9rem;
    color: white;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s;
    :hover {
      border: 1px solid rgba(255, 255, 255, 0.4);
      transform: translateY(-5px);
    }
  }
`;
const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin: 0 2rem 0 6.25rem;
  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  li {
    list-style: none;
    margin: 0;
    a {
      text-decoration: none;
      color: white;
      padding: 0.5rem 1.25rem;
      border: 1px solid rgba(255, 255, 255, 0);
      border-radius: 0.9rem;
      transition: 1s;
      @media (max-width: 755px) {
        padding: 0.5rem 1rem;
      }
      @media (max-width: 640px) {
        padding: 0.5rem 0.75rem;
      }
      @media (max-width: 560px) {
        font-size: 0.8rem;
        padding: 0rem 0.25rem;
      }
      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`;
const Social = styled.div`
  position: absolute;
  top: 8.25rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  @media (max-width: 1024px) {
    left: 0.25rem;
  }
  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
    @media (max-width: 700px) {
      width: 0;
    }
  }
`;
