/* eslint-disable @typescript-eslint/no-unused-vars */
import { css } from "@emotion/react";

export const table = (theme: any) => css`
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  border: 1px solid #d7d7d7;
  font-size: 14px;
  label: table;

  thead {
    text-align: left;
  }

  thead > tr {
    background-color: #000000;
    color: white;
  }

  thead > tr > th {
    padding: 10px 20px;
    text-transform: uppercase;
  }

  tbody > tr {
    color: #8c8c8c;
    font-weight: 600;
    padding: 10px 20px;
    text-align: left;
    text-transform: uppercase;
  }

  tbody > tr > td {
    padding: 10px 20px;
  }
`;
