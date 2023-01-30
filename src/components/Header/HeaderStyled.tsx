import clsx from 'clsx';
import { LiHTMLAttributes } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

export const ItemUl = ({ children }: { children: string }) => {
    return (
        <li className="text-lg text-gray-200 cursor-pointer tracking-wider
            after:block after:h-0 after:border-b-[2px] after:border-b-cyan-500 after:mr-1 after:scale-0 after:transition-transform after:duration-[320ms] after:ease-in-out
            hover:after:scale-100 hover:after:h-auto"
        >
            {children}
        </li>
    );
}

export const ThemeComponent = ({ dark, ...rest }: LiHTMLAttributes<HTMLLIElement> & { dark: boolean }) => {
    return (
        <li className={
            clsx("text-xxl text-gray-200 ", dark ? 'hover:text-yellow-300' : 'hover:text-black')} {...rest}
        >
            {dark ? <BiSun /> : <BiMoon />}
        </li>
    );
}