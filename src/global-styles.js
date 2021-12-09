import { createGlobalStyle } from 'styled-components';
import ArchiaTTF from './assets/fonts/archia-regular-webfont.ttf';
import ArchiaEOT from './assets/fonts/archia-regular-webfont.eot';
import ArchiaWOFF from './assets/fonts/archia-regular-webfont.woff';
import ArchiaWOFF2 from './assets/fonts/archia-regular-webfont.woff2';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'archiaregular';
        src: url(${ArchiaEOT});
        src: url(${ArchiaEOT}#iefix) format('embedded-opentype'),
            url(${ArchiaWOFF2}) format('woff2'),
            url(${ArchiaWOFF}) format('woff'),
            url(${ArchiaTTF}) format('truetype');
        font-weight: normal;
        font-style: normal;

    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'archiaregular', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: #f8f4f1;
        height: 100vh;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        position: relative;
        overflow: hidden;
        color: #1d1d1d
        /* cursor: none; */
    }

    .container {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
    }

    a, button, input {
        font-family: 'archiaregular';
    }
`;

export default GlobalStyles;
