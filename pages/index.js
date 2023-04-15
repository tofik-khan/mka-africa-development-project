import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Footer from "../partials/Footer";

import Hero from "../partials/homepage/hero";
import LeaderBoard from "../partials/homepage/leaderboard";
import { Navigation } from "../partials/Nav";

const RamadanChallengeContainer = styled.div`
  width: 100%;
  background-color: #f4ffee;
  box-shadow: 0px 0px 67px 8px rgba(0, 0, 0, 0.25);
  padding: 24px 0px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    padding: 24px;
  }
`;

//Move to Components
const Text = styled.p`
  font-family: "Poppins", sans-serif;
  margin: 0;
  color: #818e71;
  font-size: ${(props) => props.size || "12px;"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  max-width: 65ch;
  margin: auto;
`;

const H2 = styled.h2`
  font-family: "Poppins", sans-serif;
  color: #818e71;
  text-transform: uppercase;
  font-weight: bold;
`;

const ProgressBarContainer = styled.div`
  width: 25%;
  height: 8px;
  background-color: #bdbdbd;
  border-radius: 4px;
  margin: 8px auto;

  @media only screen and (max-width: 768px) {
    width: 75%;
  }
`;

const ProgressBar = styled.div`
  width: ${(props) => props.percentage}%;
  height: 8px;
  border-radius: 4px;
  background-color: #003348;
`;

export default function Page() {
  return (
    <>
      <Head>
        <title>Africa Development Initiative</title>
        <meta
          name="description"
          content="Africa Development Initiative is a collection of various philanthropic projects carried out by Majlis Khuddam-ul-Ahmadiyya USA."
        />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/images/africa.png" />
      </Head>
      <Navigation />
      <Hero />
      <RamadanChallengeContainer className="py-5">
        <H2>Special Ramadan Challenge</H2>
        <Text size="20px">
          Reap the blessing of Ramadan by donating for this project during this
          month. Help us reach our goal of $50,000 by April 21st! Share with
          your friends, family, classmates and coworkers to support the
          initiative.
        </Text>
        <Text size="28px" className="pt-4 mt-2">
          {`$1552 `}
          <span style={{ fontSize: "20px" }}>raised out of $50,000 goal</span>
        </Text>
        <ProgressBarContainer>
          <ProgressBar percentage={(10647 / 50000) * 100} />
        </ProgressBarContainer>
      </RamadanChallengeContainer>
      <LeaderBoard />
      <Footer />
    </>
  );
}
