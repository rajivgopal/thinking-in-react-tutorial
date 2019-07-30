import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      isFilteredByStock: false
    };
  }

  filterByProductName = event => {
    this.setState({
      searchField: event.target.value
    });
  };

  filterByStock = event => {
    this.setState({
      isFilteredByStock: event.target.checked
    });
  };

  render() {
    const { searchField, isFilteredByStock } = this.state;
    const filteredProducts = this.props.products.filter(product => {
      const filteredByName = product.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
      return isFilteredByStock
        ? product.stocked && filteredByName
        : filteredByName;
    });

    return (
      <div>
        <SearchBar
          searchField={this.state.searchField}
          isFilteredByStock={this.state.isFilteredByStock}
          filterByStock={this.filterByStock}
          filterByProductName={this.filterByProductName}
        />
        <br />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
