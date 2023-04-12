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
        <title>ADI | Nasir Academy, Gambia</title>
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
          Nasir Ahmadiyya Muslim School
        </H1>
        <Text className="pb-3" color="white" size="20px" align="center">
          <Image src="/images/map-marker.svg" width={20} height={20} />
          Mansajang, Basse, Gambia
        </Text>
        <Text color="white" size="16px" align="center">
          Established in 1983 Nasir Ahmadiyya Muslim Senior Secondary and Upper
          Basic School serves more than 1500 students every year from across the
          Upper River Region from Grade 7 - 12. The school is in need of many
          infrastructure improvements along with school supplies and other
          items.
        </Text>
        {/*
          <LogoContainer className="py-5">
            <SponsorLogo square url="/images/humanity-first.png" />
            <SponsorLogo url="/images/mka-logomark.svg" />
          </LogoContainer>
          */}
        <Container className="py-3">
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
                  raised out of $50,000
                </span>
              </Text>
              <ProgressBar>
                <ProgressBar.Bar percentage={(1939 / 50000) * 100} />
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
            <GalleryImage url="/images/nasir-academy/gallery01.jpg" />
          </Col>
          <StyledGalleryCol md={3}>
            <GalleryImage url="/images/nasir-academy/gallery02.jpg" />
          </StyledGalleryCol>
          <StyledGalleryCol md={3}>
            <GalleryImage url="/images/nasir-academy/gallery03.jpg" />
          </StyledGalleryCol>
          <StyledGalleryCol md={3}>
            <GalleryImage url="/images/nasir-academy/gallery04.jpg" />
          </StyledGalleryCol>
          <StyledGalleryCol md={3}>
            <GalleryImage url="/images/nasir-academy/gallery05.jpg" />
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
              Computer Lab
            </Text>
            <Text size={"20px"}>
              This project aims to fund a computer lab at the Nasir Ahmadiyya
              Muslim School in the Gambia could provide students with access to
              the latest technology and help to prepare them for success in an
              increasingly digital world. The lab would be a dedicated space
              equipped with computers, printers, and other necessary equipment
              to ensure that students have the tools they need to learn and
              develop important computer skills.
            </Text>
            <br />
            <Text size={"20px"}>
              The benefits of a computer lab would extend beyond the classroom,
              with students gaining valuable skills and experience that could
              help them secure better job opportunities and contribute to the
              development of their communities. It could also help to bridge the
              digital divide and ensure that students from all backgrounds have
              access to the same opportunities and resources.
            </Text>
          </Col>
          <Col
            className="py-3"
            xs={{ span: 12, order: "first" }}
            md={{ span: 6, order: "last" }}
          >
            <GalleryImage
              url="/images/nasir-academy/info01.jpg"
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
              Classroom Improvements
            </Text>
            <Text size={"20px"}>
              Improvements to the Nasir Ahmadiyya Muslim School in the Gambia
              could greatly enhance the learning environment and contribute to
              the success of the students. A range of upgrades could be
              undertaken to improve the school's infrastructure and ensure that
              it is a safe, comfortable, and productive place to learn.
            </Text>
            <br />
            <Text size={"20px"}>
              Some improvements that we hope to make is installing of a new
              fence around the school grounds, adding tiling to the school to
              replace worn and outdated flooring, upgrading the furniture within
              the school, providing a fresh coat of paint to the school's
              interior and exterior walls, having lighting across the interior
              of the school complex, and getting new chalkboards in classrooms
              to ensure that students have a clean and functional surface on
              which to learn.
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
              url="/images/nasir-academy/info02.jpg"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            />
          </Col>
        </Row>
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
              School Supplies
            </Text>
            <Text size={"20px"}>
              Providing new supplies for students at the Nasir Ahmadiyya Muslim
              School in the Gambia could have a positive impact on the learning
              experience of the students. A range of supplies are needed,
              including textbooks, writing materials, and other essential items.
            </Text>
            <br />
            <Text size={"20px"}>
              New textbooks can be provided to students to ensure that they have
              access to the latest information and resources for their studies.
              Writing materials such as notebooks, pens, pencils, and other
              supplies are essential in taking notes, completing assignments,
              and engaging in other important learning activities. In addition,
              other supplies such as calculators, rulers, protractors, and other
              tools which will help students with their studies.
            </Text>
            <Text size={"20px"}>
              These new supplies to students at the Nasir Ahmadiyya Muslim
              School could help to ensure that they are better equipped to learn
              and succeed in their studies. It could also help to reduce
              financial burden on parents who may struggle to provide these
              supplies for their children. By ensuring that they have the
              resources they need to learn and succeed, students would be better
              able to reach their full potential and contribute to the
              development of their communities.
            </Text>
          </Col>
          <Col
            className="py-3"
            xs={{ span: 12, order: "first" }}
            md={{ span: 6, order: "last" }}
          >
            <GalleryImage
              url="/images/nasir-academy/info03.jpg"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
