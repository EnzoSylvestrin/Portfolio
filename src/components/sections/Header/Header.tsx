import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import clsx from 'clsx';

import { AiOutlineGithub } from 'react-icons/ai';

import { ItemUl, MenuComponent, ThemeComponent } from './HeaderStyled';

import { LinearGradientIcon } from '@/components/CommomComponents';
import { useLanguage } from '@/components/Language/LanguageProvider';

const Header = ({ theme, setTheme }: { theme: string, setTheme: Dispatch<SetStateAction<"light" | "dark">> }) => {

    const [DarkMode, setDarkMode] = useState<boolean>(true);
    const [State, setState] = useState<boolean>(false);

    const { language } = useLanguage();

    const ToggleMode = () => {
        setDarkMode(!DarkMode);
        setTheme(DarkMode ? 'light' : 'dark');
        document.body.style.setProperty('--bgColor', DarkMode ? 'rgb(229 231 235)' : 'rgb(24 24 27)');
        document.body.style.setProperty('--inputColor', DarkMode ? 'rgb(209 213 219)' : 'rgb(31 41 55)');
        localStorage.setItem('theme', DarkMode ? 'light' : 'dark');
    }

    const ToggleState = () => {
        setState(!State);
    }

    useEffect(() => {
        let theme: string | null = localStorage.getItem('theme');
        setDarkMode(theme == null ? true : theme == 'dark' ? true : false);
        document.body.style.setProperty('--bgColor', theme != "light" ? 'rgb(24 24 27)' : 'rgb(229 231 235)');
        document.body.style.setProperty('--inputColor', theme != "light" ? 'rgb(31 41 55)' : 'rgb(209 213 219)');
    }, []);

    return (
        <header id="#top">
            <nav className={`w-full fixed z-[999] transition-all duration-300 px-12 2xl:px-[6%] flex items-center justify-center h-[12vh] max-h-[6rem] min-h-[4rem] mdlg:justify-between ${theme === 'dark' ? 'dark bg-zinc-800' : 'bg-gray-300'}`}>
                <a href="#top" className="text-center text-transparent text-2xl 2xl:text-[2.125rem] bg-clip-text gradient-text transition-all duration-300 hover:scale-105 mdlg:text-left">Enzo</a>
                <MenuComponent state={State} onClick={ToggleState} />
                <ul className={
                    clsx("bg-gray-300 -mt-0.5 dark:bg-zinc-800 fixed top-[12vh] z-[999] right-0 h-[calc(88vh_+_2px)] flex-col flex items-center justify-center duration-500 transition-all gap-5 mdlg:static mdlg:flex-row mdlg:w-full mdlg:h-auto mdlg:mt-0 mdlg:!bg-transparent mdlg:duration-300", State ? "w-[180px]" : "w-0")
                }>
                    <ItemUl state={State} link="home">
                        Home
                    </ItemUl>
                    <ItemUl state={State} link="Sobre">
                        {
                            language === "English"
                                ?
                                "About"
                                :
                                "Sobre"
                        }
                    </ItemUl>
                    <ItemUl state={State} link="Skills">
                        Skills
                    </ItemUl>
                    <ItemUl state={State} link="Servicos">
                        {
                            language === "English"
                                ?
                                "Services"
                                :
                                "Serviços"
                        }
                    </ItemUl>
                    <ItemUl state={State} link="Projetos">
                        {
                            language === "English"
                                ?
                                "Projects"
                                :
                                "Projetos"
                        }
                    </ItemUl>
                    <ItemUl state={State} link="Contato">
                        {
                            language === "English"
                                ?
                                "Contact"
                                :
                                "Contato"
                        }
                    </ItemUl>
                    <div className={
                        clsx('flex items-center justify-center gap-6 absolute right-0 bottom-5 w-full mdlg:hidden', State ? 'visible' : 'invisible')
                    }>
                        <ThemeComponent dark={DarkMode} onClick={ToggleMode} id={"0"} />
                        <li className="text-xxl">
                            <a href="https://github.com/EnzoSylvestrin" rel="noopener noreferrer" target="_blank">
                                <LinearGradientIcon
                                    Icon={AiOutlineGithub}
                                    size={30}
                                    id={"0"}
                                    reescale
                                />
                            </a>
                        </li>
                    </div>
                    <div className="w-[2px] h-full border-gradient-animate absolute left-0 make-animate bottom-0 mdlg:hidden"></div>
                </ul>
                <ul className="hidden items-center justify-center gap-2 text-gray-200 mdlg:flex mb-1">
                    <ThemeComponent dark={DarkMode} onClick={ToggleMode} id={'2'} />
                    <li className="text-xxl transition-all duration-300 hover:scale-110">
                        <a href="https://github.com/EnzoSylvestrin" rel="noopener noreferrer" target="_blank">
                            <LinearGradientIcon
                                Icon={AiOutlineGithub}
                                size={30}
                                id={"2"}
                                reescale
                            />
                        </a>
                    </li>
                </ul>
                <div className="w-full h-[2px] border-gradient-animate absolute make-animate left-0 bottom-0"></div>
            </nav>
        </header>
    )
}

export default Header;
