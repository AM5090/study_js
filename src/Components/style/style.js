import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    .container {
        width: 990px;
        margin: 0 auto;
        padding: 0 15px;
    }

    header {
        padding: 20px 0px;
        background-color: #003366;
        color: #fff;
        margin-bottom: 20px;
    }

    header a {
        text-decoration: none;
        color: #fff;
    }

    p {
        margin: 0px;
    }

`;