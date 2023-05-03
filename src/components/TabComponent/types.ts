import { ReactNode } from "react";

export type TabObjectType = {
  label: String | ReactNode;
  body: ReactNode;
};

export type ExtraStylesTypes = {
  tabComponentBodyContainer: Function;
  tabComponentContainer: Function;
  tabComponentHeadingContainer: Function;
  tabHeadingElementActive: Function;
  tabHeadingElementContainer: Function;
};

export type TabComponentPropTypes = {
  tabs: Array<TabObjectType>;
  extraStyles?: ExtraStylesTypes;
};
