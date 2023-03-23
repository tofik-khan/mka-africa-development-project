import Head from "next/head";
import React from "react";
import styled from "styled-components";

import Hero from "../partials/homepage/hero";
import { Navigation } from "../partials/Nav";

const RamadanChallengeContainer = styled.div`
  width: 100%;
  background-color: #d2b278;
  padding: 24px 0px;
  text-align: center;
`;

//Move to Components
const Text = styled.p`
  font-family: "Poppins", sans-serif;
  margin: 0;
  color: #3f3f3f;
  font-size: ${(props) => props.size || "12px;"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
`;

const H2 = styled.h2`
  font-family: "Poppins", sans-serif;
  color: #3f3f3f;
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
          content="Majlis Khuddam-ul-Ahmadiyya (MKA) holds its National Ijtema for 2022 at Bait-ur-Rehman Mosque, MD for a weekend of fun activites and brotherly connection."
        />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/images/africa.png" />
      </Head>
      <Navigation />
      <Hero />
      <RamadanChallengeContainer>
        <H2>Special Ramadan Challenge</H2>
        <Text size="24px">
          Reap blessings of Ramadan by donating for this project during the
          blessed month
        </Text>
        <Text size="24px">
          {`$316 `}
          <span style={{ fontSize: "18px" }}>raised out of $50,000 goal</span>
        </Text>
        <ProgressBarContainer>
          <ProgressBar percentage={(316 / 50000) * 100} />
        </ProgressBarContainer>
      </RamadanChallengeContainer>
    </>
  );
}
