import LayoutContext from "context/layoutContext/layout-context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import NavbarItems from "./NavbarItems";
import {
  navBarStyles,
  navbarIcon,
  navbarIconsContainer,
  navbarLogoContainer,
  navbarLogoLink,
  navbarPhoneLink,
} from "./styles";
import NavbarItemsSidebar from "./NavbarItemsSidebar";

const Navbar = () => {
  const { navbarConfig } = useContext(LayoutContext);
  return (
    <nav css={(theme) => navBarStyles(theme)}>
      <div css={(theme)=>navbarLogoContainer(theme)}>
        <Link css={(theme) => navbarLogoLink(theme)} href="/">
          <Image
            src="/assets/images/logo1.png"
            alt="Rise Logo"
            width="105"
            height="56"
          />
        </Link>
        <NavbarItems config={navbarConfig.navList} />
      </div>
      <div css={navbarIconsContainer}>
        <Link css={(theme) => navbarPhoneLink(theme)} href="tel:1800 547 77 999">
          1800 547 77 999
        </Link>
        <Image
          src="/icons/searchIcon.svg"
          alt="Search icon"
          width="20"
          height="20"
          css={(theme) => navbarIcon(theme)}
        />
        <NavbarItemsSidebar config={navbarConfig.navList}/>
      </div>
    </nav>
  );
};

export default Navbar;
