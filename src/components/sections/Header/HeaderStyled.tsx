import { HTMLAttributes, LiHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import { BiMoon, BiSun } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { HiXMark } from 'react-icons/hi2';

import { LinearGradientIcon } from '@/components/CommomComponents';

export const ItemUl = ({ children, state, link }: { children: ReactNode, state: boolean, link: string }) => {
    return (
        <li className={clsx(
            "text-lg 2xl:text-xxl text-stone-900 dark:text-gray-200 cursor-pointer",
            "tracking-wider item-ul duration-250 transition-all mt-2 mdlg:opacity-100",
            "after:block after:h-0 after:mr-1 after:scale-0 after:transition-transform after:duration-[320ms] after:ease-in-out",
            "hover:after:scale-100 hover:after:h-auto", state ? 'opacity-100' : 'opacity-0'
        )}>
            <a href={`#${link}`}>{children}</a>
        </li>
    );
}

export const ThemeComponent = ({ dark, id, ...rest }: LiHTMLAttributes<HTMLLIElement> & { dark: boolean, id: string }) => {
    return (
        <li className={
            clsx("text-xxl cursor-pointer", id != '0' ? 'transition-all duration-300 hover:scale-110' : '')
        } {...rest}>
            <LinearGradientIcon Icon={dark ? BiSun : BiMoon} size={32} id={id} reescale />
        </li>
    );
}

export const MenuComponent = ({ state, ...rest }: HTMLAttributes<HTMLDivElement> & { state: boolean }) => {
    return (
        <div className="absolute top right-[5%] transition-all flex items-center justify-center duration-300 hover:scale-110 mdlg:hidden" {...rest}>
            {
                <LinearGradientIcon Icon={state ? HiXMark : AiOutlineMenu} id={'3'} size={22} />
            }
        </div>
    );
}

