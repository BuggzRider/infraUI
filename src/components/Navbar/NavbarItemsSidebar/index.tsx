import BurgerIconButton from "components/UI/Buttons/BurgerIconButton";
import NavbarItemSidebar from "../NavbarItemSidebar";
import { NavbarItemsPropTypes } from "../types";
import {
  sideNavListWrapper,
  sideNavListContainerOpen,
  sideNavListContainer,
  sideNavListCloseButtonContainer,
  sideNavContainer,
} from "./styles";
import { useState } from "react";
import { css } from "@emotion/react";
import CloseButton from "components/UI/Buttons/CloseButton";

const NavbarItemsSidebar = ({ config = [] }: NavbarItemsPropTypes) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div css={(theme)=>sideNavContainer(theme)}>
      <BurgerIconButton onClickhandler={() => setIsSidebarOpen(true)} />
      <div
        css={[
          sideNavListWrapper,
          isSidebarOpen ? sideNavListContainerOpen : css``,
        ]}
      >
        <div css={sideNavListCloseButtonContainer}>
          <CloseButton onClickhandler={() => setIsSidebarOpen(false)} />
        </div>
        <div css={(theme) => sideNavListContainer(theme)}>
          {config.map((item) => (
            <NavbarItemSidebar key={item.key} config={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarItemsSidebar;
