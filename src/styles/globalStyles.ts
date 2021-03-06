import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
        --background: #fff;
        --blue-100:#0055FF;
        --blue-200:#00DDEE;
        --whiteSmoke: #FEFEFE;
        --text-body: #EAF1FF;
        --text-color: #021564;
    }
    
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body,input, textarea, button,p {
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        font-family: 'Cabin', sans-serif;
    }
    button {
        cursor: pointer;
        border: none;
    }
    a{
        text-decoration: none;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
