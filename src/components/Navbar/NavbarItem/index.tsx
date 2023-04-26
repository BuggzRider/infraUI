import { css } from "@emotion/react";
import LinkListRenderer from "components/LinkListRenderer";
import { NavbarItemTypes } from "config";
import { useState } from "react";
import { NavbarPropTypes } from "../types";
import {
  listItem,
  listItemsWrapper,
  listNavItemWrapper,
  navItem,
} from "./styles";

const NavbarItem = ({ config }: NavbarPropTypes) => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  return (
    <div
      css={(theme) => navItem(theme)}
      onMouseOver={() => setIsLinkHovered(true)}
      onMouseOut={() => setIsLinkHovered(false)}
    >
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
        <>
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
          {config.type !== NavbarItemTypes.HYPERLINK_ONLY && isLinkHovered && (
            <div css={listNavItemWrapper}>
              <div css={() => listItemsWrapper()}>
                {config.listItems.map((dataItem: any) => (
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
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NavbarItem;
