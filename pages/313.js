import React from "react";

import Head from "next/head";
import { Navigation } from "../partials/Nav";
import Footer from "../partials/Footer";

import styled from "styled-components";

const StyledBackground = styled.div`
  width: 100%;
  height: calc(100vh - 108px - 185px);

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #272d2d;
`;

const H1 = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 50px;

  color: white;
`;

export default function Page() {
  return (
    <>
      <Head>
        <title>ADI | ۳۱۳</title>
        <meta
          name="description"
          content="Africa Development Initiative is a collection of various philanthropic projects carried out by Majlis Khuddam-ul-Ahmadiyya USA."
        />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/images/africa.png" />
      </Head>
      <Navigation />
      <StyledBackground>
        <H1>
          ۳۱۳{" "}
          <span
            style={{
              fontSize: "32px",
              verticalAlign: "middle",
              borderLeft: "1px solid white",
              paddingLeft: "20px",
            }}
          >
            Coming Soon
          </span>
        </H1>
      </StyledBackground>
      <Footer />
    </>
  );
}
