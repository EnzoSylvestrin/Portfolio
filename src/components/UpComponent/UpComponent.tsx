import { BsFillCaretUpFill } from 'react-icons/bs';

import { LinearGradientIcon } from '../sections/Header/HeaderStyled';
import { useEffect, useState } from 'react';

const UpComponent = () => {

    const [showScroll, setShowScroll] = useState(false);

    const MinHeight = 160;

    useEffect(() => {
        const onScroll = () => {
            if (window.pageYOffset > MinHeight) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };
        document.addEventListener("scroll", onScroll);
        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div onClick={scrollTop} className={`fixed bottom-3 right-3 z-[999] transition-all duration-200 ${showScroll ? "block" : "hidden"}`}>
            <div className="flex bg-gray-200 items-center justify-center rounded-full dark:bg-stone-900 Card-Gradient after:rounded-full before:rounded-full relative p-1">
                <LinearGradientIcon
                    id='8'
                    Icon={BsFillCaretUpFill}
                    size={28}
                    w={"28px"}
                    h={"28px"}
                />
            </div>
        </div>

    );
}

export default UpComponent;