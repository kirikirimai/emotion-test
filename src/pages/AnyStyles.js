import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { Link } from "react-router-dom";

const AnyStyles = () => {
  const [isBg,setBg]=useState(false)

  const onBgHandler=()=>{
    setBg(!isBg)
  }
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #cfcfcf;
            padding: 40px;
          }
        `}
      />
      <div>
        <p>
          他の練習は<Link to={`/practice/`}>こちら</Link>
        </p>
        <p>
          いろんな書き方<Link to={`/anystyles/`}>こちら</Link>
        </p>

        <hr />
        <div css={boxLyout.wrap}>
          <div onClick={onBgHandler} css={boxLyout.box(isBg)}>
            <h2 css={boxLyout.ttl}>タイトル</h2>
            <div css={boxLyout.article}>
              <p>ここは文章ここは文章ここは文章。</p>
              <p>ここは文章ここは文章ここは文章。</p>
            </div>
          </div>

          <div onClick={onBgHandler} css={boxLyout.box(isBg)}>
            <h2 css={boxLyout.ttl}>タイトル</h2>
            <div css={boxLyout.article}>
              <p>ここは文章ここは文章ここは文章。</p>
              <p>ここは文章ここは文章ここは文章。</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const boxLyout = {
  wrap: css`
    display: flex;
    width: 100%;
    max-width: 600px;
    margin: auto;
    justify-content: space-between;
  `,
  box: (flg)=>(
    css`
    width: 45%;
    border: 3px solid #333;
    padding: 10px;
    cursor: pointer;
    background-color: ${flg && "red"};
  `
  ),
  ttl: css`
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
  `,
  article: css`
    p {
      &:not(:first-child) {
        margin-top: 10px;
      }
    }
  `,
};

export default AnyStyles;
