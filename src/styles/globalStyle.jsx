import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{

        scroll-behavior: smooth;
        margin: 0;
        padding: 0;
    }
html {
    scroll-behavior: smooth;
    overflow: overlay
}
    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: overlay
        
    }


    h1,
    h2,
    h3,
    h4,
    input{
        margin: 0;
        bottom: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    font-size: inherit;
    line-height: inherit;
    }

    body{
        background-color: #f5f5f5;
        font-size: 16px;
        /* overflow: overlay; */
        /* line-height: 1.7; */
        *::-webkit-scrollbar-track {
    display: none;
    background-color: transparent;
    overflow-x: hidden;
}

    scrollbar-color: #404040b3 transparent; /*firefox*/

    
    }
/* 
    ul{
        list-style: none;
    } */

    a{
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    button,
    input {
    -webkit-border-radius: 0;
    border-radius: 0;
    border: 0;
    }

    button{
        cursor: pointer;
    }

    /* img {

        

    } */

    div {
        box-sizing: border-box;

    }

    main {
    display: block;
    }
`;

export default GlobalStyle;
