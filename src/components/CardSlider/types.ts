import { SerializedStyles } from "@emotion/react";
import { MediaFooterTypes } from "components/MediaContent/MediaFooterContent/types";
import { Key } from "react";

export enum CARD_SLIDER_TYPES {
  IMAGE = "IMAGE",
  TEXT_CARD = "TEXT_CARD",
}
export type SlideTypes = {
  footerTextConfig?: MediaFooterTypes | any;
  src: string;
  url: string;
  alt: string;
  key: Key;
};

export type ExtraStylesTypes = {
  cardSliderImageContainer: (theme: any) => SerializedStyles;
  cardSliderImage: (theme: any) => SerializedStyles;
  commonArrowStyles: (theme: any) => SerializedStyles;
};

export type CardSliderPropTypes = {
  slides: Array<SlideTypes>;
  type: CARD_SLIDER_TYPES;
  extraStyles?: ExtraStylesTypes;
};
