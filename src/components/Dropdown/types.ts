import { ChangeEventHandler, Key } from "react";

export type DropdownOptionTypes = {
  key: Key;
  value: string | number | readonly string[] | undefined ;
  name: String;
};
export type DropdownPropTypes = {
  onChangeHandler: ChangeEventHandler<HTMLSelectElement> | undefined;
  options: Array<DropdownOptionTypes>;
};
