import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300&display=swap');
${reset}
html {
  
  font-size: 62.5%;
  color: #444;

 

  
}

`;
export default GlobalStyle;
