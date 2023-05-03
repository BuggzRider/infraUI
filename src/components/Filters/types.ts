import { DropdownOptionTypes } from "components/Dropdown/types";
import { Key } from "react";

export enum FilterTypes {
  DROPDOWN = "DROPDOWN",
  SEARCH = "SEARCH",
}

export type FilterConfigTypes = {
  key: Key;
  type: FilterTypes;
  options?: Array<DropdownOptionTypes> | any;
};

export type FilterPropTypes = {
  onFilterChange: Function;
  filters: Array<FilterConfigTypes>;
};
