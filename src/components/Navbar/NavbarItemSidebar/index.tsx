import { css } from "@emotion/react";
import LinkListRenderer from "components/LinkListRenderer";
import { NavbarPropTypes } from "../types";
import {
  listItem,
  listItemsWrapper,
  sideNav,
  sideNavCollapsibleHeadingWrapper,
} from "./styles";
import Collapsible from "react-collapsible";
import { NavbarItemTypes } from "config";

const NavbarItemSidebar = ({ config }: NavbarPropTypes) => {
  return (
    <div css={(theme) => sideNav(theme)}>
      {config.type === NavbarItemTypes.HYPERLINK_ONLY ? (
        <LinkListRenderer
          key={config.key}
          config={config}
          linkStyles={() => css`
            transition: all 1s ease;
            &:hover {
              color: #c9a43d;
            }
          `}
        />
      ) : (
        <Collapsible
          easing={"cubic-bezier(0.215, 0.61, 0.355, 1)"}
          trigger={
            <div css={(theme) => sideNavCollapsibleHeadingWrapper(theme)}>
              <LinkListRenderer
                key={config.key}
                config={config}
                linkStyles={() => css`
                  transition: all 1s ease;
                  &:after {
                    content: "";
                    position: absolute;
                    top: 39%;
                    right: -16px;
                    width: 6px;
                    height: 6px;
                    border-top: 1.5px solid white;
                    border-right: 1.5px solid white;
                    margin-right: 2px;
                    transform: translate(-50%, -50%) rotate(135deg);
                  }
                  &:hover {
                    color: #c9a43d;
                  }
                `}
              />
            </div>
          }
        >
          <div css={() => listItemsWrapper()}>
            {config.listItems?.map((dataItem: any) => (
              <span key={dataItem.key} css={() => listItem()}>
                <LinkListRenderer
                  key={dataItem.key}
                  config={dataItem}
                  containerStyles={() => css`
                    padding: 5px 16px;
                    width: 100%;
                    display: flex;
                  `}
                  linkStyles={() => css`
                    transition: all 1s ease;
                    &:hover {
                      color: #c9a43d;
                    }
                  `}
                />
              </span>
            ))}
          </div>
        </Collapsible>
      )}
    </div>
  );
};

export default NavbarItemSidebar;
