import styled, { keyframes } from "styled-components";
import { Button, } from 'semantic-ui-react';



const bounce = keyframes`
  0%   { transform: scale(1,1)    translateY(0); }
  10%  { transform: scale(1.1,.9) translateY(0); }
  30%  { transform: scale(.9,1.1) translateY(-5px); }
  50%  { transform: scale(1,1)    translateY(0); }
  100% { transform: scale(1,1)    translateY(0); }
`

export const FunButton = styled(Button)`
  background-color: #e8e4af !important;
  animation: ${bounce} 1s infinite;
`


// const rotate360 = keyframes`
// from {
//   transform:rotate(0deg);
//   color: red;
// }
// to {
//   transform:rotate(360deg);
//   color: blue;
// }
// `;
// const Star = styled.div`
//   fontsize: 30px;
//   display: inline-block;
//   color: red;
//   animation: ${rotate360} 2s linear infinite;
// `;