import React from 'react';
import {IProductColors} from "types/products";

type Props = {
    colors: IProductColors[]
    setCurrentColor: React.Dispatch<React.SetStateAction<number>>
}

const ColorPicker = ({colors, setCurrentColor}: Props) => {
    return (
        <div>
            {colors.map((color, index) =>
                <button onClick={() => setCurrentColor(index)}>
                    {color.name}
                </button>
            )}
        </div>
    );
};

export default ColorPicker;