import React from 'react';

import styled, { css } from 'styled-components';

import { mobile } from '../utils/media';

import rem from '../utils/rem';

const Iframe = styled.iframe`
  width: ${rem(600)};
  height: ${rem(450)};  
  ${mobile(css`
    width: 95%;
    height: ${rem(400)};
  `)};

`;

function Map() {
  return (
    <Iframe 
      title='Endereço Clínica Inspirar'
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.774333117299!2d-44.89217858412888!3d-20.14346015018667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa0a59db4c57445%3A0xfd24f9439fb5701d!2sCl%C3%ADnica+Inspirar!5e0!3m2!1spt-BR!2sbr!4v1550630340455&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near'
      frameborder='0'
      allowfullscreen
    >
    </Iframe>
  )
}

export default Map;


/*
<iframe 
frameborder="0" 
scrolling="no" 
marginheight="0" 
marginwidth="0" 
src="https://maps.google.com/maps?q=Avenida%20das%20Am%C3%A9ricas%2C%207.899%2C%20Bloco%202%20%286%C2%BA%20Andar%29%2C%20Sala%3A%20602%20%E2%80%93%20Platinum%20Advanced%20Offices%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near">
</iframe>*/