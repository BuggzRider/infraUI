import { css } from "@emotion/react";


export const productAmenitiesCardSliderHeadingContainer = (theme: any) => css`
  label: productAmenitiesCardSliderHeadingContainer;
  & > p {
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.black};
  }
`;