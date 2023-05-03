import { css } from "@emotion/react";
import { shine } from "styles/keyframes";

export const productListItemLinkContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  text-decoration: none;
  border: none;
  appearance: none;
  position: relative;
  label: productListItemLinkContainer;
`;


export const productListItemContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  text-decoration: none;
  border: none;
  appearance: none;
  position: relative;
  
  &:hover [class$="${productListItemMediaContainerStyles.name}"]:before {
    animation: ${shine} 0.85s;
  }
  &:hover [class$="${productListItemDetailsContainer.name}"] {
    background: black;
    color: white;
  }

  label: productListItemContainer;
`;

export const productListItemImageContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  postion: relative;
  label: productListItemContainer;
`;

export const productListItemMediaContainerStyles = (theme: any) => css`
  width: 100%;
  height: 350px;
  border: unset;
  border-radius: unset;
  transition: all 1s ease;
  cursor: pointer;
  position: relative;
  &:before {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
		content: "";
		display: block;
		height: 100%;
		left: -75%;
		position: absolute;
		top: 0;
		transform: skewX(-25deg);
		width: 50%;
		z-index: 2;
  }
  label: productListItemMediaContainerStyles;
`;

export const productListItemMediaStyles = (theme: any) => css`
  object-fit: cover;
  label: productListItemMediaStyles;
`;

export const productListItemDetailsContainer = (theme: any) => css`
  position: relative;
  left: 0;
  width: 90%;
  background: white;
  padding: 20px;
  z-index: 5;
  margin-top: -50px;
  display: flex;
  justify-content: space-between;
  transition: all 1s ease;
  font-size: 14px;
  color: black;
  line-height: 1.5;
  font-family: var(--PoppinsFonts-font);
  label: productListItemDetailsContainer;
`;

export const productListItemNameAndCityContainer = (theme: any) => css`
  line-height: 1.2;
  label: productListItemNameAndCityContainer;
`;

export const productListItemName = (theme: any) => css`
  font-size: 24px;
  text-transform: uppercase;
  font-family: var(--CinzelFont-font);
  label: productListItemName;
`;

export const productListItemCityName = (theme: any) => css`
  line-height: 1.5;
  font-weight: 600;
  label: productListItemCityName;
`;

export const productListItemTextContainer = (theme: any) => css`
  font-weight: 700;
  font-size: 1rem;
  label: productListItemTextContainer;
`;
