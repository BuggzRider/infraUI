/* eslint-disable @typescript-eslint/no-unused-vars */
import { css } from "@emotion/react";
import { listOpening } from "styles/keyframes";

export const aboutUsContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  label: aboutUsContainer;
`;

export const aboutUsSectionContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  label: aboutUsSectionContainer;
`;

// ============== Center Image ===============//

export const aboutUsCenterImageMediaStyles = (theme: any) => css`
  object-fit: cover;
  ${theme.breakpoints({
    transform: [`scale(1.1)`, `scale(1)`, `scale(1)`],
  })}
  label: aboutUsCenterImageMediaStyles;
`;

export const aboutUsCenterImageContainerStyles = (theme: any) => css`
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
  &:after {
    width: 100%;
    height: 30%;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    content: "";
    z-index: 1;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(transparent),
      to(#000)
    );
    background-image: linear-gradient(transparent, #000);
  }
  label: aboutUsCenterImageContainerStyles;
`;

export const aboutUsCenterOverlayTextContainerStyles = (theme: any) => css`
  align-items: flex-end;
  & h1 {
    font-weight: 500;
    font-size: 3.4rem;
    margin-bottom: 7rem;
    font-family: var(--CinzelFont-font);
  }
  label: aboutUsCenterOverlayTextContainerStyles;
`;

// ============== Info sections ===============//

export const aboutUsInfoStyles = (theme: any) => css`
  width: 100%;
  position: relative;
  ${theme.breakpoints({
    padding: ["1rem", "1rem", "7rem"],
  })}
  background-color: #f4f4f4;
  label: aboutUsInfoStyles;
`;

export const aboutUsInfoStylesContainer = (theme: any) => css`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  label: aboutUsInfoStylesContainer;
`;

export const aboutUsInfoStylesInnerContainer = (theme: any) => css`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--PoppinsFonts-font);
  font-size: 1rem;
  color: black;
  & b {
    font-family: var(--CinzelFont-font);
    font-size: 18px;
    font-weight: 700;
  }
  label: aboutUsInfoStylesInnerContainer;
`;

export const aboutUsInfoMediaContainerStyles = (theme: any) => css`
  width: 90%;
  height: 320px;
  ${theme.breakpoints({
    display: ["none", "none", "block"],
  })}
  position: relative;
  background-color: #f4f4f4;
  label: aboutUsInfoMediaContainerStyles;
`;

export const aboutUsInfoTextContainerStyles = (theme: any) => css`
  ${theme.breakpoints({
    padding: ["1rem", "1rem", "0 6rem"],
  })}
  label: aboutUsInfoTextContainerStyles;
`;

// ============== About us Video ===============//

export const aboutUsVideoStyles = (theme: any) => css`
  object-fit: cover;
  lable: aboutUsVideoStyles;
`;

export const aboutUsVideoContainerStyles = (theme: any) => css`
  width: 100%;
  height: 100vh;
  border: unset;
  border-radius: unset;
  lable: aboutUsVideoContainerStyles;
`;

//============ Tab component styles =============//

export const tabComponentContainer = (theme: any) => css`
  font-family: var(--PoppinsFonts-font);
  font-size: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 88px 0;
  label: tabComponentContainer;
`;

export const tabComponentHeadingContainer = (theme: any) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin-bottom: 60px;
  label: tabComponentHeadingContainer;
`;

export const tabHeadingElementContainer = (theme: any) => css`
  font-size: 24px;
  cursor: pointer;
  padding: 5px 0;
  margin: 0.5rem;
  font-family: var(--CinzelFont-font);
  label: tabHeadingElementContainer;
`;

export const tabHeadingElementActive = (theme: any) => css`
  color: black;
  border-bottom: 2px solid black;
  label: tabHeadingElementActive;
`;

export const tabComponentBodyContainer = (theme: any) => css`
  display: flex;
  color: black;
  text-align: center;
  line-height: 1.8;
  font-weight: 500;
  display: block;
  overflow: hidden;
  width: 50%;
  & b {
    font-family: var(--CinzelFont-font);
    font-size: 18px;
    font-weight: 700;
    color: #666666;
  }
  transition: all 1s;
  animation: ${listOpening} 1s linear;
  label: tabComponentBodyContainer;
`;
