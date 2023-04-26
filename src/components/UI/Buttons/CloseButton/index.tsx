import { closeButtonContainer, closeButtonStyles } from "./styles";

const CloseButton = ({ onClickhandler }: any) => {
  return (
    <div css={(theme) => closeButtonContainer(theme)} onClick={onClickhandler}>
      <span css={(theme) => closeButtonStyles(theme)}>&nbsp;</span>
    </div>
  );
};

export default CloseButton;
