import React, {useState} from 'react';
import './ItemCard.css'
import {useAppSelector} from "../../hooks/redux";
import ImageSlider from "../ImageSlider/ImageSlider";
import ColorPicker from "../ColorPicker/ColorPicker";

const ItemCard = () => {

    const {currentProduct, loading, sizes} = useAppSelector(state => state.products)

    const [currentColor, setCurrentColor] = useState(0)

    if (loading || !currentProduct) return <div>Загрузка...</div>

    const color = currentProduct.colors[currentColor]

    return (
        <div>
            <h1>{currentProduct.name}</h1>

            <div className={'card'}>
                <ImageSlider color={color}/>

                <div className={'info'}>
                    {color.description}

                    <ColorPicker colors={currentProduct.colors}
                                 setCurrentColor={setCurrentColor}
                    />

                    <div>
                    {sizes?.map(size =>
                        <button key={size.id} disabled={!color.sizes.includes(size.id)}>{size.label}</button>)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemCard;