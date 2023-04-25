import { css } from "@emotion/react";

export const navBarStyles = (theme: any) => css`
  width: 100%;
  height: 150px;
  display: grid;
  grid-template-columns: 36% 26% 38%;
  flex-wrap: no-wrap;
  color: ${theme.colors.white};
  color: white;
  position: absolute;
  z-index: ${theme.zIndexs[5]};
  padding: 0 5rem ;
  font-size: 12px;
  label: navBarStyles;
`;

export const navbarIconsContainer = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: no-wrap;
  margin-top: 1rem;
  label: navbarIconsContainer;
`;

export const navbarIcon = (theme: any) => css`
  padding: ${theme.space[1]}px ${theme.space[2]}px;
  color: white;
  fill: white;
  cursor: pointer;
  label: navbarIcon;
`;

export const navbarLogoContainer = css`
  display: grid;
  grid-template-rows: 50% 50%;
  label: navbarLogoContainer;
`;

export const navbarLogoLink = (theme: any) => css`
  color: ${theme.colors.black};
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  text-decoration: none;
  label: navbarLogoLink;
`;

export const navbarPhoneLink = (theme: any) => css`
  color: ${theme.colors.white};
  text-decoration: none;
  label: navbarLogoLink;
`;