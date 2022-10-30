import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = () => {
    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
    }
    return (
        <AsyncPaginate
            placeholder="City Search"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
        />
    )
}

export default Search;