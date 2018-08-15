import React from 'react';

export const CategoriesSelectField = ({ categoryName, categoryId }) => {
    return (
        <option value={categoryId} key={categoryName}>
            {categoryName}
        </option>
    );
};

// {category.map(categoryOption => (
//     <option value={categoryOption} key={categoryOption}>
//     {categoryOption}
//     </option>
// ))}