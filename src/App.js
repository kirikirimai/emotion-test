import "./App.css";
/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { useState } from "react";
import styled from "@emotion/styled";

const underLine = css`
  border-bottom: 1px solid #ff0000;
  padding-bottom: 10px;
  display: inline-block;
`;

const ttlh1 = css`
  color: red;
  font-size: 30px;
  background-color: #ffff00;
  ${underLine}
  @media (max-width: 767px) {
    font-size: 8vw;
  }

  &.is-clicked {
    background-color: blue;
  }
`;

const globalBody = css`
  body {
    margin: 0;
    background: #cfcfcf;
  }
`;

const FontColor = styled.p`
  color:${props => (props.clicked ? "blue" : "red")};
  font-size:20px;
  font-weight:bold;

`;


function App() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <Global styles={globalBody} />

      <div className="app">
        <h1 css={ttlh1}>
          EmotoinCSSの練習
        </h1>

        <FontColor clicked={clicked} onClick={clickHandler}>Styled componentsのようにクリックして文字色を帰る</FontColor>
      </div>
    </>
  );
}

export default App;
