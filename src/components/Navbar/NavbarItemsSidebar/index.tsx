import BurgerIconButton from "components/UI/Buttons/BurgerIconButton";
import NavbarItemSidebar from "../NavbarItemSidebar";
import { NavbarItemsPropTypes } from "../types";
import {
  sideNavListContainerOpen,
  sideNavListContainer,
  sideNavContainer,
} from "./styles";
import { useState } from "react";
import Sidebar from "components/UI/Sidebar";

const NavbarItemsSidebar = ({ config = [] }: NavbarItemsPropTypes) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div css={(theme) => sideNavContainer(theme)}>
      <BurgerIconButton onClickhandler={() => setIsSidebarOpen(true)} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        extraStyles={{sidebarListContainerOpen:sideNavListContainerOpen }}
      >
        <div css={(theme) => sideNavListContainer(theme)}>
          {config.map((item) => (
            <NavbarItemSidebar key={item.key} config={item} />
          ))}
        </div>
      </Sidebar>
    </div>
  );
};

export default NavbarItemsSidebar;
