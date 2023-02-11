
/** @jsxImportSource @emotion/react */
import { css, Global} from "@emotion/react";
import { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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
    padding: 30px;
  }
`;

const FontColor = styled.p`
  color: ${(props) => (props.clicked ? "blue" : "red")};
  font-size: 20px;
  font-weight: bold;
`;

const bgColorRed = css`
  background-color: red;
`;

const box = css`
  ${bgColorRed}
  width: 300px;
  height: 300px;
  margin: auto;
`;

const marginBottom = css({
  marginBottom: "16px",
});

const style = css({
  ...marginBottom,
  padding: "16px",
});
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

const listStyle = css`
  display: flex;
  justify-content: center;
  list-style: none;
  li {
    background-color: blue;
    margin: 0 10px;
    &:nth-child(3){
      background-color: orange;
    }
  }
`;

const listStyleObj = css({
  display: "flex",
  justifyContent: "center",
  listStyle: "none",
  li: {
    backgroundColor: "red",
    margin: "0 10px",
  },
});

const rollOverObj = css({
  fontWeight: "bold",
  fontSize: "20px",
  "&:hover": {
    opacity: "0.3",
  },
  "&::before": {
    content: '"●"',
    display: "inline-block",
  },
  "@media (max-width: 767px)": {
    fontSize: "8vw",
  },
});


const buttonWrapperStyle = css`
  background-color: #ffff00;
`

function Home() {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <Global styles={globalBody} />

      <div className="app">
        <h1 css={ttlh1}>EmotoinCSSの練習</h1>

        <p>他の練習は<Link to={`/practice/`}>こちら</Link></p>
        <div css={box}>ここはボックス</div>
        <div css={style}>ここはボックス:オブジェク</div>
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


        <ul css={listStyle}>
          <li>リスト</li>
          <li>リスト</li>
          <li>リスト</li>
        </ul>

        <ul css={listStyleObj}>
          <li>リスト</li>
          <li>リスト</li>
          <li>リスト</li>
        </ul>

        <ButtonComponet css={buttonWrapperStyle} >ボタンだよ</ButtonComponet>



        <FontColor clicked={clicked} onClick={clickHandler}>
          Styled componentsのようにクリックして文字色を帰る
        </FontColor>
      </div>
    </>
  );
}

const ButtonComponet = ({className, children}) => (
  <button className={className}>{children}</button>
)

export default Home;
