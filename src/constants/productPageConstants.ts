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
    imageSrc: "/icons/cctvSecurity.png",
    title: "CCTV Security",
  },
  [AmenityKeys.BASEMENT_PARKING]: {
    imageSrc: "/icons/basementParking.png",
    accessor: "Basement parking",
  },
  [AmenityKeys.SWIMMING_POOL]: {
    imageSrc: "/icons/swimmingPool.png",
    accessor: "Swimming Pool",
  },
  [AmenityKeys.CAFE_LOUNGE]: {
    imageSrc: "/icons/cafeLoung.png",
    title: "Cafe Lounge",
  },
  [AmenityKeys.AIR_CONDITIONING]: {
    imageSrc: "/icons/ac.png",
    accessor: "Air conditioning",
  },
  [AmenityKeys.GYM]: {
    imageSrc: "/icons/gym.png",
    accessor: "Gym",
  },
};
