import React from "react";

import Head from "next/head";
import { Navigation } from "../partials/Nav";
import Footer from "../partials/Footer";

export default function Page() {
  return (
    <>
      <Head>
        <title>ADI | Model Village Project</title>
        <meta
          name="description"
          content="Model Village Project, 1 of 3 philanthropic projects carried out by Majlis Khuddam-ul-Ahmadiyya USA for the year 2023."
        />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/images/africa.png" />
      </Head>
      <Navigation />
      <h1>Model Village Project Page</h1>
      <Footer />
    </>
  );
}
