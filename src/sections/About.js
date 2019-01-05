import React from 'react';
import aboutText from '../consts/aboutText';
import imgFernando from '../media/images/fernando.jpg';
import styled,  { css }  from 'styled-components';
import { desktop2, desktop1 } from '../utils/media';

const AboutDiv = styled.div`
  align-self: flex-end;
  background: white;
  width: 80%;  
  display: flex; 
  z-index: 20;    
  padding: 15px;  
  margin: 0 auto;         
  ${desktop2(css`
    align-self: auto;
  `)};   
`;

const ImgContainer = styled.div`
  width: 100%;    
  display: flex;
  margin: 0 auto;
  max-height: 650px;
  ${desktop2(css`
    max-width: 450px;
    max-height: 450px; 
  `)};
  ${desktop1(css`
    width: 50%;        
    display: flex;
    float: left;
    padding: 1em;
    margin: 3em 0 3em 0;
    border: 1px solid lightgray;    
  `)}
`;

const Image = styled.img`
  max-width: 100%;    
  margin: 0 auto;
  object-fit: cover;
`;

const TextContainer = styled.p`
  display: flex;      
  flex-direction: column;
  ${desktop1(css`
    padding: 2em 3em 0 3em;
    display: flex;
    line-height: 2;
    text-align: left;
  `)};
`;

const Text = styled.div`
  width: 100%;
  font-weight: lighter; 
  margin: 2em auto;
  text-align: center;   
  color: ${props => props.theme.pallete.primary.main};
`;

const TextH3 = styled.h3`
  font-weight: lighter;
  font-size: 1.999em;
  margin: 0;
`;

const TextH2 = styled.h3`
  margin: 0;
  font-size: 2.827em;   
`;

function About() {
  return (  
    <div id="about">
      <AboutDiv>
          <Text >
            <TextH2>
              Fernando Franco
            </TextH2>
            <TextH3>
              CRO/MG -24.602
            </TextH3>
            <div />
            <ImgContainer >
              <Image src={imgFernando} alt="Fernando Franco" />
            </ImgContainer>
            <TextContainer>
              {Object.keys(aboutText).map(key => (
              <p> <img width="15px" height="15px" alt="▪" src="https://s.w.org/images/core/emoji/2.4/svg/25aa.svg" ></img> {aboutText[key].text} </p>
              ))} 
            </TextContainer>             
          </Text>
      </AboutDiv>   
    </div>                      
  );
}

export default About;
