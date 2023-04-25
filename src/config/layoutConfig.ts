import { roundImagesMock, squareImagesMock } from "components/CardSlider/mock";
import { collapsibleComponent } from "components/CollapsibleComponent/mock";
import { fiveImageCollageMock } from "components/ConfigurablePhotoCollage/mock";

export enum NavbarItemTypes {
  HYPERLINK_ONLY = "hyperlink_only",
  LIST = "list",
}

export enum NavbarItemListTypes {
  NORMAL = "normal",
  EXPANDABLE = "expandable",
}

export enum NavbarItemColumnListTypes {
  LIST = "list",
  IMAGE = "image",
}

export const layoutConfig = {
  navbarConfig: {
    navList: [
      {
        displayName: "OUR STORY",
        key: "ourStories",
        url: "/",
        type: NavbarItemTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [
          {
            displayName: "RISE",
            url: "/shop?colour='Bubblegum'",
            key: "Bubblegum",
          },
          {
            displayName: "MISSION & VISION",
            url: "/shop?colour='Black'",
            key: "Black",
          },
        ],
      },
      {
        displayName: "SERVICES",
        url: "/",
        key: "services",
        type: NavbarItemTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [
          {
            displayName: "Commercial",
            url: "/category/commercial",
            key: "Commercial",
          },
          {
            displayName: "Residential",
            url: "/category/residential",
            key: "Residential",
          },
          {
            displayName: "Land Acquisition",
            url: "category/land-acquisition",
            key: "Land Acquisition",
          },
          {
            displayName: "Leasing",
            url: "/category/leasing",
            key: "Leasing",
          },
        ],
      },
      {
        displayName: "CITIES",
        url: "/",
        key: "Cities",
        type: NavbarItemTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [
          {
            displayName: "Delhi",
            url: "/city/delhi",
            key: "Delhi",
          },
          {
            displayName: "Mumbai",
            url: "/city/mumbai",
            key: "Mumbai",
          },
          {
            displayName: "Gurgoan",
            url: "/city/gurgoan",
            key: "Gurgoan",
          },
        ],
      },
      {
        displayName: "Contact",
        key: "Contact",
        url: "/contact-us",
        type: NavbarItemTypes.HYPERLINK_ONLY,
      },
    ],
  },
  footerConfig: {
    linkList: [
      {
        displayName: "Shop",
        url: "/shop",
        key: "shop",
        type: NavbarItemColumnListTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [],
      },
      {
        displayName: "Lookbooks",
        url: "/lookbooks",
        key: "lookbooks",
        type: NavbarItemColumnListTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [],
      },
      {
        displayName: "About",
        url: "/about",
        key: "about",
        type: NavbarItemColumnListTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [],
      },
      {
        displayName: "News",
        url: "/news",
        key: "news",
        type: NavbarItemColumnListTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [],
      },
      {
        displayName: "Search",
        url: "/search",
        key: "search",
        type: NavbarItemColumnListTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [],
      },
      {
        displayName: "Privacy",
        url: "/privacy",
        key: "privacy",
        type: NavbarItemColumnListTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [],
      },
      {
        displayName: "Terms",
        url: "/terms",
        key: "terms",
        type: NavbarItemColumnListTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [],
      },
      {
        displayName: "Shipping",
        url: "/shipping",
        key: "shipping",
        type: NavbarItemColumnListTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [],
      },
    ],
  },
  homePageConfig: {
    centerImageObject: {
      url: "/assets/videos/home.mp4",
      alt: "Home Video",
      overlayTextConfig: {
        heading: "Story Theme",
        body: "A powerful theme built for modern commerce.",
        buttonsArray: [
          { isLink: false, label: "View Products", key: "products" },
          { isLink: true, url: "/", label: "Learn More", key: "about" },
        ],
      },
    },
    circleCardSlider: {
      heading: "Shop by colour",
      items: roundImagesMock,
    },
    squareCardSlider: {
      heading: "Our Best Sellers",
      items: squareImagesMock,
    },
    fiveImageCollage: {
      items: fiveImageCollageMock,
    },
    fiveImageReverseCollage: {
      items: fiveImageCollageMock,
    },
    collapsibleComponent: {
      items: collapsibleComponent,
      heading: "A few things you might be wondering",
    },
  },
};
