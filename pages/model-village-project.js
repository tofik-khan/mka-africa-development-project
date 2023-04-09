import React from "react";
import styled from "styled-components";

import Head from "next/head";
import { Navigation } from "../partials/Nav";
import Footer from "../partials/Footer";
import { H1, Text } from "../components/Text";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";

const HeroContainer = styled.div`
  width: 100%;
  background-color: #818e71;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const SponsorLogo = styled.div`
  width: 150px;
  height: 45px;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const CTAContainer = styled.div`
  width: 250px;
  margin: auto;
  padding-bottom: 48px;
`;

const GalleryImage = styled.div`
  width: 100%;
  height: ${(props) => props.height || "500px"};
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const StyledGalleryCol = styled(Col)`
  padding: 0;
`;

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
      <HeroContainer>
        <H1 className="pt-5 pb-2" align="center" color="white">
          Model Village Project Page
        </H1>
        <Text className="pb-3" color="white" size="20px" align="center">
          <Image src="/images/map-marker.svg" width={20} height={20} />
          Kibingi, Democratic Republic of the Congo
        </Text>
        <Text color="white" size="16px" align="center">
          The project aims to provide basic infrastructure needs to the village.
          These include a new water (borehole), updated classrooms, renovations
          to the clinic, public and private lighting with solar panels among
          other things.
        </Text>
        <LogoContainer className="py-5">
          <SponsorLogo url="/images/iaaae.png" />
          <SponsorLogo url="/images/mka-logomark.svg" />
        </LogoContainer>
        <Container className="pb-3">
          <Row>
            <Col>
              <Text
                size="28px"
                color="white"
                align="center"
                style={{ fontWeight: "bold" }}
              >
                $1,939{" "}
                <span style={{ fontSize: "20px", fontWeight: "normal" }}>
                  raised out of $300,000
                </span>
              </Text>
              <ProgressBar>
                <ProgressBar.Bar percentage={(1939 / 300000) * 100} />
              </ProgressBar>
              <Text align="center" color="white">
                31 Donations
              </Text>
            </Col>
          </Row>
        </Container>
        <CTAContainer>
          <Button href="https://www.classy.org/give/475449/#!/donation/checkout">
            Donate
          </Button>
        </CTAContainer>
      </HeroContainer>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <GalleryImage url="/images/model-village/gallery01.jpg" />
          </Col>
          <StyledGalleryCol md={3}>
            <GalleryImage url="/images/model-village/gallery02.jpg" />
          </StyledGalleryCol>
          <StyledGalleryCol md={3}>
            <GalleryImage url="/images/model-village/gallery03.jpg" />
          </StyledGalleryCol>
          <StyledGalleryCol md={3}>
            <GalleryImage url="/images/model-village/gallery04.jpg" />
          </StyledGalleryCol>
          <StyledGalleryCol md={3}>
            <GalleryImage url="/images/model-village/gallery05.jpg" />
          </StyledGalleryCol>
        </Row>
      </Container>
      <Container className="" fluid>
        <Row classdName="align-items-center no-gutters">
          <Col
            className="py-3"
            xs={{ span: 12, order: "last" }}
            md={{ span: 6, order: "first" }}
          >
            <Text
              size={"32px"}
              align="center"
              className="pb-4"
              style={{ fontWeight: "bold" }}
            >
              Power &amp; Electricity
            </Text>
            <Text size={"20px"}>
              One of the aims of our Model Village Project is to provide
              solar-powered electric lamps to the rural village of Kibingi. This
              project recognizes that access to electricity is limited making
              basic tasks such as cooking, studying, and working difficult or
              impossible after dark.
            </Text>
            <br />
            <Text size={"20px"}>
              By providing access to light at any hour, the villagers in Kibingi
              would be able to extend their productive hours into the night,
              leading to increased economic opportunities and better educational
              outcomes for children. Additionally, access to solar-powered lamps
              could improve safety and security by reducing the reliance on open
              flames, which can be a fire hazard.
            </Text>
          </Col>
          <Col
            //className="py-3"
            xs={{ span: 12, order: "first" }}
            md={{ span: 6, order: "last" }}
          >
            <GalleryImage
              url="/images/model-village/info01.JPG"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            />
          </Col>
        </Row>
        <Row noGutters={true} className="align-items-center">
          <Col
            className="py-3"
            xs={{ span: 12, order: "first" }}
            md={{ span: 6, order: "last" }}
          >
            <Text
              size={"32px"}
              align="center"
              className="pb-4"
              style={{ fontWeight: "bold" }}
            >
              Power &amp; Electricity
            </Text>
            <Text size={"20px"}>
              One of the aims of our Model Village Project is to provide
              solar-powered electric lamps to the rural village of Kibingi. This
              project recognizes that access to electricity is limited making
              basic tasks such as cooking, studying, and working difficult or
              impossible after dark.
            </Text>
            <br />
            <Text size={"20px"}>
              By providing access to light at any hour, the villagers in Kibingi
              would be able to extend their productive hours into the night,
              leading to increased economic opportunities and better educational
              outcomes for children. Additionally, access to solar-powered lamps
              could improve safety and security by reducing the reliance on open
              flames, which can be a fire hazard.
            </Text>
          </Col>
          <Col
            //className="py-3"
            xs={{ span: 12, order: "last" }}
            md={{ span: 6, order: "first" }}
          >
            <GalleryImage
              url="/images/model-village/info02.JPG"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
