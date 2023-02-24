import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";
import {getProductThunk, getSizesThunk} from "../../redux/slices/products";
import ItemCard from "../../components/ItemCard/ItemCard";

const ProductItem = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProductThunk(Number(id)))
        dispatch(getSizesThunk())
    }, [])

    return (
        <ItemCard />
    );
};

export default ProductItem;