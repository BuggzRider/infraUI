import Dropdown from "components/Dropdown";
import Search from "components/Search";
import { FilterConfigTypes, FilterPropTypes, FilterTypes } from "./types";
import { filterContainer, filterItem, filterWrapper } from "./styles";

const Filters = ({
  filters,
  onFilterChange,
  selectedValues,
}: FilterPropTypes) => {
  const onDropdownChangeHandler = (e) => {};

  const onSearchSubmitHandler = (e) => {};

  const getFilterComponent = (filter: FilterConfigTypes) => {
    switch (filter.type) {
      case FilterTypes.DROPDOWN:
        return (
          <Dropdown
            onChangeHandler={onDropdownChangeHandler}
            options={filter.options}
          />
        );
      case FilterTypes.SEARCH:
        return <Search onSubmitHandler={onSearchSubmitHandler} />;
    }
  };
  return (
    <div css={(theme) => filterWrapper(theme)}>
    <div css={(theme) => filterContainer(theme)}>
      {filters.map((filter) => (
        <div key={filter.key} css={(theme) => filterItem(theme)}>{getFilterComponent(filter)}</div>
      ))}
    </div>
    </div>
  );
};

export default Filters;
