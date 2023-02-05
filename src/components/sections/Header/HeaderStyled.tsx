import { HTMLAttributes, LiHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import { BiMoon, BiSun } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiXMark } from 'react-icons/hi2';
import { IconBaseProps, IconType } from 'react-icons/lib';

export const ItemUl = ({ children, state, link }: { children: string, state: boolean, link: string }) => {
    return (
        <li className={
            clsx("text-lg text-gray-200 cursor-pointer tracking-wider item-ul duration-250 transition-all mt-2 md:opacity-100 " +
                "after:block after:h-0 after:mr-1 after:scale-0 after:transition-transform after:duration-[320ms] after:ease-in-out " +
                "hover:after:scale-100 hover:after:h-auto", state ? 'opacity-100' : 'opacity-0')
        }>
            <a href={`#${link}`}>{children}</a>
        </li>
    );
}

export const ThemeComponent = ({ dark, id, ...rest }: LiHTMLAttributes<HTMLLIElement> & { dark: boolean, id: string }) => {
    return (
        <li className={
            clsx("text-xxl", id != '0' ? 'transition-all duration-300 hover:scale-110' : '')
        } {...rest}>
            <LinearGradientIcon Icon={dark ? BiSun : BiMoon} size={32} id={id} />
        </li>
    );
}

export const MenuComponent = ({ state, ...rest }: HTMLAttributes<HTMLDivElement> & { state: boolean }) => {
    return (
        <div className="absolute top right-[5%] transition-all flex items-center justify-center duration-300 hover:scale-110 md:hidden" {...rest}>
            {
                <LinearGradientIcon Icon={state ? HiXMark : AiOutlineMenu} w={'24px'} h={'24px'} id={'3'} size={22} />
            }
        </div>
    );
}

export const LinearGradientIcon = ({ Icon, id, w, h, ...rest }: IconBaseProps & { Icon: IconType, id: string, w?: string, h?: string }) => {
    return (
        <svg width={w == null ? "30px" : w} height={h == null ? "30px" : h} className="flex items-center justify-center">
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--first)" />
                <stop offset="50%" stopColor="var(--second)" />
                <stop offset="100%" stopColor="var(--third)" />
            </linearGradient>
            <Icon style={{ fill: `url(#${id})` }} {...rest} />
        </svg>
    );
}