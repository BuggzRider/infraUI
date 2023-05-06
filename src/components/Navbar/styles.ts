import { css } from "@emotion/react";

export const navBarStyles = (theme: any) => css`
  width: 100%;
  height: 150px;
  display: grid;
  grid-template-columns: 1fr auto;
  flex-wrap: no-wrap;
  color: ${theme.colors.white};
  color: white;
  position: absolute;
  z-index: ${theme.zIndexs[3]};
  ${theme.breakpoints({
    height: ["100px", "100px", "150px"],
    padding: ["0 1rem", "0 1rem", "0 5rem"]
  })}
  font-size: 12px;
  text-transform: uppercase;
  label: navBarStyles;
`;

export const navbarIconsContainer = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: no-wrap;
  margin-top: 1rem;
  & > *{
    margin-left: 0.5rem;
  }
  label: navbarIconsContainer;
`;

export const navbarIcon = (theme: any) => css`
  color: white;
  fill: white;
  cursor: pointer;
  label: navbarIcon;
`;

export const navbarLogoContainer = (theme: any) => css`
  display: grid;
  grid-template-rows: 50% 50%;
  ${theme.breakpoints({
    gridTemplateRows: ["100%", "100%", "50% 50%"]
  })}
  label: navbarLogoContainer;
`;

export const navbarLogoLink = (theme: any) => css`
  color: ${theme.colors.black};
  margin-top: 1.5rem;
  display: flex;
  ${theme.breakpoints({
    justifyContent: ["flex-start%", "flex-start", "center"]
  })}
  text-decoration: none;
  label: navbarLogoLink;
`;

export const navbarPhoneLink = (theme: any) => css`
  color: ${theme.colors.white};
  text-decoration: none;
  label: navbarPhoneLink;
`;