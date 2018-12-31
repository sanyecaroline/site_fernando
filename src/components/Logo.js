import React from 'react';

import styled from 'styled-components';
import rem from '../utils/rem';

import imgageLogo from '../media/images/doctor.jpg'

const SiteLogo = styled.div`    
  background-position: center;
  background-size: cover;
  background-image: url(${imgageLogo});
  padding: ${rem(5)};
  width: ${rem(250)};
  height: ${rem(100)};
`;

function Logo(pops) {
  return (
    <SiteLogo />
  )
}

export default Logo;