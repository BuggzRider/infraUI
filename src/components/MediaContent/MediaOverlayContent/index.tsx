import { css } from "@emotion/react";
import Button from "components/UI/Buttons/Button";
import {
  mediaOverlayContentBody,
  mediaOverlayContentButton,
  mediaOverlayContentButtonContainer,
  mediaOverlayContentContainer,
  mediaOverlayContentHeading,
  mediaOverlayContentWrapper,
} from "./styles";
import { MediaOverlayTypes } from "./types";
import { bounce } from "styles/keyframes";

const MediaOverlayContent = ({
  heading,
  body,
  buttonsArray = [],
  extraContainerStyles = () => css``,
  onButtonClickHandler
}: MediaOverlayTypes) => {
  return (
    <div
      css={[
        (theme) => mediaOverlayContentWrapper(theme),
        (theme) => extraContainerStyles(theme),
      ]}
    >
      <div css={(theme) => mediaOverlayContentContainer(theme)}>
        <h1 css={(theme) => mediaOverlayContentHeading(theme)}>{heading}</h1>
        {body && <p css={(theme) => mediaOverlayContentBody(theme)}>{body}</p>}
        {buttonsArray.length > 0 && (
          <div css={(theme) => mediaOverlayContentButtonContainer(theme)}>
            {buttonsArray.map((button) => (
              <div
                key={button.key}
                css={(theme) => mediaOverlayContentButton(theme)}
              >
                <Button
                  onClickHandler={(e:any)=>onButtonClickHandler(e,button.key)}
                  extraStyles={() => css`
                  transition: all 1s ease;
                  &:before {
                    content: "";
                    position: absolute;
                    top: 39%;
                    left: -16px;
                    width: 9px;
                    height: 9px;
                    border-top: 1.5px solid white;
                    border-right: 1.5px solid white;
                    margin-right: 2px;
                    animation: ${bounce} 2s infinite;
                  }
                  `}
                  {...button}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaOverlayContent;
