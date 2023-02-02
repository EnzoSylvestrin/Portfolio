import { HTMLAttributes, LiHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import { BiMoon, BiSun } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiXMark } from 'react-icons/hi2';

export const ItemUl = ({ children, state, link }: { children: string, state: boolean, link: string }) => {
    return (
        <li className={
            clsx("text-lg text-gray-200 cursor-pointer tracking-wider duration-250 transition-all mt-2 md:opacity-100 " +
                "after:block after:h-0 after:border-b-[2px] after:border-b-cyan-500 after:mr-1 after:scale-0 after:transition-transform after:duration-[320ms] after:ease-in-out " +
                "hover:after:scale-100 hover:after:h-auto", state ? 'opacity-100' : 'opacity-0')
        }>
            <a href={`#${link}`}>{children}</a>
        </li>
    );
}

export const ThemeComponent = ({ dark, ...rest }: LiHTMLAttributes<HTMLLIElement> & { dark: boolean }) => {
    return (
        <li className={
            clsx("text-xxl text-gray-200 ", dark ? 'hover:text-yellow-300' : 'hover:text-gray-400')} {...rest}
        >
            {dark ? <BiSun /> : <BiMoon />}
        </li>
    );
}

export const MenuComponent = ({ state, ...rest }: HTMLAttributes<HTMLDivElement> & { state: boolean }) => {
    return (
        <div className="absolute top right-[5%] transition-all duration-500 ease md:hidden" {...rest}>
            {
                state
                    ?
                    <HiXMark size={20} color={'#06B6D4'} />
                    :
                    <AiOutlineMenu size={20} color={'#06B6D4'} />
            }
        </div>
    );
}

export const LinearGradientIcon = ({ Icon }: { Icon: ReactNode }) => {
    return (
        <svg width="1em" height="1em">
            <linearGradient id="header-shape-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--first)" />
                <stop offset="50%" stopColor="var(--second)" />
                <stop offset="100%" stopColor="var(--third)" />
            </linearGradient>
            {Icon}
        </svg>
    );
}