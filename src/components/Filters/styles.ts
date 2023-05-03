import { css } from "@emotion/react";

export const filterWrapper = (theme: any) => css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const filterContainer = (theme: any) => css`
  width: 100%;
  max-width: 1250px;
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;

export const filterItem = (theme: any) => css`
  line-height: 1.9;
  margin: 1rem 0;
  label: filterItem;
`;
