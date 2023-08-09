import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Expertise = () => {
  return (
    <GetContainer id="Expertise">
      <Title> Expertise </Title>
      <ExpertiseContainer>
        <Box1>
          <Title2>Full-Stack Web Development</Title2>
          <Pics src="./web-development.png" />
          <Text>
            Solution delivery of front and backend end web applicaiton
            leveraging the MERN framework{" "}
          </Text>
        </Box1>
        <Box1>
          <Title2>Technical Program Planning</Title2>
          <Pics src="./project.png" />
          <Text>
            {" "}
            Execution planning for your business using advanced program
            mananagement methodologies to optimize results{" "}
          </Text>
        </Box1>
        <Box1>
          <Title2>Process Improvement</Title2>
          <Pics src="./process improvement.png" />
          <Text>
            Six Sigma process improvement specialist with a relentless attitude
            for continuously raising the bar and incremental improvements{" "}
          </Text>
        </Box1>
      </ExpertiseContainer>
    </GetContainer>
  );
};

export default Expertise;

const GetContainer = styled.div`
  width: 100vw;
  border: 3px solid grey;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #eeecec;
  font-size: 22px;
  font-family: arial;
`;

const Title = styled.h1`
  padding-left: 30px;
  margin-top: 40px;
  padding-bottom: 15px;
  font-size: 36px;
  font-family: arial;
`;

const ExpertiseContainer = styled.div`
  padding-left: 30px;
  padding-right: 40px;
  margin-top: 40px;
  margin-bottom: 20px;
  height: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Box1 = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 20px;
  margin-right: 75px;
  height: 350px;
  width: 550px;
  position: relative;
  border: 2px solid grey;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
`;

const Box2 = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  margin-right: 75px;
  height: 300px;
  width: 550px;
  position: relative;
  border: 2px solid black;
  justify-content: center;
`;
const Box3 = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  margin-right: 10px;
  height: 300px;
  width: 550px;
  position: relative;
  border: 2px solid black;
  justify-content: center;
`;

const Text = styled.p`
  text-align: center;
  font-family: arial;
  font-size: 20px;
  margin-right: 10px;
  overflow: auto;
`;

const Title2 = styled.h2`
  text-align: center;
  font-family: arial;
  font-size: 30px;
  font-weight: bold;
`;

const Pics = styled.img`
  height: 75px;
  width: 75px;
  object-fit: cover;
  align-self: center;
`;
