import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { items } from "../Data";

const itemList = Object.values(items);
const Projects = () => {
  return (
    <GetContainer id="Projects">
      <Title> Projects </Title>
      <ProjectsContainer>
        {itemList.map((item) => {
          return (
            <HashLink to={`/#Projects/${item.id}`} style={linkStyle}>
              <Package>
                <Image src={item.imageSrc} />
                <Title2>{item.name}</Title2>
                <Text>{item.description}</Text>
              </Package>
            </HashLink>
          );
        })}
      </ProjectsContainer>
    </GetContainer>
  );
};

export default Projects;

const GetContainer = styled.div`
  width: 100vw;
  border: 3px solid grey;
  background-color: #eeecec;
  font-size: 22px;
  font-family: arial;
  display: inline-block;
  margin: auto;
  align-items: space-between;
`;

const Title = styled.h1`
  padding-left: 30px;
  margin-top: 40px;
  padding-bottom: 25px;
  font-size: 36px;
  font-family: arial;
`;

const Image = styled.img`
  height: 150px;
  width: 250px;
  border: 2px solid grey;
  text-align: center;
  display: block;
  object-fit: cover;
  align-self: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Package = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid grey;
  border-radius: 8px;
  width: 300px;
  height: auto;
  font-size: 16px
  font-family: arial;
  padding: 20px;
  margin: 25px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  text-decoration: none;
  color: black;
`;

const Text = styled.p`
  text-align: center;
  bottom: -10px;
  font-family: arial;
  font-size: 16px;
  margin-right: 10px;
  justify-content: center;
  margin: 5px;
  text-decoration: none;
`;

const Title2 = styled.h2`
  text-align: center;
  font-family: arial;
  font-size: 24px;
  font-weight: bold;
  justify-content: center;
  margin: 5px;
  text-decoration: none;
`;
const ProjectsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const linkStyle = {
  margin: "5px",
  textDecoration: "none",
  color: "black",
};
