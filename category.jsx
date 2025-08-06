import React from 'react';

const CategoryFilter = ({ categories, selected, onChange }) => {
  return (
    <div className="flex justify-center mb-6 gap-4 flex-wrap">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-md transition ${
            selected === cat
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
