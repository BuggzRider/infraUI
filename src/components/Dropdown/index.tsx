import { dropdownContainer, dropdownOptions } from "./styles";
import { DropdownPropTypes } from "./types";

const Dropdown = ({ onChangeHandler, options }: DropdownPropTypes) => {
  return (
    <select
      onChange={onChangeHandler}
      css={(theme) => dropdownContainer(theme)}
    >
      {options.map((item) => (
        <option key={item.key} css={(theme) => dropdownOptions(theme)} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
