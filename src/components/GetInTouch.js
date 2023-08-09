import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { json } from "react-router-dom";

const GetInTouch = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => {
        window.alert(error);
      });
  };
  return (
    <>
      <GetContainer id="Getintouch">
        <Title> Get In Touch! </Title>
        <div>
          <Form onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name">
                {" "}
                Your Full Name:
                <Input1
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Smith"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                />
              </Label>
            </div>
            <div>
              <Label htmlFor="email">
                {" "}
                Your Email Address:
                <Input1
                  type="email"
                  id="email"
                  name="email"
                  placeholder="mail@email.com"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                />
              </Label>
            </div>
            <div>
              <Label htmlFor="description">
                {" "}
                Type Your Inquiry:
                <Input2
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Tell me about your organization and how my skills are a match"
                  onChange={(e) => handleChange(e.target.id, e.target.value)}
                />
              </Label>
            </div>
            <ButtonDiv>
              <Button type="submit"> Send </Button>
            </ButtonDiv>
          </Form>
        </div>
      </GetContainer>
    </>
  );
};

export default GetInTouch;

const GetContainer = styled.div`
  width: 100vw;
  border: 3px solid grey;
  margin-top: 20px;
  background-color: #eeecec;
  font-size: 22px;
  font-family: arial;
  overflow: auto;
`;

const Title = styled.h1`
  padding-left: 30px;
  margin-top: 40px;
  padding-bottom: 25px;
  font-size: 36px;
  font-family: arial;
`;
const Form = styled.form`
  padding: 30px;
  border-radius: 5px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-weight: bold;
  color: ${(props) => (props.invalid ? "red" : "black")};
`;

const Input1 = styled.input`
  width: 70%;
  height: 40px;
  border: 1px solid #ccc;
  margin-top: 20px;
  border-radius: 5px;
`;

const Input2 = styled.input`
  width: 70%;
  height: 200px;
  border: 1px solid #ccc;
  margin-top: 20px;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: white;
  font-size: 24px;
  width: 15%;
  height: 65px;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
  opacity: ${(props) => (!props.enabled ? 0.5 : 1)};
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;
