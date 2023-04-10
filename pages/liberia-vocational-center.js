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
  height: ${(props) => (props.square ? "100px" : "45px")};
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
`;

const CTAContainer = styled.div`
  width: 250px;
  margin: auto;
  padding-bottom: 48px;
`;

const GalleryImage = styled.div`
  width: 100%;
  height: ${(props) => props.height || "400px"};
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
        <title>ADI | Liberia Vocational Center</title>
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
          Vocational Center
        </H1>
        <Text className="pb-3" color="white" size="20px" align="center">
          <Image src="/images/map-marker.svg" width={20} height={20} />
          Monrovia, Liberia
        </Text>
        <Text color="white" size="16px" align="center">
          Humanity First aims to build up a new location, with the help of MKA
          USA, over the span of 3 years. This year HF USA is purchasing the land
          which MKA USA plans to pay $100,000 towards. The property is located
          across the street from the current location and the seller has
          accepted our bid.
        </Text>
        <LogoContainer className="py-5">
          <SponsorLogo square url="/images/humanity-first.png" />
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
                  raised out of $100,000
                </span>
              </Text>
              <ProgressBar>
                <ProgressBar.Bar percentage={(1939 / 100000) * 100} />
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
            <GalleryImage url="/images/vocational-center/gallery01.jpg" />
          </Col>
          <StyledGalleryCol md={3}>
            <GalleryImage url="/images/vocational-center/gallery02.jpg" />
          </StyledGalleryCol>
          <StyledGalleryCol md={3}>
            <GalleryImage url="/images/vocational-center/gallery03.jpg" />
          </StyledGalleryCol>
          <StyledGalleryCol md={3}>
            <GalleryImage url="/images/vocational-center/gallery04.jpg" />
          </StyledGalleryCol>
          <StyledGalleryCol md={3}>
            <GalleryImage url="/images/vocational-center/gallery05.jpg" />
          </StyledGalleryCol>
        </Row>
      </Container>
      <Container className="py-5">
        <Row classdName="align-items-center">
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
              New Site
            </Text>
            <Text size={"20px"}>
              Humanity First's new vocational center in the capital of Liberia
              aims to provide skills training and education to underserved
              communities, with the goal of promoting economic growth and social
              development. The vocational center will offer a range of courses
              in areas such as carpentry, plumbing, tailoring, and computer
              skills, providing individuals with the skills and knowledge needed
              to secure employment or start their own businesses.
            </Text>
            <br />
            <Text size={"20px"}>
              The first phase of the project involves purchasing the land on
              which the vocational center will be built, which requires
              fundraising efforts to secure the necessary funds. Once the land
              is secured, the center will be designed and built to meet the
              needs of the community, with input from local stakeholders and
              leaders.
            </Text>
          </Col>
          <Col
            className="py-3"
            xs={{ span: 12, order: "first" }}
            md={{ span: 6, order: "last" }}
          >
            <GalleryImage
              url="/images/vocational-center/info01.JPG"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col
            className="py-3"
            xs={{ span: 12, order: "last" }}
            md={{ span: 6, order: "last" }}
          >
            <Text
              size={"32px"}
              align="center"
              className="pb-4"
              style={{ fontWeight: "bold" }}
            >
              Capacity &amp; Facilities
            </Text>
            <Text size={"20px"}>
              The vocational center will provide a safe and welcoming space for
              individuals to learn and grow, with state-of-the-art facilities
              and equipment to ensure that students receive high-quality
              training. The center will also offer support services such as
              career counseling, job placement assistance, and mentorship
              programs to help students achieve their goals.
            </Text>
            <br />
            <Text size={"20px"}>
              In addition to providing valuable skills training and education,
              the vocational center will help to promote economic growth and
              social development in the surrounding community. It will create
              job opportunities and stimulate local entrepreneurship, leading to
              increased economic activity and improved living standards.
            </Text>
            <br />
            <Text size={"20px"}>
              Overall, the new vocational center by Humanity First in the
              capital of Liberia has the potential to be a transformative force
              in the lives of individuals and the community as a whole. With its
              focus on skills training and education, the center has the
              potential to help individuals achieve their full potential and
              contribute to the development of their communities.
            </Text>
          </Col>
          <Col
            className="py-3"
            xs={{ span: 12, order: "first" }}
            md={{ span: 6, order: "first" }}
          >
            <GalleryImage
              url="/images/vocational-center/info02.JPG"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
