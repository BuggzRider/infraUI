import { css } from "@emotion/react";

export const layoutContainer = (theme: any) => css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  label: layoutContainer;
  ${theme.breakpoints({
    fontSize: [theme.fontSizes.body, theme.fontSizes.h5, theme.fontSizes.h5],
  })}
`;

export const layoutContainerInner = (theme: any) => css`
  width: 100%;
  position: relative;
  label: layoutContainerInner;
`;
