import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";

import { Container, Row, Col } from "react-bootstrap";

const projects = [
  {
    title: "Model Village Project",
    id: "1",
    tagline: "Kibingi, Democratic Republic of the Congo",
    description:
      "Kibingi is a village located on the N1 highway about 8 hours from the capital and largest city, Kinshasa. The village is home to over 100 families, but its importance is not only to its inhabitants. The village has a clinic which is vital to several smaller villages in the area",
    pageLink: "/",
    image: "/images/model-village-project.jpg",
    navName: "Model Village Project",
    goal: "200,000",
    collection: "316",
    donations: "6",
  },
  {
    title: "Liberia Vocational Center",
    id: "2",
    tagline: "Monrovia, Liberia",
    description:
      "Humanity First aims to build up a new location, with the help of MKA USA, over the span of 3 years. This year HF USA is purchasing the land which MKA USA plans to pay $100,000 towards. The property is located across the street from the current location and the seller has accepted our bid.",
    pageLink: "/",
    image: "/images/vocational-college.jpg",
    navName: "Vocational Center",
    goal: "100,000",
    collection: "0",
    donations: "0",
  },
  {
    title: "Nasir Ahmadiyya Muslim School",
    id: "3",
    tagline: "Mansajang, Basse, Gambia",
    description:
      "Established in 1983 Nasir Ahmadiyya Muslim Senior Secondary and Upper Basic School serves more than 1500 students every year from across the Upper River Region from Grade 7 - 12. The school is in need of many infrastructure improvements along with school supplies and other items.",
    pageLink: "/",
    image: "/images/gambia-muslim-school.jpg",
    navName: "Nasir Academy",
    goal: "70,000",
    collection: "0",
    donations: "0",
  },
];

const HeroContainer = styled.div`
  width: 100%;
  background-color: #003348;
  padding-left: 24px;
`;

const Text = styled.p`
  font-family: "Poppins", sans-serif;
  margin: 0;
  color: white;
  font-size: ${(props) => props.size || "12px;"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
`;

const DonationContainer = styled.div`
  padding: 20px 30px;
  background-color: #d56c33;
  border-radius: 4px;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #bdbdbd;
  border-radius: 4px;
  margin: 8px 0px;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.percentage}%;
  height: 8px;
  border-radius: 4px;
  background-color: #003348;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center left;

  @media only screen and (max-width: 768px) {
    margin-top: 24px;
    height: 300px;
  }
`;

export default function Hero() {
  const [project, updateProject] = useState(projects[0]);

  return (
    <>
      <HeroContainer>
        <Container className="py-5" fluid>
          <Row>
            <Col md={6}>
              <Text size="12px">{`Project ${project.id} of ${projects.length}`}</Text>
              <Text size="32px">{project.title}</Text>
              <Text size="18px" marginBottom="30px">
                {project.tagline}
              </Text>
              <Text size="20px" marginBottom="30px;">
                {project.description}
              </Text>
              <DonationContainer>
                <Text size="24px">
                  {`$${project.collection} `}
                  <span style={{ fontSize: "18px" }}>
                    raised out of ${project.goal} goal
                  </span>
                </Text>
                <ProgressBarContainer>
                  <ProgressBar
                    percentage={
                      parseInt(project.collection) / parseInt(project.goal)
                    }
                  />
                </ProgressBarContainer>
                <Text size="16px">{project.donations} donations</Text>
                {/*<Button variant="grey" href="">Learn More</Button>*/}
                <Button
                  variant="primary"
                  href="https://www.classy.org/give/475449/#!/donation/checkout"
                >
                  Donate
                </Button>
              </DonationContainer>
            </Col>
            <Col md={6}>
              <ProjectImage url={project.image} />
            </Col>
          </Row>
        </Container>
      </HeroContainer>
    </>
  );
}
