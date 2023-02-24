import React, {useState} from 'react';
import {IProductColors} from "../../types/products";

type Props = {
    color: IProductColors
}

const ImageSlider = ({color}: Props) => {

    const [currentImage, setCurrentImage] = useState(0)

    const nextImage = () => {
        setCurrentImage(currentImage + 1)
    }

    const prevImage = () => {
        setCurrentImage(currentImage - 1)
    }

    return (
        <div className={'image-block'}>
            <img src={color.images[currentImage]} className={'img'}/>

            <div className={'image-btns'}>
                <button
                    disabled={currentImage === 0}
                    onClick={prevImage}
                >
                    след изображение
                </button>

                <button
                    disabled={currentImage === color.images.length - 1}
                    onClick={nextImage}
                >
                    пред изображение
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;