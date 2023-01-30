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
            <nav className="w-full bg-neutral-800 fixed border-b-cyan-400 border-b-[1px] px-4 flex items-center justify-center h-[12vh] min-h-[4rem] md:justify-between">
                <a href="#top" className="text-center text-transparent text-2xl text-cyan-500 md:text-left">Enzo</a>
                <MediaQuery maxWidth={768}>
                    <ul className="bg-black border-l-cyan-400 border-l-[1px] fixed top-[12vh] w-[180px] right-0 h-[88vh] flex-col flex items-center justify-center gap-5">
                        <ItemUl>
                            Home
                        </ItemUl>
                        <ItemUl>
                            Projetos
                        </ItemUl>
                        <ItemUl>
                            Contato
                        </ItemUl>
                        <div className='flex items-center justify-center gap-6 absolute right-0 bottom-5 w-full'>
                            <ThemeComponent dark={DarkMode} onClick={ToggleMode} />
                            <li className="text-xxl text-gray-200 hover:text-gray-400"><AiOutlineGithub /></li>
                        </div>
                    </ul>
                </MediaQuery>
                <ul className="hidden items-center justify-center gap-5 mr-4 md:flex">
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
                <ul className="hidden items-center justify-center gap-4 mr-4 text-gray-200 md:flex ">
                    <ThemeComponent dark={DarkMode} onClick={ToggleMode} />
                    <li className="text-xxl hover:text-gray-400"><AiOutlineGithub /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
