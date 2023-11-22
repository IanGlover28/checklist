import React from 'react';



function SearchBar({
  filterText, 
  inStockOnly,
onFilterTextChange,
onInStockOnlyChange
}) {
  return (
    <div>
      <input type="text" 
      placeholder="Search..." 
      value={filterText}
      onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <div>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </div>
    </div>
  );
}


export default SearchBar;