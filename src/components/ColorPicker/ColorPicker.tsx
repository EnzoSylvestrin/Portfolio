import { Dispatch, SetStateAction, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

type ColorPickerProps = {
    id: 1 | 2 | 3;
    initialValue: string,
    className: string,
    active: 0 | 1 | 2 | 3,
    setActive: Dispatch<SetStateAction<0 | 1 | 2 | 3>>
};

const ColorPicker = ({ id, initialValue, className, active, setActive }: ColorPickerProps) => {
    const [color, setColor] = useState(initialValue);

    let showPicker = active === id;

    const handleChange = (newColor: string) => {
        if (newColor.indexOf('NaN') > -1) {
            newColor = "#fff"
        }
        setColor(newColor);
        document.body.style.setProperty(getProperty(), newColor);
        localStorage.setItem(id.toString(), newColor);
    };

    const getProperty = (): string => {
        if (id == 1) {
            return '--first';
        }
        else if (id == 2) {
            return '--second';
        }
        else {
            return '--third';
        }
    }

    const VerifyActive = () => {
        if (active === id) {
            setActive(0);
        }
        else {
            setActive(id);
        }
    }

    return (
        <div className={`${className} cursor-pointer`}>
            <div onClick={VerifyActive} style={{ color: color }}>
                <div className='rounded-[50%] w-5 h-5' style={{ backgroundColor: color }}></div>
            </div>
            {showPicker && (
                <div className='smallColor'>
                    <HexColorPicker style={{ position: "absolute", zIndex: '9999' }} color={color} onChange={handleChange} />
                </div>
            )}
        </div>
    );
};

export default ColorPicker;