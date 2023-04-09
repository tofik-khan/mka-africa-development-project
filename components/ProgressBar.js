import styled from "styled-components";

const StyledProgressBarContainer = styled.div`
  width: 25%;
  height: 8px;
  background-color: #bdbdbd;
  border-radius: 4px;
  margin: 8px auto;

  @media only screen and (max-width: 768px) {
    width: 75%;
  }
`;

const StyledProgressBar = styled.div`
  width: ${(props) => props.percentage}%;
  height: 8px;
  border-radius: 4px;
  background-color: #003348;
`;

function ProgressBar({ children }) {
  return <StyledProgressBarContainer>{children}</StyledProgressBarContainer>;
}

function Bar({ percentage }) {
  return <StyledProgressBar percentage={percentage} />;
}

ProgressBar.Bar = Bar;

export default ProgressBar;
