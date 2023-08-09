import React from "react";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <GetContainer id="About">
      <About> About Me </About>
      <Profile>
        My name is Jerome Hylton and I have a passion for all things tech. I am
        a Technical Program Management Leader with 11+ years of expertise
        spanning various domains including agile delivery, product development,
        data analytics, and machine learning. Throughout my career I have
        successfully led programs involving complex hardware and software
        solutions while working with cross-functional teams to meet business
        objectives. I am currently sharpening my toolbelt by adding software
        development to my suite of tools. I am currenlty enrolled in a Software
        Development Diploma Program at Concordia Univerisity and I am hoping to
        leverage the skills gained from this program coupled with my strong
        business acumen to influence and adapt quickly to deliver customer
        focused results for an organization.
      </Profile>
    </GetContainer>
  );
};

export default AboutMe;

const GetContainer = styled.div`
  width: 100vw;
  border: 3px solid grey;
  margin-top: 20px;
  background-color: #eeecec;
  font-size: 22px;
  font-family: arial;
  overflow: auto;
`;
const Profile = styled.p`
  padding: 10px;
  padding-left: 30px;
  padding-right: 40px;
  padding-bottom: 20px;
  text-align: justify;
  line-height: 35px;
`;
const About = styled.h1`
  padding-left: 30px;
  margin-top: 40px;
  padding-bottom: 25px;
  font-size: 36px;
  font-family: arial;
`;
