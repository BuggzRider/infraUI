/* eslint-disable @typescript-eslint/no-unused-vars */
import { css } from "@emotion/react";

export const categoryContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  label: categoryContainer;
`;

export const categorySectionContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
  label: categorySectionContainer;
`;

// ============== Center Image ===============//

export const categoryCenterImageMediaStyles = (theme: any) => css`
  object-fit: cover;
  label: categoryCenterImageMediaStyles;
`;

export const categoryCenterImageContainerStyles = (theme: any) => css`
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
  label: categoryCenterImageContainerStyles;
`;

export const categoryCenterOverlayTextContainerStyles = (theme: any) => css`
  align-items: flex-end;
  & h1 {
    font-weight: 500;
    font-size: 3.4rem;
    margin-bottom: 7rem;
    font-family: var(--CinzelFont-font);
  }
  label: categoryCenterOverlayTextContainerStyles;
`;

export const categoryProductsSectionContainer = (theme: any) => css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0 1.5rem;
  label: categoryProductsSectionContainer;
`;

export const productExtraStyle = (theme: any) => css`
  ${theme.breakpoints({
    maxWidth: ["100%", "50%", "33%"],
    flex: ["1 1 100%", "1 1 45%", "1 1 32%"],
  })}
  margin: 15px 5px;
  label: productExtraStyle;
`;
