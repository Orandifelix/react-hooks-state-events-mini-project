import React from "react";

function CategoryFilter({ categories, selectCategory, categoryName }) {
  const categoryButtons = categories.map((category) => {
    const categoryClass = category === selectCategory ? "selected" : "";

    return (
      <button key={category} onClick={categoryName} className={categoryClass}>
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
