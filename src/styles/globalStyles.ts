import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    /** general **/
	--white: #fff;
    --grey: #757575;
    --light-grey: #c6c6c6;
    --black: #0f0f0f;
    --yellow: #FEE407;
    --border: #dcdfe654;
    --red: #F91E53;

    // Leading Component
    --loading-bg: #0f0f0f;
    --loading-color: #0077c0;

    --text-light-primary: #124d85;
    --text-light-secondary: #1b98d0;

    --text-dark-primary: #e3ebf6;
    --text-dark-secondary: #cd6118;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Archivo", sans-serif;
}

*::-webkit-scrollbar {
    width: 5px;
}

*::-webkit-scrollbar-track {
    border: 1px solid var(--border);
    background-color: var(--light-grey);
}

*::-webkit-scrollbar-thumb {
    background-color: var(--black);
    background-clip: content-box;
}

.cursor {
    cursor: pointer;
}

.sm {
    font-size: 12px;
    line-height: 120%;
}

.md {
    font-size: 16px;
    line-height: 100%;
}

.white {
    color: var(--white);
}

.black {
    color: var(--black);
}

.yellow {
    color: var(--yellow);
}

.red {
    color: var(--red);
}

.grey {
    color: var(--grey);
}

.light-grey {
    color: var(--light-grey);
}

.light {
    font-weight: 300;
}

.base {
    font-weight: 400;
}

.medium {
    font-weight: 500;
}

.semi-bold {
    font-weight: 600;
}

.bold {
    font-weight: 700;
}

.italic {
    font-style: italic;
}

`;

export default GlobalStyles;
