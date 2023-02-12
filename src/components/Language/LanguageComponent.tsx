import { IoLanguage } from 'react-icons/io5';

import Text from '../Text';
import { useLanguage } from './LanguageProvider';

const LanguageComponent = () => {

    const { language, setLanguage } = useLanguage()

    return (
        <div onClick={() => setLanguage(language === "Português" ? 'English' : 'Português')} className="flex text-stone-900 bg-gray-300 items-center gap-1 justify-center rounded-lg dark:bg-slate-900 dark:text-white px-2 py-1 mb-3 transition-all duration-200 hover:scale-105">
            <IoLanguage size={20} />
            <Text
                text={{
                    English: language,
                    Portugues: language
                }}
                size="md"
            />
        </div>
    );
}

export default LanguageComponent;