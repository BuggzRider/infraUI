/* eslint-disable @typescript-eslint/no-unused-vars */
import { css } from "@emotion/react";
import { listOpening } from "styles/keyframes";

export const productContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  label: productContainer;
`;

export const productSectionContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
  label: productSectionContainer;
`;

// ============== Center Image ===============//

export const productCenterImageMediaStyles = (theme: any) => css`
  label: productCenterImageMediaStyles;
`;

export const productCenterImageContainerStyles = (theme: any) => css`
  width: 100%;
  height: 586px;
  border: unset;
  border-radius: unset;
  &:before {
    width: 100%;
    height: 40%;
    top: 0;
    right: 0;
    bottom: 0;
    left: auto;
    position: absolute;
    content: "";
    z-index: 1;
    background-image: linear-gradient(#000, transparent);
  }
  label: productCenterImageContainerStyles;
`;

export const productCenterOverlayTextContainerStyles = (theme: any) => css`
  align-items: flex-end;
  & h1 {
    font-weight: 500;
    font-size: 3.4rem;
    margin-bottom: 7rem;
    font-family: var(--CinzelFont-font);
  }
  label: productCenterOverlayTextContainerStyles;
`;

export const productProductsSectionContainer = (theme: any) => css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0 1.5rem;
  label: productProductsSectionContainer;
`;

export const productExtraStyle = (theme: any) => css`
  ${theme.breakpoints({
    maxWidth: ["100%", "50%", "33%"],
    flex: ["1 1 100%", "1 1 45%", "1 1 32%"],
  })}
  margin: 15px 5px;
  label: productExtraStyle;
`;

//============ Tab component styles =============//

export const productTabComponentContainer = (theme: any) => css`
  font-family: var(--PoppinsFonts-font);
  font-size: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 88px 0;
  label: productTabComponentContainer;
`;

export const productTabComponentHeadingContainer = (theme: any) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin-bottom: 25px;
  label: productTabComponentHeadingContainer;
`;

export const productTabHeadingElementContainer = (theme: any) => css`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 10px 0;
  margin: 0.5rem;
  margin-right: 50px;
  text-transform: uppercase;
  label: productTabHeadingElementContainer;
`;

export const productTabHeadingElementActive = (theme: any) => css`
  color: black;
  border-bottom: 2px solid black;
  label: productTabHeadingElementActive;
`;

export const productTabComponentBodyContainer = (theme: any) => css`
  display: flex;
  width: 100%;
  color: black;
  text-align: center;
  line-height: 1.8;
  font-weight: 500;
  display: block;
  overflow: hidden;
  transition: all 1s;
  animation: ${listOpening} 1s linear;
  label: productTabComponentBodyContainer;
`;

//============ Floor Tab component styles =============//

export const productFloorTabComponentContainer = (theme: any) => css`
  font-size: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  label: productFloorTabComponentContainer;
`;

export const productFloorTabComponentHeadingContainer = (theme: any) => css`
  flex: 0 0 18%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-item: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 25px;
  label: productFloorTabComponentHeadingContainer;
`;

export const productFloorTabHeadingElementContainer = (theme: any) => css`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding: 0 15px;
  margin: 0.5rem;
  max-width: 200px;
  border: 1px solid #000;
  margin-bottom: 10px;
  text-align: center;
  line-height: 1.5;
  label: productFloorTabHeadingElementContainer;
`;

export const productFloorTabHeadingElementActive = (theme: any) => css`
  color: white;
  background-color: black;
  label: productFloorTabHeadingElementActive;
`;

export const productFloorTabComponentBodyContainer = (theme: any) => css`
  display: flex;
  flex: 0 0 35%;
  color: black;
  text-align: center;
  line-height: 1.8;
  font-weight: 500;
  display: block;
  overflow: hidden;
  transition: all 1s;
  animation: ${listOpening} 1s linear;
  label: productFloorTabComponentBodyContainer;
`;

export const productFloorTabImageConatainer = (theme: any) => css`
  max-height: 45vh;
  height: 100%;
  label: productFloorTabComponentBodyContainer;
`;

export const productFloorTabImageComponent = (theme: any) => css`
  object-fit: scale-down;
  label: productFloorTabImageComponent;
`;

//============ Table component styles =============//

export const productTableChildContainer = (theme: any) => css`
  width: 95%;
  max-width: 1120px;
  margin: 0 auto;
  label: productTableChildContainer;
`;

// =========== Emi Sidebar styles =================//

export const productSidebarEmiListContainerOpen = (theme: any) => css`
  opacity: 1;
  width: 25%;
  label: productSidebarEmiListContainerOpen;
`;

export const productSidebarEmiWrapperContainer = (theme: any) => css`
  background-color: #fff;
  label: productSidebarEmiWrapperContainer;
`;
