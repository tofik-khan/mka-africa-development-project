import styled, { css } from "styled-components";
import Link from "next/link";

const SharedStyle = css`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;

  ${(props) => {
    // Conditional Styling for anchor links
    if (props.href) {
      return `
            display: inline-flex;
            justify-content: center;
            align-items: center;

            text-decoration: none;
        `;
    }
  }}

  background-color: ${(props) =>
    props.variant === "primary" ? "#003348" : "#E0E0E0"};

  /* Size */
  height: ${(props) => (props.size === "small" ? "30px" : "50px")};
  width: 100%;

  /* Border */
  border: ${(props) =>
    props.variant === "primary" ? "unset" : "solid 1px #AAAAAA"};
  border-radius: 4px;

  /* Text */
  color: ${(props) => (props.variant === "primary" ? "white" : "#6D6D6D")};
  font-weight: bold;
  font-size: 16px;

  /* States */
  &:hover {
    background-color: ${(props) =>
      props.variant === "primary" ? "#042C3D" : "#CBCBCB"};
    cursor: pointer;
    color: ${(props) => (props.variant === "primary" ? "white" : "#6D6D6D")};
  }
`;

const StyledButton = styled.button`
  ${SharedStyle}
`;

const StyledLink = styled(Link)`
  ${SharedStyle}
`;

export default function Button({ variant, children, size, href, onClick }) {
  if (href) {
    return (
      <StyledLink
        href={href}
        target="_blank"
        rel="noreferrer"
        variant={variant}
        size={size}
      >
        {children}
      </StyledLink>
    );
  }
  return (
    <StyledButton variant={variant} size={size} onClick={onClick} type="button">
      {children}
    </StyledButton>
  );
}
