import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

type ColorPickerProps = {
    initialValue: string,
    className: string
};

const ColorPicker = ({ initialValue, className }: ColorPickerProps) => {
    const [color, setColor] = useState(initialValue);
    const [showPicker, setShowPicker] = useState(false);

    const handleChange = (newColor: string) => {
        setColor(newColor);
    };

    return (
        <div className={className}>
            <div onClick={() => setShowPicker(!showPicker)} style={{ color: color }}>
                <div className='rounded-[50%] w-6 h-6' style={{ backgroundColor: color }}></div>
            </div>
            {showPicker && (
                <HexColorPicker style={{ position: "absolute" }} color={color} onChange={handleChange} />
            )}
        </div>
    );
};

export default ColorPicker;