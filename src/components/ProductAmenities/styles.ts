import { css } from "@emotion/react";

export const productAmenitiesCSContainer = (theme: any) => css`
  width: 100%;
  position: relative;
  background-image: url("/assets/images/amenitiesBackground.jpeg");
  background-size: cover;
  background-attachment: fixed;
  padding: 80px 0px;
  label: productAmenitiesCSContainer;

  &:before {
    width: 100%;
    height: 100%;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    content: "";
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#000000e0),
      to(#000000e0)
    );
    background-image: linear-gradient(#000000e0, #000000e0);
  }
`;

export const productAmenitiesCSHeadingContainer = (theme: any) => css`
  position: relative;
  label: productAmenitiesCSHeadingContainer;
  & > h1 {
    font-size: 36px;
    color: white;
    font-family: var(--CinzelFont-font);
    text-align: center;
    margin-bottom: 70px;
    text-transform: uppercase;
  }
`;

export const productAmenitiesCSSliderContainer = (theme: any) => css`
  width: 95%;
  max-width: 1120px;
  margin: 0 auto;
  label: productAmenitiesCSSliderContainer;
`;

export const productAmenitiesSliderImageContainer = (theme: any) => css`
  width: 50px;
  height: 50px;
  label: productAmenitiesSliderImageContainer;
`;

export const productAmenitiesSliderImage = (theme: any) => css`
  object-cover: contain;
  label: productAmenitiesSliderImage;
`;

export const productAmenitiesSliderArrowStyles = (theme: any) => css`
  width: 10px;
  height: 10px;
  label: productAmenitiesSliderImage;
`;