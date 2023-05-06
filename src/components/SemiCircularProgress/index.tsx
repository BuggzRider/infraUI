import { semiCircularProgressBar } from "./styles";

const SemiCircularProgress = ({ min, max, value }: any) => {
  return <div css={(theme) => semiCircularProgressBar(theme, value)}></div>;
};

export default SemiCircularProgress;
