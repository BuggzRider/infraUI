/* eslint-disable @typescript-eslint/no-unused-vars */
import { css } from "@emotion/react";

export const productOverviewContainer = (theme: any) => css`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  label: productOverviewContainer;
`;

export const productOverviewImageMediaStyles = (theme: any) => css`
  flex: 0 0 50%;
  height: 100%;
  border: none;
  label: productOverviewImageMediaStyles;
`;

export const productOverviewTextWrapperStyles = (theme: any) => css`
  flex: 0 0 50%;
  height: 100%;
  display: flex;
  background-color: black;
  color: white;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px 70px 70px 70px;
  label: productOverviewTextWrapperStyles;
`;

export const productOverviewTextContainerStyles = (theme: any) => css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 600;
  label: productOverviewTextContainerStyles;
`;

export const productOverviewTextHeaderStyles = (theme: any) => css`
  font-family: var(--CinzelFont-font);
  font-size: 24px;
  margin-bottom: 40px;
  label: productOverviewTextHeaderStyles;
`;

export const productOverviewTextItemStyles = (theme: any) => css`
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  label: productOverviewTextItemStyles;
`;

export const productOverviewTextItemHeadingStyles = (theme: any) => css`
  font-size: 12px;
  opacity: 59%;
  margin-bottom: 0.2rem;
  label: productOverviewTextItemHeadingStyles;
`;

export const productOverviewTextItemBodyStyles = (theme: any) => css`
  font-size: 18px;
  label: productOverviewTextItemBodyStyles;
`;
