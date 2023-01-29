import { useState } from 'react';

import MediaQuery from 'react-responsive';
import { AiOutlineGithub } from 'react-icons/ai';

import { ItemUl, ThemeComponent } from './HeaderStyled';

const Header = () => {

    const [DarkMode, setDarkMode] = useState<boolean>(true);

    const ToggleMode = () => {
        setDarkMode(!DarkMode);
    }

    return (
        <header id="#top">
            <nav className="w-full bg-neutral-800 fixed border-b-cyan-400 border-b-[1px] px-4 flex items-center justify-between h-[12vh] min-h-[4rem]">
                <a href="#top" className="text-transparent text-2xl text-cyan-500">Enzo</a>
                <MediaQuery maxWidth={768}>
                    <ul></ul>
                </MediaQuery>
                <MediaQuery minWidth={768}>
                    <ul className="flex items-center justify-center gap-5 mr-4">
                        <ItemUl>
                            Home
                        </ItemUl>
                        <ItemUl>
                            Projetos
                        </ItemUl>
                        <ItemUl>
                            Contato
                        </ItemUl>
                    </ul>
                    <ul className="flex items-center justify-center gap-4 mr-4 text-gray-200 md:">
                        <ThemeComponent dark={DarkMode} onClick={ToggleMode} />
                        <li className="text-xxl hover:text-gray-400"><AiOutlineGithub /></li>
                    </ul>
                </MediaQuery>
            </nav>
        </header>
    )
}

export default Header;
