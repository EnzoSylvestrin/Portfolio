import { useState } from 'react';

import { useLanguage } from './LanguageProvider';

import { IoLanguage } from 'react-icons/io5';
import { BiPointer } from 'react-icons/bi';

import { LinearGradientIcon } from '../CommomComponents';
import Text from '../Text';

const LanguageComponent = () => {

    const { language, setLanguage } = useLanguage()

    const [showPointer, setShowPointer] = useState(true);

    const HandleMouseHover = () => {
        setShowPointer(false);
    }

    return (
        <div
            onClick={() => setLanguage(language === "Português" ? 'English' : 'Português')}
            className="flex relative cursor-pointer text-stone-900 bg-gray-300 items-center gap-1 justify-center rounded-lg dark:bg-slate-900 dark:text-white px-2 py-1 mb-3 transition-all duration-200 hover:scale-105"
            onMouseEnter={HandleMouseHover}
        >
            <IoLanguage size={20} />
            <Text
                text={{
                    English: language,
                    Portugues: language
                }}
                size="md"
            />
            {
                showPointer &&
                <LinearGradientIcon
                    Icon={BiPointer}
                    id={"10"}
                    size={20}
                    className="absolute -bottom-2 -right-2"
                />
            }
        </div>
    );
}

export default LanguageComponent;