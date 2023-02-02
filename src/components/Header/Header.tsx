import { Dispatch, SetStateAction, useState } from 'react';

import { AiOutlineGithub } from 'react-icons/ai';

import { ItemUl, LinearGradientIcon, MenuComponent, ThemeComponent } from './HeaderStyled';
import clsx from 'clsx';
import { url } from 'inspector';

const Header = ({ setTheme }: any & { setTheme: Dispatch<SetStateAction<"" | "dark">> }) => {

    const [DarkMode, setDarkMode] = useState<boolean>(true);
    const [State, setState] = useState<boolean>(false);

    const ToggleMode = () => {
        setDarkMode(!DarkMode);
        setTheme(DarkMode ? '' : 'dark');
    }

    const ToggleState = () => {
        setState(!State);
    }

    return (
        <header id="#top">
            <nav className="w-full fixed z-50 bg-neutral-800 px-12 flex items-center justify-center h-[12vh] min-h-[4rem] md:justify-between">
                <a href="#top" className="text-center text-transparent text-2xl bg-clip-text gradient-text md:text-left">Enzo</a>
                <MenuComponent state={State} onClick={ToggleState} />
                <ul className={
                    clsx("bg-gray-900 fixed top-[12vh] right-0 h-[88vh] flex-col flex items-center justify-center duration-500 transition-all ease-out gap-5 md:static md:flex-row md:w-full md:border-0 md:h-auto md:bg-transparent md:duration-[0ms]", State ? "w-[180px] border-l-cyan-400 border-l-[1px]" : "w-0")
                }>
                    <ItemUl state={State} link="home">
                        Home
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
                        <ThemeComponent dark={DarkMode} onClick={ToggleMode} />
                        <li className="text-xxl text-gray-200 hover:text-gray-400"><AiOutlineGithub /></li>
                    </div>
                </ul>
                <ul className="hidden items-center justify-center gap-2 mr-4 text-gray-200 md:flex">
                    <ThemeComponent dark={DarkMode} onClick={ToggleMode} />
                    <li className="text-xxl hover:shadow-lg">
                        <LinearGradientIcon Icon={<AiOutlineGithub style={{ fill: "url(#header-shape-gradient)" }} />} />
                    </li>
                </ul>
                <div className="w-full h-[2px] border-gradient absolute left-0 bottom-0"></div>
            </nav>
        </header>
    )
}

export default Header;
