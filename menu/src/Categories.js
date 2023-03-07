import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return <button onClick={() => filterItems(category)} type='button' className='filter-btn' key={index}>
          {category}
        </button>
      })}
    </div>
  );
};

export default Categories;
