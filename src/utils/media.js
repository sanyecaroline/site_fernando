import { css } from 'styled-components';

export const mobile = inner => css`
  @media (max-width: ${1000 / 16}em) {
    ${inner};
  }
`;

export const phone = inner => css`
  @media (max-width: ${650 / 16}em) {
    ${inner};
  }
`;

export const miniPhone = inner => css`
  @media (max-width: ${350 / 16}em) {
    ${inner};
  }
`;
