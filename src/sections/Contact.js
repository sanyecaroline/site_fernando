import React from 'react';
import styled, { css } from 'styled-components';
import {PhoneIcon, MailIcon, LocationIcon} from '../components/ContactIcons';
import contacts from '../consts/contacts';
import { mobile } from '../utils/media';

const DivContainer = styled.div`  
  height: 200px;
  background-color: rgba(242,243,248,1);
  padding-top: 70px;
  padding-bottom: 70px;
  z-index: 3; 
  text-align: left; 
  z-index: 3;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  ${mobile(css`
    height: 620px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-bottom: -20px;
    width: 100%;
    flex-direction: column;
    text-align: center
  `)}
`;

const DivContact = styled.div`
  float: left;
  margin-left: 5%;
  z-index: 2;
  width: 43%;    
  ${mobile(css`
    width: 90%;
    height: 310px;
    margin-left: 0px;     
  `)}
`;

const Image = styled.img`
  padding-top: ${props => props.paddingTop};
  ${mobile(css`
    margin-top: 0px;
  `)}
`;

const DivWidgetText = styled.div`
  margin-bottom: 40px;
  height: 140px;
  padding-top: ${props => props.paddingTop};
  ${mobile(css`
    height: 110px;
    margin-bottom: 0px;        
  `)}
`; 

const List = styled.div`
  list-style-type:none;
  padding:0;
  margin:0;  
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 12px;
  color: #666;
`;

const Item = styled.div`
  width:100%;  
  padding:8px 16px;
  float:left;
  border:none;  
  ${mobile(css`
    max-width: 90%;
  `)}
`;

const Icon = styled.i`
  float:left;
  width:auto;
  border:none;
  display:block;
  outline:0;
  border-radius:50%;
  width: 30px;
`; 

const TextItem = styled.span`
  padding-left: 15px;  
  ${mobile(css`
    max-width: 100vw;
    padding-left: 2%;
  `)}
`;


function Contact() {
  return (  
    <DivContainer id="contact"> 
      {Object.keys(contacts).map(key => (
        <DivContact key={key}>
          <Image paddingTop={contacts[key].paddingTopImg} src={contacts[key].image} width={contacts[key].widthImage} height={contacts[key].heightImage}></Image>                      
          <DivWidgetText paddingTop={contacts[key].paddingTopDiv}>
            <List>
              <Item>
                <Icon>
                 <PhoneIcon /> 
                </Icon>
                <TextItem>
                  {contacts[key].phone1}
                </TextItem>
              </Item>
              <Item>
                <Icon>
                 <PhoneIcon /> 
                </Icon>
                <TextItem>
                {contacts[key].phone2}
                </TextItem>
              </Item>
              <Item>
                <Icon>
                 <MailIcon /> 
                </Icon>
                <TextItem>
                {contacts[key].email}
                </TextItem>
              </Item>
              <Item>
                <Icon>
                 <LocationIcon /> 
                </Icon>
                <TextItem>
                {contacts[key].address}
                </TextItem>
              </Item>
            </List>
          </DivWidgetText>
        </DivContact>
      ))}      
    </DivContainer>                      
  );
}

export default Contact;