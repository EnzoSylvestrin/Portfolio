import { Dispatch, SetStateAction, useState } from 'react';

import MediaQuery from 'react-responsive';
import { AiOutlineGithub } from 'react-icons/ai';

import { ItemUl, MenuComponent, ThemeComponent } from './HeaderStyled';
import clsx from 'clsx';

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
            <nav className="w-full fixed bg-neutral-800 border-b-cyan-400 border-b-[1px] px-4 flex items-center justify-center h-[12vh] min-h-[4rem] md:justify-between">
                <a href="#top" className="text-center text-transparent text-2xl text-cyan-500 md:text-left">Enzo</a>
                <MediaQuery maxWidth={768}>
                    <MenuComponent state={State} onClick={ToggleState} />
                    <ul className={
                        clsx("bg-gray-900 fixed top-[12vh] right-0 h-[88vh] flex-col flex items-center justify-center duration-500 transition-all ease-out gap-5", State ? "w-0" : "w-[180px] border-l-cyan-400 border-l-[1px] ")
                    }>
                        <ItemUl state={State}>
                            Home
                        </ItemUl>
                        <ItemUl state={State}>
                            Projetos
                        </ItemUl>
                        <ItemUl state={State}>
                            Contato
                        </ItemUl>
                        <div className={
                            clsx('flex items-center justify-center gap-6 absolute right-0 bottom-5 w-full', State ? 'invisible' : 'visible')
                        }>
                            <ThemeComponent dark={DarkMode} onClick={ToggleMode} />
                            <li className="text-xxl text-gray-200 hover:text-gray-400"><AiOutlineGithub /></li>
                        </div>
                    </ul>
                </MediaQuery>
                <ul className="hidden items-center justify-center gap-5 mr-4 md:flex">
                    <ItemUl state={State}>
                        Home
                    </ItemUl>
                    <ItemUl state={State}>
                        Projetos
                    </ItemUl>
                    <ItemUl state={State}>
                        Contato
                    </ItemUl>
                </ul>
                <ul className="hidden items-center justify-center gap-4 mr-4 text-gray-200 md:flex">
                    <ThemeComponent dark={DarkMode} onClick={ToggleMode} />
                    <li className="text-xxl hover:text-gray-400"><AiOutlineGithub /></li>
                </ul>
            </nav>
        </header >
    )
}

export default Header;
