export type textItemsTypes = {
  field: String;
  value: String;
};

export type ProductOverviewPropTypes = {
  imageSrc: string;
  imgAlt: string;
  heading: string;
  textItems: Array<textItemsTypes>;
};
