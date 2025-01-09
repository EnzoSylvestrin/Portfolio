import { Fragment, useState } from "react";

import ColorPicker from "./ColorPicker";

import { useLanguage } from "@/contexts/LanguageProvider";

const ContainerColors = () => {
    const language = useLanguage();

    const [active, setActive] = useState<0 | 1 | 2 | 3>(0);
    const [showMessage, setShowMessage] = useState(true);

    const handleMouseEnter = () => {
        setShowMessage(false);
    };

    return (
        <div className="absolute top-[25vh] flex flex-col items-center justify-center left-calc">
            <div className="absolute top-[-80px] left-[calc(50% - 42px)]">
            {showMessage && (
                <div className="relative mb-4 w-[120px] text-center text-stone-900 bg-gray-300 dark:bg-zinc-800 dark:text-white px-4 py-2 rounded shadow-md">
                    {language ? "Change the colors!" : "Altere as cores!"}
                    <div
                        className="absolute -bottom-2 left-1/2 rounded-[0, 10px, 0, 10px] bg-gray-300 dark:bg-zinc-800 w-4 h-4 transform -translate-x-1/2 rotate-45"
                    />
                </div>
            )}
            </div>
            <div className="flex gap-2">
                <ColorPicker
                    id={1}
                    className="transform"
                    initialValue="var(--first)"
                    active={active}
                    setActive={setActive}
                    onMouseEnter={handleMouseEnter}
                />
                <ColorPicker
                    id={2}
                    className="transform"
                    initialValue="var(--second)"
                    active={active}
                    setActive={setActive}
                    onMouseEnter={handleMouseEnter}
                />
                <ColorPicker
                    id={3}
                    className="transform"
                    initialValue="var(--third)"
                    active={active}
                    setActive={setActive}
                    onMouseEnter={handleMouseEnter}
                />
            </div>
        </div>
    );
};

export default ContainerColors;
