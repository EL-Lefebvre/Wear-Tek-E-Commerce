import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../constants";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <Logo src={require("../assets/Bannertech.png")} alt="checkout"></Logo>
        </LogoWrapper>
        <Wrapper2>
          <TextWrapper>
            <AboutDiv>What is Wearable technology?</AboutDiv>
            <Text>
              Wearable technology, fashion technology, smartwear, tech togs or
              fashion electronics are smart electronic devices that are worn
              close to or on the surface of the skin, where they detect,
              analyze, and transmit information concerning e.g. body signals
              such as vital signs, and/or ambient data and which allow in some
              cases immediate biofeedback to the wearer.
            </Text>
          </TextWrapper>
          <TextWrapper>
            <AboutDiv>Who are we?</AboutDiv>
            <Text>
              We are four Montreal-based entrepreneurs who love to find the best
              wearable technologies available on the market today! All customers
              are welcome to visit us to see and purchase our collections (see
              our{" "}
              <Link1 style={{ display: "inline" }} to={`/contactinfo`}>
                Support Page
              </Link1>{" "}
              for our address). You can also buy all our products online by
              visiting our{" "}
              <Link1 style={{ display: "inline" }} to={`/store/products/all`}>
                Store
              </Link1>
              . Also, please do not hesitate to give us your feedback!
            </Text>
          </TextWrapper>
        </Wrapper2>
        <Names>
          <ColumnWrapper>
            <NamesWrapper>Sandra</NamesWrapper>
            <NamesWrapper1>Chief Data Officer</NamesWrapper1>
          </ColumnWrapper>
          <ColumnWrapper>
            <NamesWrapper>Boris</NamesWrapper>
            <NamesWrapper1>Chief Analytics Officer</NamesWrapper1>
          </ColumnWrapper>
          <ColumnWrapper>
            <NamesWrapper>Ellie</NamesWrapper>
            <NamesWrapper1>Chief Compliance Officer</NamesWrapper1>
          </ColumnWrapper>
          <ColumnWrapper>
            <NamesWrapper>Rebecca </NamesWrapper>
            <NamesWrapper1>Chief Green Officer</NamesWrapper1>
          </ColumnWrapper>
        </Names>
        <WrapperLogos>
          <LogoWrapper>
            <Logo src={require("../assets/people4.jpg")} alt="checkout"></Logo>
          </LogoWrapper>
          <LogoWrapper>
            <Logo src={require("../assets/people2.jpg")} alt="checkout"></Logo>
          </LogoWrapper>
          <LogoWrapper>
            <Logo src={require("../assets/people1.jpg")} alt="checkout"></Logo>
          </LogoWrapper>
          <LogoWrapper>
            <Logo src={require("../assets/people3.jpg")} alt="checkout"></Logo>
          </LogoWrapper>
        </WrapperLogos>
        <Divider />
      </Wrapper>
    </>
  );
};

export default About;

const Divider = styled.div`
  display: flex;
  flex-direction: row;
  width: 60vw;
  height: 2px;
  background-color: ${COLORS.secondary};
  margin-bottom: 60px;
`;

const Logo = styled.img`
  display: flex;
  height: 400px;
  background-color: darkblue;
`;

const Link1 = styled(Link)`
  display: flex;
  width: 111px;
  display: "inline";
`;
const AboutDiv = styled.div`
  font-weight: bold;
  font-size: 20px;
  display: flex;

  padding-top: 40px;
`;
const Wrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NamesWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
`;

const NamesWrapper1 = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
`;
const Names = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  color: ${COLORS.secondary};

  padding: 30px;
`;

const WrapperLogos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  margin-bottom: 60px;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  width: 100vw;
  background-color: ${COLORS.secondary};
  justify-content: center;
  margin-bottom: 20px;
`;

const Text = styled.span`
  width: 30vw;
  justify-content: center;
  text-align: center;
  background-color: ${COLORS.fifth};
  padding: 30px;
  margin: 10px;
  font-size: 17px;
  opacity: 70%;
  text-align: justify;
  overflow: visible;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  width: 100vw;
  background-color: #fafafa;
  justify-content: center;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  width: 35vw;
  background-color: ${COLORS.fifth};
  justify-content: center;
  border-width: 1px;
  border-color: black;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 50px;
`;
