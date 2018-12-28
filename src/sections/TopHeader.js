import React from 'react';

import styled, { css } from 'styled-components';

import { mobile, miniPhone } from '../utils/media';
import rem from '../utils/rem';

import SocialLinks from './SocialLinks';

const Container = styled.div`
  position: relative;
  display: flex;  
  flex-direction: row;
  background-color: #293c67;
  background-color: rgba(41,60,103,1);
  border-bottom: 0px none #323232;
  color: #fff;  
  line-height: 38px;  
  width: 100%;
  letter-spacing: ${rem(0.8)}; 
  ${mobile(css`
    flex-direction: column;
    justify-content: center;
    align-items: center;    
  `)};  
`;

const TopHeaderRight = styled.div`
  padding: 10px 20px;  
  display: flex;  
  align-items: right;
  justify-content: flex-end;
  width: 75%;
  ${miniPhone(css`
    display: none;
  `)};
`;

const TopHeaderLeft = styled.div`
  padding: 10px 20px;  
  display: flex;  
  align-items: right;
  justify-content: flex-start;
  width: 25%;
  ${miniPhone(css`
    width: 100%;
  `)};
`;


function TopHeader(props) {
  return (
    <Container>
      <TopHeaderLeft>                                  
          <SocialLinks /> 
      </TopHeaderLeft> 
      <TopHeaderRight>  
          Rua São Paulo, 486 - Centro, Divinópolis/MG.&nbsp;37 3215 8363 | 37 98822 8363
      </TopHeaderRight>
    </Container>
  );
}

export default TopHeader;