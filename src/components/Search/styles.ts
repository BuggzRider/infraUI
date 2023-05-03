import { css } from "@emotion/react";

export const searchBarForm = (theme: any) => css`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  position: relative;
  max-width: 100%;
  width: 400px;
  margin: 0 1rem;
  & > label {
    position: absolute;
    font-size: 12px;
    color: #666;
    top: 2px;
    pointer-events: none;
    transition: all 1s ease;
  }
`;

export const searchBarInput = (theme: any) => css`
  border: none;
  border-bottom: 1px solid #000;
  font-size: 12px;
  color: #666666;
  font-weight: 500;
  padding: 7px 0px;
  width: 100%;
  cursor: pointer;
  outline: none;
  margin-right: 2rem;
  &:focus + label {
    top: -10px;
  }
`;

export const searchBarButton = (theme: any) => css`
  position: relative;
  border: none;
  background-color: #000;
  color: #fff;
  font-weight:700;
  font-size: 1rem;
  padding: 7px 20px;
  width: 135px;
  cursor: pointer;
`;
