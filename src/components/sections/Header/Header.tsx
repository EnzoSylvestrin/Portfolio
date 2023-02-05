import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { AiOutlineGithub } from 'react-icons/ai';

import { ItemUl, LinearGradientIcon, MenuComponent, ThemeComponent } from './HeaderStyled';
import clsx from 'clsx';

const Header = ({ setTheme }: { setTheme: Dispatch<SetStateAction<"light" | "dark">> }) => {

    const [DarkMode, setDarkMode] = useState<boolean>(true);
    const [State, setState] = useState<boolean>(false);

    const ToggleMode = () => {
        setDarkMode(!DarkMode);
        setTheme(DarkMode ? 'light' : 'dark');
        localStorage.setItem('theme', DarkMode ? 'light' : 'dark');
    }

    const ToggleState = () => {
        setState(!State);
    }

    useEffect(() => {
        let theme: string | null = localStorage.getItem('theme');
        setDarkMode(theme == null ? true : theme == 'dark' ? true : false);
    }, []);

    return (
        <header id="#top">
            <nav className="w-full fixed z-50 bg-neutral-800 px-12 flex items-center justify-center h-[12vh] min-h-[4rem] md:justify-between">
                <a href="#top" className="text-center text-transparent text-2xl bg-clip-text gradient-text transition-all duration-300 hover:scale-105 md:text-left">Enzo</a>
                <MenuComponent state={State} onClick={ToggleState} />
                <ul className={
                    clsx("bg-gray-900 fixed top-[12vh] right-0 h-[88vh] flex-col flex items-center justify-center duration-500 transition-all ease-out gap-5 md:static md:flex-row md:w-full md:h-auto md:bg-transparent md:duration-[0ms]", State ? "w-[180px]" : "w-0")
                }>
                    <ItemUl state={State} link="home">
                        Home
                    </ItemUl>
                    <ItemUl state={State} link="Sobre">
                        Sobre
                    </ItemUl>
                    <ItemUl state={State} link="Projetos">
                        Projetos
                    </ItemUl>
                    <ItemUl state={State} link="Contato">
                        Contato
                    </ItemUl>
                    <div className={
                        clsx('flex items-center justify-center gap-6 absolute right-0 bottom-5 w-full md:hidden', State ? 'visible' : 'invisible')
                    }>
                        <ThemeComponent dark={DarkMode} onClick={ToggleMode} id={"0"} />
                        <li className="text-xxl"><LinearGradientIcon Icon={AiOutlineGithub} size={30} id={"0"} /></li>
                    </div>
                    <div className="w-[2px] h-full border-gradient absolute left-0 bottom-0 md:hidden"></div>
                </ul>
                <ul className="hidden items-center justify-center gap-2 mr-4 text-gray-200 md:flex mb-1">
                    <ThemeComponent dark={DarkMode} onClick={ToggleMode} id={'2'} />
                    <li className="text-xxl transition-all duration-300 hover:scale-110">
                        <LinearGradientIcon Icon={AiOutlineGithub} size={30} id={"2"} />
                    </li>
                </ul>
                <div className="w-full h-[2px] border-gradient absolute left-0 bottom-0"></div>
            </nav>
        </header>
    )
}

export default Header;
