import React from "react";

const SearchBar = props => {
  return (
    <table className="blueTable">
      <thead>
        <tr>
          <td>
            <form>
              <input
                type="search"
                placeholder="Search product..."
                onChange={props.filterByProductName}
                value={props.searchField}
              />
              <p>
                <input
                  type="checkbox"
                  onChange={props.filterByStock}
                  value={props.isFilteredByStock}
                />
                Only show products in stock
              </p>
            </form>
          </td>
        </tr>
      </thead>
    </table>
  );
};

export default SearchBar;
