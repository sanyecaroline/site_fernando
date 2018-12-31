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
  border-bottom: 0px none #323232;
  color: #fff;  
  line-height: 38px;  
  width: 100%;
  letter-spacing: ${rem(0.8)}; 
  ${mobile(css`
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    line-height: 28px; 
  `)};  
`;

Container.displayName = 'Container';

const TopHeaderRight = styled.div`
  padding: 10px 20px;  
  display: flex;  
  align-items: center;
  justify-content: flex-end;
  width: 75%;
  ${mobile(css`
    width: 100%;
    justify-content: center;
    text-align: center;
    padding: 0px;
  `)};
  ${miniPhone(css`    
    display: none;    
  `)};
`;

TopHeaderRight.displayName = 'TopHeaderRight';

const TopHeaderLeft = styled.div`
  padding: 10px 20px;  
  display: flex;  
  align-items: center;
  justify-content: flex-start;
  width: 25%;
  ${mobile(css`
    width: 100%;
    justify-content: center;
    padding: 0px;
  `)};  
`;

TopHeaderLeft.displayName = 'TopHeaderLeft';


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