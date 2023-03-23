import React from "react";
import styled from "styled-components";
import FundraiserBlock from "./fundraiser-block";

import { Container, Row, Col } from "react-bootstrap";

const LeaderBoardContainer = styled.div`
  width: 100%;
  background-color: #77925f;
  padding: 48px 0px;
`;

export default function LeaderBoard() {
  return (
    <>
      <LeaderBoardContainer>
        <h2 style={{ textAlign: "center" }}>Top Individuals &amp; Teams</h2>
        <Container>
          <Row>
            <Col md={6}>
              <FundraiserBlock name="Coming Soon" percentage={60} />
              <FundraiserBlock name="Coming Soon" percentage={30} />
              <FundraiserBlock name="Coming Soon" percentage={90} />
            </Col>
            <Col md={6}>
              <FundraiserBlock name="Coming Soon" percentage={40} />
              <FundraiserBlock name="Coming Soon" percentage={80} />
              <FundraiserBlock name="Coming Soon" percentage={20} />
            </Col>
          </Row>
        </Container>
      </LeaderBoardContainer>
    </>
  );
}
