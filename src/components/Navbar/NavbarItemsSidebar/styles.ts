import { css } from "@emotion/react";

export const sideNavContainer = (theme: any) => css`
  ${theme.breakpoints({
    display: ["flex", "flex", "none"],
  })}
  label: sideNavContainer;
`;

export const sideNavListWrapper = css`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1500;
  opacity: 0;
  width: 0;
  background-color: #000;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  label: sideNavListWrapper;
`;

export const sideNavListContainer = (theme: any) => css`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  label: sideNavListContainer;
`;

export const sideNavListContainerOpen = css`
  opacity: 1;
  width: 100%;
  label: sideNavListContainerOpen;
`;

export const sideNavListCloseButtonContainer = css`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  & > div {
    margin: 1rem;
  }
  label: sideNavListCloseButtonContainer;
`;
