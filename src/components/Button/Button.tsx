import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
    text: string,
    styles?: string,
    href: string,
};

const Button = ({ text, styles, href, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) => {
    return (
        <button className={clsx(
            "flex border-0 rounded-lg text-black p-[3px] select-none whitespace-nowrap cursor-pointer" +
            "transition-all duration-300 items-center justify-center dark:text-white hover:scale-105", styles
        )}
            {...rest}
        >
            <a href={href} className="bg-gray-200 dark:bg-neutral-900 px-2 py-1 rounded-md w-full h-full transition-[background-color] duration-300" rel="noopener noreferrer" target="_blank">
                {text}
            </a>
        </button>
    );
}

export default Button;