/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import dinosaur from './images/dinosaur.png';
import logo from './images/logo.png';

const firstDiv = css`
  background-color: #ffd000;
`;
const firstNav = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffd000;
  height: 100px;
  padding: 0 6%;

  h1 {
    font-size: 17;
    display: flex;
    align-items: center;
  }

  span {
    color: rgba(16, 16, 16, 0.3);
    margin-left: 8px;
  }

  h3 {
    margin-left: 500px;
  }

  button {
    background-color: #ffd000;
    padding: 10px 30px;
    border-radius: 30px;
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 900;
  }
`;

const logoTop = css`
  height: 45px;
  width: 45px;
  margin-right: 8px;
`;

const secondDiv = css`
  background-color: #ffd000;

  h1 {
    margin-top: 75px;
    margin-bottom: 25px;
    font-family: 'Real Text Pro', sans-serif;
    color: #101010;
    font-size: 72px;
    line-height: 100%;
    font-weight: 900;
    text-align: center;
    letter-spacing: -3px;
  }

  h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: rgba(16, 16, 16, 0.7);
    font-size: 32px;
    line-height: 130%;
    font-weight: 400;
    text-align: center;
    letter-spacing: -1px;
  }

  button {
    background-color: #9f25ff;
    color: white;
    margin-left: 40%;
    padding: 10px 30px;
    border-radius: 15px;
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 900;
    margin-top: 50px;
    font-size: 20px;
  }

  h5 {
    margin-left: 40%;
    color: #676965;
    font-weight: 400;
  }
  iframe {
    background-color: white;
    margin-left: 20%;
    height: 500px;
    width: 800px;
  }
  div {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 100px;
    background-color: rgba(16, 16, 16, 0.1);
    margin-left: 32%;
    margin-top: 75px;
    h3 {
      font-weight: bold;
      color: black;
    }
  }
  img {
    position: absolute;
    //top: 500px;
    left: 260px;
  }
`;
function App() {
  return (
    <div css={firstDiv}>
      <nav css={firstNav}>
        <h1>
          <img src={logo} alt="logo" css={logoTop} />
          Klokki
          <span>for Mac</span>
        </h1>
        <div>
          <h3>Support</h3>
        </div>

        <button>Purchase</button>
      </nav>
      <div css={secondDiv}>
        <h1>
          Trigger the timer
          <br /> by starting your work
        </h1>
        <br />
        <h3>
          Automatic time-tracking solution for freelancers and makers.
          <br />
          Remove the need to start or pause a timer
        </h3>
        <button>
          <span>&#8595;</span> Try for Free
        </button>
        <h5>14-day trial for macOS 10.14 and up</h5>
        <br />
        <iframe
          width="853"
          height="480"
          src="https://youtu.be/78eXJpqw3P4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <img src={dinosaur} alt="dino" />
        <div>
          <h3>Here is how the auto-magic works</h3>
        </div>
        <div>
          <p>1 </p>
        </div>
      </div>
    </div>
  );
}
export default App;
