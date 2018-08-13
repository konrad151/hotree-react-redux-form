import React from 'react';

export const CategoriesSelectField = ({ categoryName }) => {
    return (
        <option value={categoryName} key={categoryName}>
            {categoryName}
        </option>
    );
};

// {category.map(categoryOption => (
//     <option value={categoryOption} key={categoryOption}>
//     {categoryOption}
//     </option>
// ))}