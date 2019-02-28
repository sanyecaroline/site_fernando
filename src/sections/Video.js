import React from 'react';
import styled, { css } from 'styled-components';
import { phone } from '../utils/media';
import videos from '../consts/videos';


const DivContainer = styled.div`  
  background: white;
  width: 100vw;    
  align-items: center;     
`;

const VideoFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  max-width: 1300px;
  ${phone(css`
    flex-direction: column;
    align-items: center;
  `)};
`;

const DivContainerText = styled.div`
  width: 100%;
  font-weight: lighter;
  margin: 2em auto;
  text-align: center;
  height: auto;
`;

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: ${props => props.theme.pallete.primary.main};  
`;

const TitleH3 = styled.h3`
  font-weight: lighter;
  font-size: 1.999em;
  margin: 0;
`;

const ItemVideo = styled.iframe`
  padding-left: 10px;    
  padding-bottom: 5px;
  width: 40%;
  ${phone(css`
    width: 95%;
    padding-left: 0px;
    padding-bottom: 10px;
    height: 250px;
  `)};
`;

function renderVideos() {        
  return Object.keys(videos).map(key => (
        <ItemVideo key={key}
          width='32%' 
          height='315px' 
          title='Depoimentos'
          src={`https://www.youtube.com/embed/${videos[key].link}`} 
          frameBorder='0' 
          allow='autoplay; encrypted-media'
          allowFullScreen 
        />
      )
    );        
  }

function Video() {
  return (  
    <DivContainer id="videos"> 
      <DivContainerText>
        <Title>
          Depoimentos
        </Title>    
        <TitleH3 /> 
      </DivContainerText> 
      <VideoFrame>
        {renderVideos()}
        </VideoFrame>
    </DivContainer>                      
  );
}

export default Video;