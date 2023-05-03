import { roundImagesMock, squareImagesMock } from "components/CardSlider/mock";
import { collapsibleComponent } from "components/CollapsibleComponent/mock";
import { fiveImageCollageMock } from "components/ConfigurablePhotoCollage/mock";
import aboutUsRiseTabsElementConfig from "./aboutUsRiseTabsElementConfig";
import { FilterTypes } from "components/Filters/types";

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

const filterConfig = [
  {
    type: FilterTypes.DROPDOWN,
    name: "Category",
    key: "Category",
    options: [
      {
        key: "Residential",
        name: "Residential",
        value: "residential",
      },
      {
        key: "Commercial",
        name: "Commercial",
        value: "commercial",
      },
      {
        key: "Leasing Residential",
        name: "Leasing Residential",
        value: "leasing-residential",
      },
      {
        key: "Leasing Commercial",
        name: "Leasing Commercial",
        value: "leasing-commercial",
      },
      {
        key: "Shop Cum Office",
        name: "Shop Cum Office",
        value: "shop-cum-office",
      },
    ],
  },
  {
    type: FilterTypes.DROPDOWN,
    name: "Sub Category",
    key: "Sub Category",
    options: [
      {
        key: "Residential",
        name: "Residential",
        value: "residential",
      },
      {
        key: "Commercial",
        name: "Commercial",
        value: "commercial",
      },
      {
        key: "Leasing Residential",
        name: "Leasing Residential",
        value: "leasing-residential",
      },
      {
        key: "Leasing Commercial",
        name: "Leasing Commercial",
        value: "leasing-commercial",
      },
      {
        key: "Shop Cum Office",
        name: "Shop Cum Office",
        value: "shop-cum-office",
      },
    ],
  },
  {
    type: FilterTypes.DROPDOWN,
    name: "City",
    key: "City",
    options: [
      {
        key: "Delhi",
        name: "Delhi",
        value: "delhi",
      },
      {
        key: "Gurgoan",
        name: "Gurgoan",
        value: "gurgoan",
      },
      {
        key: "Mumbai",
        name: "Mumbai",
        value: "mumbai",
      },
    ],
  },
  {
    type: FilterTypes.DROPDOWN,
    name: "Price Range",
    key: "Price Range",
    options: [
      {
        key: "₹ 0.30 - ₹ 1.00 Crore",
        name: "₹ 0.30 - ₹ 1.00 Crore",
        value: "₹ 0.30 - ₹ 1.00 Crore",
      },
      {
        key: "₹ 1.00 - ₹ 3.00 Crore",
        name: "₹ 1.00 - ₹ 3.00 Crore",
        value: "₹ 1.00 - ₹ 3.00 Crore",
      },
      {
        key: "₹ 3.00 - ₹ 7.00 Crore",
        name: "₹ 3.00 - ₹ 7.00 Crore",
        value: "₹ 3.00 - ₹ 7.00 Crore",
      },
      {
        key: "₹ 7.00 - ₹ 10.00 Crore",
        name: "₹ 7.00 - ₹ 10.00 Crore",
        value: "₹ 7.00 - ₹ 10.00 Crore",
      },
      {
        key: "₹ 10.00 Crore + ",
        name: "₹ 10.00 Crore + ",
        value: "₹ 10.00 Crore + ",
      },
    ],
  },
  {
    type: FilterTypes.SEARCH,
    label: "Search Keyword",
    key: "Price Range",
  },
];

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
            url: "/about-us/rise",
            key: "RISE",
          },
          {
            displayName: "MISSION & VISION",
            url: "/about-us/vision",
            key: "MISSION & VISION",
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
            displayName: "Leasing Residential",
            url: "category/leasing-residential",
            key: "Leasing Residential",
          },
          {
            displayName: "Leasing Commercial",
            url: "/category/leasing-commercial",
            key: "Leasing Commercial",
          },
          {
            displayName: "Shop Cum Office",
            url: "/category/shop-cum-office",
            key: "Shop Cum Office",
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
        heading: "Luxury Living",
        body: "The latest handpicked masterpiece comes along with unforgettable experiences.",
        buttonsArray: [
          {
            isLink: false,
            url: "/",
            label: "Explore",
            key: "explore",
            showArrowButton: true,
          },
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
  aboutUsConfig: {
    centerImageObject: {
      url: "/assets/images/backgroundAboutUs.jpeg",
      alt: "About us background",
      overlayTextConfig: {
        heading: "ABOUT US",
      },
    },
    infoSection: {
      url: "/assets/images/logo2.png",
      alt: "Logo2",
    },
    tabSection: aboutUsRiseTabsElementConfig,
    aboutUsVideoObject: {
      url: "/assets/videos/aboutUs.mp4",
      alt: "About us Video",
    },
  },
  categoryPageConfig: {
    centerVideoObject: {
      url: "/assets/videos/category.mp4",
      alt: "category background",
      overlayTextConfig: {
        heading: "PROJECTS",
      },
    },
    filterConfig,
  },
};
