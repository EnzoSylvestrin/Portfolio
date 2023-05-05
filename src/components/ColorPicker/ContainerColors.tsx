import { useState } from "react";

import ColorPicker from "./ColorPicker";

const ContainerColors = () => {

    const [active, setActive] = useState<0 | 1 | 2 | 3>(0);

    return (
        <>
            <ColorPicker
                id={1}
                className='absolute top-[20vh] left-calc md:translate-x-0'
                initialValue='var(--first)'
                active={active}
                setActive={setActive}
            />
            <ColorPicker
                id={2}
                className='absolute top-[20vh] left-[50%] md:left-20 2xl:left-[calc(6%_+_30px)] md:translate-x-0'
                initialValue='var(--second)'
                active={active}
                setActive={setActive}
            />
            <ColorPicker
                id={3}
                className='absolute top-[20vh] right-calc md:translate-x-0'
                initialValue='var(--third)'
                active={active}
                setActive={setActive}
            />
        </>
    );
}

export default ContainerColors;