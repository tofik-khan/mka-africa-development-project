import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "Poppins", sans-serif;
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.size || "48px;"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  max-width: 65ch;
  margin: ${(props) => (props.align === "center" ? "auto" : "")};
  text-align: center;
`;

export const Text = styled.p`
  font-family: "Poppins", sans-serif;
  margin: 0;
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.size || "12px;"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  max-width: 65ch;
  margin: auto;
  text-align: ${(props) => props.align || "inital"};
`;
