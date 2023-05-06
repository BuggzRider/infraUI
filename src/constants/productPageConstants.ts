import { AmenityKeys } from "../components/ProductAmenities/types";
export const productPageTableColumns = [
  {
    Header: "PROPERTY TYPE",
    accessor: "propertyType",
  },
  {
    Header: "AREA",
    accessor: "area",
  },
  {
    Header: "MIN PRICING",
    accessor: "minPricing",
  },
];

export const ProductPageAmentities = {
  [AmenityKeys.CCTV_SECURITY]: {
    src: "/icons/cctvSecurity.png",
    footerTextConfig: { heading: "CCTV Security" },
  },
  [AmenityKeys.BASEMENT_PARKING]: {
    src: "/icons/basementParking.png",
    footerTextConfig: { heading: "Basement parking" },
  },
  [AmenityKeys.SWIMMING_POOL]: {
    src: "/icons/swimmingPool.png",
    accessor: "Swimming Pool",
    footerTextConfig: { heading: "Swimming Pool" },
  },
  [AmenityKeys.CAFE_LOUNGE]: {
    src: "/icons/cafeLoung.png",
    title: "Cafe Lounge",
    footerTextConfig: { heading: "Cafe Lounge" },
  },
  [AmenityKeys.AIR_CONDITIONING]: {
    src: "/icons/ac.png",
    accessor: "Air conditioning",
    footerTextConfig: { heading: "Air conditioning" },
  },
  [AmenityKeys.GYM]: {
    src: "/icons/gym.png",
    accessor: "Gym",
    footerTextConfig: { heading: "Gym" },
  },
};
