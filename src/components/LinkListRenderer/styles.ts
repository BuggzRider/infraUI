import { css } from "@emotion/react";

export const linkListItemContainer = (theme: any) => css`
  list-style-type: none;
  transition: all 1s;
  label: linkListItemContainer;
`;

export const linkListItemLink = (theme: any) => css`
  color: ${theme.colors.white};
  text-decoration: none;
  label: linkListItemLink;
  cursor: pointer;
  position: relative;
`;
