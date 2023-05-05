import { useEffect, useState } from 'react';

import { BsFillCaretUpFill } from 'react-icons/bs';

import { LinearGradientIcon } from './CommomComponents';

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
        <div onClick={scrollTop} className={`fixed bottom-3 right-3 z-[998] transition-all duration-200 cursor-pointer hover:scale-105 ${showScroll ? "block animate-fadeIn" : "hidden"}`}>
            <div className="flex bg-gray-200 items-center justify-center rounded-full dark:bg-stone-900 Card-Gradient after:rounded-full before:rounded-full relative p-1">
                <LinearGradientIcon
                    id='8'
                    Icon={BsFillCaretUpFill}
                    size={28}
                    className='2xl:w-[42px] 2xl:h-[48px]'
                    reescale
                />
            </div>
        </div>

    );
}

export default UpComponent;