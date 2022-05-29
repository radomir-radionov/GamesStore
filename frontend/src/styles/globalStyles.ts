import { Dragon } from "assets";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
      * {
      box-sizing: border-box;
    };
    html,
    body {
      height: 100%;
      margin: 0;
      padding: 0;
      background-image: url(${Dragon});
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      background-position: top;
    }
    body {
      overflow-x: hidden;
    }
    #root {
      display: flex;
      flex-direction: column;
      min-height: 100%;
      width: 100vw;
    }
    ul, ol, li, h1, h2, h3, h4, h5, h6, p {
      margin: 0;
      padding: 0;
    }
    ul, ol, li {
      list-style: none;
    }
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
 
    `;

export default GlobalStyles;
