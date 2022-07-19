import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
@import url('https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300&display=swap');
html {
  
  font-size: 62.5%;
  color: #444;

 

  
}

`;
export default GlobalStyle;
