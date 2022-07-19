import React from "react";
import styled from "styled-components";

const SyledButton = styled.button`
  background: ${(props) => props.color || "white"};
  width: ${(props) => (props.size === "big" ? "200px" : "100px")};
  height: ${(props) => (props.size === "big" ? "80px" : "40px")};
  border-radius: ${(props) => (props.size === "big" ? "200px" : "100px")};
  border: 2px solid #0e5ddd;
  color: #0e5ddd;
`;
const Button = ({ color, size, text }) => (
  <SyledButton color={color} size={size}>
    {text}
  </SyledButton>
);

export default Button;
