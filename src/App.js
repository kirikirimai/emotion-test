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

  &:hover {
    color: blue;
  }
`;

const globalBody = css`
  body {
    margin: 0;
    background: #cfcfcf;
  }
`;

const FontColor = styled.p`
  color: ${(props) => (props.clicked ? "blue" : "red")};
  font-size: 20px;
  font-weight: bold;
`;

const box = css`
  width: 300px;
  height: 300px;
  margin: auto;
`;
const bgColorRed = css`
  background-color: red;
`;

const rollOver = css`
  font-weight: bold;
  font-size: 20px;
  &:hover {
    opacity: 0.5;
  }

  &::before {
    content: "●";
    display: inline-block;
  }

  @media (max-width: 767px) {
    font-size: 8vw;
  }
`;

const rollOverObj = css({
  fontWeight: "bold",
  fontSize: "20px",
  "&:hover": {
    opacity: 0.5,
  },
  "&::before": {
    content: '"●"',
    display: "inline-block",
  },
  "@media (max-width: 767px)":{
    fontSize: "8vw",
  }
});

function App() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <Global styles={globalBody} />

      <div className="app">
        <h1 css={ttlh1}>EmotoinCSSの練習</h1>
        <div css={[box, bgColorRed]}>ここはボックス</div>
        <p
          css={css`
            font-size: 30px;
            color: red;
          `}
        >
          インライン
        </p>
        <p css={rollOver}>ロールオーバー</p>
        <p css={rollOverObj}>ロールオーバーオブジェクト</p>

        <FontColor clicked={clicked} onClick={clickHandler}>
          Styled componentsのようにクリックして文字色を帰る
        </FontColor>
      </div>
    </>
  );
}

export default App;
