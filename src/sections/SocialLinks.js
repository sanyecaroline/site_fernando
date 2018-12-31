import React, { Fragment } from 'react';

import styled from 'styled-components';

import rem from '../utils/rem';

const Link = styled.a`
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-style: solid;
  border-width: 0px;
  border-color: #323232;
  background-color: #168cd0;
  color: #ffffff;  
  margin: 5px; 
  transition: background-color 0.4s ease;
  -webkit-transition: background-color 0.4s ease; 
  &:hover {
    background-color: #04539d;
    transition: background-color 0.4s ease;
    -webkit-transition: background-color 0.4s ease; 
  }  
`;

const Svg = styled.svg`
  width: ${p => rem(Number(p.width))};
  height: ${p => rem(Number(p.height))};    
  top: 10px;
`

const FacebookIcon = () => (
  <Svg width="30" height="30" viewBox="-3 -3 30 30 ">
    <title>Facebook Dr. Fernando Franco</title>
    <path 
      fill="#fff"
      d="M13,10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189,0.374-2.691,1.118-3.512C11.862,4.41,12.791,4,13.904,4H16v3h-2.1   C13.402,7,13,7.402,13,7.899V10z" 
    />
  </Svg>
)

const InstagramIcon = () => (
  <Svg width="30" height="30" viewBox="-5 -8 70 70">
    <title>Instagram Dr. Fernando Franco</title>
    <path
      fill="#fff"       
      d="m 21.767361,24.230769 h -9.075053 v -1.153846 0 c 0,11.127703 0,18.076923 0,18.076923 0,4.999999 5,4.999999 5,4.999999 h 23.461537 c 0,0 5,0 5.000001,-4.999999 l -1e-6,-16.923077 h 1e-6 v -1.153846 h -9.807058 c -1.578819,-2.101927 -4.092488,-3.461538 -6.923711,-3.461538 -2.831223,0 -5.344892,1.359611 -6.923711,3.461538 h -9.807058 c 0,-1.700579 0,-3.498747 0,-5.384615 0,-3.156088 1.992178,-4.319998 3.461538,-4.749227 v 6.672304 h 1.153846 v -6.898487 0 c 0.240017,-0.02459 0.384616,-0.02459 0.384616,-0.02459 h 23.461538 c 0,0 4.999999,0 4.999999,5 v 6.538461 h -9.075053 c 0.637287,1.205607 0.998131,2.579894 0.998131,4.038462 0,4.779387 -3.874459,8.653846 -8.653846,8.653846 -4.779388,0 -8.653846,-3.874459 -8.653846,-8.653846 0,-1.458568 0.360844,-2.832855 0.99813,-4.038462 z M 40.078529,15 c -1.105457,0 -2.001606,0.901442 -2.001606,2.001606 v 1.766019 c 0,1.105456 0.901442,2.001606 2.001606,2.001606 h 1.766019 c 1.105456,0 2.001606,-0.901443 2.001606,-2.001606 V 17.001606 C 43.846154,15.896149 42.944711,15 41.844548,15 Z M 20.769231,12.692308 v 6.923077 h 1.153846 v -6.923077 z m -2.307693,0 v 6.923077 h 1.153847 v -6.923077 z m 10.961539,22.5 c 3.82351,0 6.923077,-3.099567 6.923077,-6.923077 0,-3.82351 -3.099567,-6.923077 -6.923077,-6.923077 -3.82351,0 -6.923077,3.099567 -6.923077,6.923077 0,3.82351 3.099567,6.923077 6.923077,6.923077 z m 0,-2.307693 c 2.549007,0 4.615384,-2.066378 4.615384,-4.615384 0,-2.549007 -2.066377,-4.615385 -4.615384,-4.615385 -2.549007,0 -4.615385,2.066378 -4.615385,4.615385 0,2.549006 2.066378,4.615384 4.615385,4.615384 z"
    />
  </Svg>
)

const YoutubeIcon = () => (
  <Svg width="30" height="30" viewBox="-7 -8 70 70">
    <title>Youtube Dr. Fernando Franco</title>
    <path 
      fill="#fff" 
      d="M43.911,28.21H12.782c-4.948,0-8.959,4.015-8.959,8.962v7.201c0,4.947,4.011,8.961,8.959,8.961h31.129   c4.947,0,8.959-4.014,8.959-8.961v-7.201C52.87,32.225,48.858,28.21,43.911,28.21z M19.322,33.816h-2.894v14.38h-2.796v-14.38   H10.74V31.37h8.582V33.816z M27.497,48.196h-2.48v-1.36c-0.461,0.503-0.936,0.887-1.432,1.146c-0.496,0.27-0.975,0.396-1.441,0.396   c-0.576,0-1.004-0.183-1.297-0.555c-0.288-0.371-0.435-0.921-0.435-1.664V35.782h2.48v9.523c0,0.294,0.055,0.505,0.154,0.636   c0.107,0.135,0.277,0.197,0.51,0.197c0.18,0,0.412-0.086,0.691-0.26c0.281-0.176,0.537-0.396,0.77-0.668v-9.429h2.48V48.196z    M36.501,45.633c0,0.877-0.195,1.551-0.584,2.021c-0.387,0.47-0.953,0.701-1.686,0.701c-0.488,0-0.922-0.088-1.299-0.27   c-0.379-0.18-0.736-0.457-1.061-0.841v0.951h-2.51V31.37h2.51v5.419c0.336-0.375,0.691-0.666,1.062-0.861   c0.379-0.199,0.76-0.295,1.146-0.295c0.785,0,1.383,0.262,1.797,0.791c0.416,0.529,0.623,1.304,0.623,2.32V45.633z M45.104,42.288   h-4.746v2.339c0,0.652,0.08,1.106,0.242,1.359c0.166,0.254,0.445,0.378,0.842,0.378c0.412,0,0.697-0.107,0.863-0.321   c0.16-0.216,0.246-0.686,0.246-1.416v-0.565h2.553v0.637c0,1.272-0.309,2.231-0.936,2.878c-0.617,0.641-1.547,0.959-2.783,0.959   c-1.113,0-1.99-0.339-2.627-1.021c-0.635-0.678-0.959-1.619-0.959-2.815v-5.576c0-1.073,0.354-1.956,1.057-2.633   c0.701-0.677,1.604-1.015,2.715-1.015c1.137,0,2.01,0.313,2.619,0.941c0.609,0.629,0.914,1.529,0.914,2.706V42.288z" 
    />
    <path 
      fill="#fff" 
      d="M41.466,37.646c-0.396,0-0.678,0.111-0.85,0.343c-0.176,0.218-0.258,0.591-0.258,1.112v1.255h2.193v-1.255   c0-0.521-0.088-0.895-0.262-1.112C42.122,37.758,41.843,37.646,41.466,37.646z" 
    />
    <path 
      fill="#fff" 
      d="M32.909,37.604c-0.176,0-0.354,0.039-0.525,0.12c-0.174,0.079-0.344,0.21-0.512,0.38v7.733   c0.199,0.2,0.396,0.354,0.588,0.442c0.191,0.085,0.389,0.133,0.6,0.133c0.305,0,0.527-0.088,0.67-0.266   c0.141-0.176,0.213-0.457,0.213-0.854v-6.411c0-0.422-0.084-0.738-0.26-0.955C33.501,37.712,33.243,37.604,32.909,37.604z" 
      />
    <polygon 
      fill="#fff" 
      points="16.858,23.898 20.002,23.898 20.002,16.208 23.663,5.36 20.467,5.36 18.521,12.77 18.323,12.77 16.28,5.36    13.113,5.36 16.858,16.554  " 
    />
    <path 
      fill="#fff" 
      d="M27.923,24.243c1.27,0,2.266-0.333,2.992-0.999c0.721-0.669,1.082-1.582,1.082-2.752v-7.064   c0-1.041-0.369-1.898-1.104-2.559c-0.74-0.659-1.688-0.991-2.844-0.991c-1.27,0-2.281,0.314-3.033,0.941   c-0.75,0.627-1.127,1.468-1.127,2.531v7.088c0,1.163,0.367,2.083,1.1,2.773C25.722,23.898,26.702,24.243,27.923,24.243z    M26.765,13.246c0-0.297,0.107-0.537,0.316-0.725c0.217-0.184,0.492-0.273,0.834-0.273c0.369,0,0.668,0.089,0.896,0.273   c0.227,0.188,0.34,0.428,0.34,0.725v7.451c0,0.365-0.111,0.655-0.336,0.864c-0.223,0.21-0.523,0.313-0.9,0.313   c-0.369,0-0.654-0.1-0.854-0.31c-0.197-0.205-0.297-0.493-0.297-0.868V13.246z" 
    />
    <path 
      fill="#fff" 
      d="M36.214,24.098c0.525,0,1.064-0.15,1.619-0.438c0.561-0.292,1.098-0.719,1.609-1.276v1.515h2.793V10.224h-2.793v10.38   c-0.26,0.297-0.549,0.541-0.859,0.735c-0.316,0.192-0.576,0.288-0.781,0.288c-0.262,0-0.455-0.072-0.568-0.221   c-0.115-0.143-0.18-0.377-0.18-0.698V10.224h-2.789v11.429c0,0.815,0.164,1.424,0.488,1.828   C35.083,23.891,35.565,24.098,36.214,24.098z" 
    />
  </Svg>
)

function SocialLinks(props) {
  return (
    <Fragment>
      <Link href='https://www.facebook.com/drfernandofranco' target='_blank'>
        <FacebookIcon />
      </Link>
      <Link href='https://www.instagram.com/drfernandofranco' target='_blank'>
        <InstagramIcon />
      </Link>
      <Link href='https://www.youtube.com' target='_blank'>
        <YoutubeIcon />
      </Link>
    </Fragment>
  );
}

export default SocialLinks;