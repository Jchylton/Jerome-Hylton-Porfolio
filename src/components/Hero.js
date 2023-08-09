import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <>
      <Background id="Hero">
        <Profile src="./Prof Photo.jpeg" alt="Profile Pic"></Profile>
        <LogoContainer>
          <Coding src="./pngwing.com.png" />
          <PMP src="./PMI.svg" />
          <Node src="./Node.png" />
          <Prosci src="./Prosci.png" />
          <JS src="./JS.png" />
          <Scrum src="./Scrum.png" />
        </LogoContainer>
      </Background>
    </>
  );
};

export default Hero;

const Background = styled.div`
  background-image: url("./LinkedIn Header.jpeg");
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 325px;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 30px;
`;

const Profile = styled.img`
  border-radius: 50%;
  margin-bottom: -150px;
  margin-left: 50px;
  border: 4px solid white;
`;

const Coding = styled.img`
  height: 50px;
  width: 50px;
`;

const PMP = styled.img`
  height: 50px;
  width: 50px;
`;
const Prosci = styled.img`
  height: 50px;
  width: 50px;
`;
const JS = styled.img`
  height: 50px;
  width: 50px;
`;
const Scrum = styled.img`
  height: 50px;
  width: 50px;
`;
const Node = styled.img`
  height: 50px;
  width: 50px;
`;
const LogoContainer = styled.div`
  /* border: 2px solid white; */
  padding: 5px;
  width: 35%;
  margin-bottom: -185px;
  margin-right: 125px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

// const Box = styled.div`
//   height: 1400px;
//   width: 400px;
//   border: 4px solid red;
//   margin-top: 500px;
// `;
