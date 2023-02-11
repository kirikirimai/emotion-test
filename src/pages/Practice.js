import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css, Global, keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

const fadeIn = keyframes`
0%{
  margin-left: 0;
}
100% {
  margin-left: 100%;
}
`;

const anime = css`
  background-color: yellow;
  width: 50px;
  height: 50px;
  animation: ${fadeIn} 1s linear infinite alternate backwards;
  &:hover {
    animation-play-state: paused;
  }
`;

const hoverTransition = css`
  width: 50px;
  height: 50px;
  background-color: red;
  margin-left: 100px;
  transition: transform 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
  &:hover {
    transform: scale(2, 2);
  }
`;

const setBg = (flg) =>
  css`
    background-color: ${flg ? "red" : "blue"};
    width: 100px;
    height: 100px;
    cursor: pointer;
  `;

const borderBox =css`
border:2px solid #ff0000;
padding: 10px;
width: 100px;
cursor: pointer;
transition: all 0.3s;
`

const addBgRed=css`
  background-color: #ff0000;

`

const addBgBlue=css`
  background-color: blue;

`

const Practice = () => {
  const [isClick, setIsClick] = useState(false);
  const [addClass, setAddClass] = useState(false);

  const bgChangeHandler = () => {
    setIsClick(!isClick);
  };

  const addClassHandler = () => {
    setAddClass(!addClass);
  };
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #cfcfcf;
          }
        `}
      />
      <div>
        <h1>ここはいろいろ練習するページ</h1>
        <p>
          ホームは<Link to={`/`}>こちら</Link>
        </p>
        <hr />
        <h2>Emotionによるcss animation</h2>
        <div css={anime}></div>
        <hr />
        <h2>Emotionによるcss transition</h2>
        <div css={hoverTransition}></div>

        <hr />
        <h2>関数のように使う</h2>
        <p>
          クリックした値によって変更するなど。useStateのクリックを管理してみる
        </p>
        <ul>
          <li>true:赤</li>
          <li>false:青</li>
        </ul>
        <div css={setBg(isClick)} onClick={bgChangeHandler}>
          <p>背景色を帰る</p>
        </div>

        <hr />
        <h2>クリックしたら要素cssを追加してみる。</h2>
        <div css={[borderBox,addClass ? addBgRed:addBgBlue]} onClick={addClassHandler}>
          <p>ボーダーボックス。<br/>クリックしたら背景色をつける</p>
        </div>
      </div>
    </>
  );
};

export default Practice;
