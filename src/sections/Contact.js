import React from 'react';
import styled, { css } from 'styled-components';
import {PhoneIcon, MailIcon, LocationIcon} from '../components/ContactIcons';
import contacts from '../consts/contacts';
import { mobile } from '../utils/media';

const DivContainer = styled.div`  
  height: 320px;
  background-color: rgba(242,243,248,1);
  padding-top: 70px;
  padding-bottom: 70px;
  z-index: 3; 
  ${mobile(css`
    height: 700px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
  `)}
`;

const Divs = styled.div`
  width: 100%;  
  max-width: 1060px;
  margin: 0 auto;
  text-align: center; 
  z-index: 3;
  display: flex;
  flex-direction: row;
  ${mobile(css`
    flex-direction: column;
  `)}
`;

const DivContact = styled.div`
  float: left;
  margin-left: 5%;
  z-index: 2;
  width: 43%;
  ${mobile(css`
    width: 90%;
    height: 350px;
    margin-left: 1%; 
  `)}
`;

const Image = styled.img`
  float: left;  
`;

const DivWidgetText = styled.div`
  margin-bottom: 40px;
  display: block;
  height: 140px;
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
  display: inline-block;
  ${mobile(css`
    max-width: 100vw;
    padding-left: 2%;
  `)}
`;


function Contact() {
  return (  
    <DivContainer id="contact"> 
      <Divs>  
      {Object.keys(contacts).map(key => (
        <DivContact key={key}>
          <DivWidgetText>
            <p>
              <Image src={contacts[key].image} width={contacts[key].widthImage} height={contacts[key].heightImage}></Image>
            </p>
          </DivWidgetText>
          <DivWidgetText>
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
      </Divs>      
    </DivContainer>                      
  );
}

export default Contact;