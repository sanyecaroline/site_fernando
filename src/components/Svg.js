import styled from 'styled-components';

import rem from '../utils/rem';

const Svg = styled.svg`
  width: ${p => rem(Number(p.width))};
  height: ${p => rem(Number(p.height))};      
`
export default Svg;
