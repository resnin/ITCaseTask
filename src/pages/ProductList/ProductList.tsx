import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getProductsThunk} from "../../redux/slices/products";
import CategoryItem from "../../components/CategoryItems/CategoryItems";
import './ProductList.css'

const ProductList = () => {
    const dispatch = useAppDispatch()
    const {loading, products} = useAppSelector(state => state.products)

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    if (loading) return <div>Загрузка...</div>

    return (
        <div className={'list'}>
            {products?.map(item =>
                <CategoryItem {...item} key={item.id}/>
            )}
        </div>
    );
};

export default ProductList;