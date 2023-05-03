import { searchBarButton, searchBarForm, searchBarInput } from "./styles";
import { SearchPropTypes } from "./types";

const Search = ({ onSubmitHandler }: SearchPropTypes) => {
  return (
    <form
      onSubmit={onSubmitHandler}
      css={(theme) => searchBarForm(theme)}
    >
      <input
        name="keyword"
        type="text"
        css={(theme) => searchBarInput(theme)}
      />
      <label>Search Keyword....</label>
      <input
        type="submit"
        name="search"
        value="Search"
        id="btnSearch"
        css={(theme) => searchBarButton(theme)}
      />
    </form>
  );
};

export default Search;
