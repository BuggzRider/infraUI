import { css } from "@emotion/react";
import { menuVisibility } from "styles/keyframes";

export const navItem = (theme: any) => css`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  label: navItem;
`;

export const expandedNavItemWrapper = css`
  position: absolute;
  top: 6rem;
  left: 0rem;
  z-index: 200;
  label: expandedNavItemWrapper;
`;

export const listNavItemWrapper = css`
  position: absolute;
  top: 3rem;
  left: 0.5rem;
  z-index: 200;
  label: listNavItemWrapper;
`;

export const listItemsWrapper = () => css`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  label: listItemsWrapper;
`;

export const listItem = () => css`
  min-width: 9rem;
  display: flex;
  width: 100%;
  label: listItem;
`;

export const imageExtraOverlayStyles = (theme: any) => css`
  justify-content: flex-start;
  align-items: flex-end;
  h1 {
    font-size: ${theme.fontSizes.h3};
  }
  label: overlayExtraStyles;
`;
