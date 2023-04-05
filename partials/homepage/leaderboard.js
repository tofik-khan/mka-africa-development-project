import React from "react";
import styled from "styled-components";
import FundraiserBlock from "./fundraiser-block";

import { Container, Row, Col } from "react-bootstrap";
import Button from "../../components/Button";

const LeaderBoardContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 48px 0px;
`;

const H2 = styled.h2`
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;

export default function LeaderBoard() {
  return (
    <>
      <LeaderBoardContainer>
        <Container>
          <Row>
            <Col md={6}>
              <H2>Top Individuals</H2>
              <FundraiserBlock name="Coming Soon" percentage={60} />
              <FundraiserBlock name="Coming Soon" percentage={30} />
              <FundraiserBlock name="Coming Soon" percentage={90} />
            </Col>
            <Col md={6}>
              <H2 style={{ textAlign: "center" }}>Top Teams</H2>
              <FundraiserBlock name="Coming Soon" percentage={40} />
              <FundraiserBlock name="Coming Soon" percentage={80} />
              <FundraiserBlock name="Coming Soon" percentage={20} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center">
            <Col md={4}>
              <Button
                textColor={"white"}
                href="https://www.classy.org/give/475449/#!/donation/checkout"
              >
                Support a Team
              </Button>
            </Col>
            <Col md={4}>
              <Button
                color="#FFFFFF"
                textColor="#003348"
                hoverColor="#FFFFFF"
                href="https://www.classy.org/campaign/africa-development-initiative/c475449/search?type=team"
              >
                Join a Team
              </Button>
            </Col>
          </Row>
        </Container>
      </LeaderBoardContainer>
    </>
  );
}
