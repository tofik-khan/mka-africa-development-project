import React from "react";

import styled from "styled-components";

const BlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 24px 0px;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-image: url("/images/placeholder.jpeg");
  background-size: cover;
  background-position: center;
  margin-right: 24px;
`;

const InfoContainer = styled.div``;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #bdbdbd;
  border-radius: 4px;
  margin: 8px auto;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.percentage}%;
  height: 8px;
  border-radius: 4px;
  background-color: #003348;
`;

export default function FundraiserBlock({ name, percentage }) {
  return (
    <>
      <BlockContainer>
        <ImageContainer />
        <InfoContainer>
          <h3>{name}</h3>
          <ProgressBarContainer>
            <ProgressBar percentage={percentage} />
          </ProgressBarContainer>
        </InfoContainer>
      </BlockContainer>
    </>
  );
}
