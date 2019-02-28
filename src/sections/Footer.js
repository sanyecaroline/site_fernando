import React from 'react';
import styled, { css } from 'styled-components';
import { mobile } from '../utils/media';

import Map from '../components/Map';

import rem from '../utils/rem';

const DivContainer = styled.div`
  height: 550px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  ${mobile(css`    
    height: ${rem(405)};
  `)};
`;


function Footer() {
  return (
    <DivContainer>
      <Map />
    </DivContainer>
  )
}

export default Footer;  