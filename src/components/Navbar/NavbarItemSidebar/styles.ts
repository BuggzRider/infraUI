import { css } from "@emotion/react";

export const sideNav = (theme: any) => css`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin: 1rem;
  label: sideNav;
`;

export const sideNavCollapsibleHeadingWrapper = (theme: any) => css``;

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
