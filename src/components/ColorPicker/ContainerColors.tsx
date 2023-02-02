import { useState } from "react";

import ColorPicker from "./ColorPicker";

const ContainerColors = () => {

    const [active, setActive] = useState<0 | 1 | 2 | 3>(0);

    return (
        <>
            <ColorPicker
                id={1}
                className='absolute top-[20vh] left-[45%] tranlate-x-[-45%] md:left-12 md:translate-x-0'
                initialValue='#AF40FF'
                active={active}
                setActive={setActive}
            />
            <ColorPicker
                id={2}
                className='absolute top-[20vh] left-[50%] tranlate-x-[-50%] md:left-20 md:translate-x-0'
                initialValue='#5B42F3'
                active={active}
                setActive={setActive}
            />
            <ColorPicker
                id={3}
                className='absolute top-[20vh] left-[55%] tranlate-x-[-55%] md:left-28 md:translate-x-0'
                initialValue='#00DDEB'
                active={active}
                setActive={setActive}
            />
        </>
    );
}

export default ContainerColors;