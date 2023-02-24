import React from 'react';
import {IProduct} from "types/products";
import './CategoryItems.css'
import {Link} from "react-router-dom";

const CategoryItem = (category: IProduct) => {
    return (
        <div>
            <div>
                <Link to={`/${category.id}`}>{category.name}</Link>
            </div>
            <img src={category.colors[0].images[0]} className={'img'}/>

        </div>
    );
};

export default CategoryItem;