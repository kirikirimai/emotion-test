import React from 'react'
/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import { Link } from 'react-router-dom';

const Practice = () => {
  return (
    <>
    <Global styles={css`body{ background-color:#cfcfcf;}`} />
    <div>
        <h1>ここはいろいろ練習するページ</h1>
        <p>ホームは<Link to={`/`}>こちら</Link></p>
    </div>
    </>
  )
}

export default Practice