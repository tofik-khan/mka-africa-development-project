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

  background-color: ${(props) => props.color || "#003348"};

  /* Size */
  height: ${(props) => (props.size === "small" ? "30px" : "50px")};
  width: 100%;

  /* Border */
  border: ${(props) => props.borderColor || "solid 1px #AAAAAA"};
  border-radius: 4px;

  /* Text */
  color: ${(props) => props.textColor || "white"};
  font-weight: bold;
  font-size: 16px;

  /* States */
  &:hover {
    background-color: ${(props) => props.hoverColor || "#042C3D"};
    color: white;
    cursor: pointer;
  }
`;

const StyledButton = styled.button`
  ${SharedStyle}
`;

const StyledLink = styled(Link)`
  ${SharedStyle}
`;

export default function Button({
  variant,
  children,
  size,
  href,
  onClick,
  color,
  borderColor,
  textColor,
  hoverColor,
}) {
  if (href) {
    return (
      <StyledLink
        href={href}
        target="_blank"
        rel="noreferrer"
        variant={variant}
        size={size}
        color={color}
        borderColor={borderColor}
        textColor={textColor}
        hoverColor={hoverColor}
      >
        {children}
      </StyledLink>
    );
  }
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      color={color}
      borderColor={borderColor}
      textColor={textColor}
      hoverColor={hoverColor}
      type="button"
    >
      {children}
    </StyledButton>
  );
}
