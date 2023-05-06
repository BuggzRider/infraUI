import { css } from "@emotion/react";
import { progress } from "styles/keyframes";

export const semiCircularProgressBar = (theme: any, value:any) => css`
    --percentage: ${value};
    --primary: #000;
    --secondary: rgba(117,117,117,0.3);
    --size: 300px;
    animation: ${progress(value)} 2s 0.5s forwards;
    width: var(--size);
    aspect-ratio: 2 / 1;
    border-radius: 50% / 100% 100% 0 0;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: conic-gradient(
      from 0.75turn at 50% 100%,
      var(--primary) calc(var(--percentage) * 1% / 2),
      var(--secondary) calc(var(--percentage) * 1% / 2 + 0.1%)
    );
    mask: radial-gradient(at 50% 100%, white 55%, transparent 55.5%);
    mask-mode: alpha;
    -webkit-mask: radial-gradient(at 50% 100%, #0000 55%, #000 55.5%);
    -webkit-mask-mode: alpha;
  }
  /* demo */
  body {
    margin: 0;
    display: grid;
    place-items: center;
    height: 100vh;
    background: #f0f8ff;
  }

  label: semiCircularProgressBar;
`;
