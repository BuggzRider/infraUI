import { headerWrapperContainer, headerWrapperHedaing } from "./styles";

const HeadingWrapper = ({ heading, children }: any) => {
  return (
    <div css={(theme) => headerWrapperContainer(theme)}>
      <h1 css={(theme) => headerWrapperHedaing(theme)}>{heading}</h1>
      {children}
    </div>
  );
};

export default HeadingWrapper;
