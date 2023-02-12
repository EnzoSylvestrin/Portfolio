import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import { useLanguage } from "../Language/LanguageProvider";

import { LanguageProps } from "../Text";

type ButtonProps = {
    text: LanguageProps,
    styles?: string,
    href?: string,
};

const Button = ({ text, styles, href, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) => {
    const Comp = href ? 'a' : 'p';

    const { language } = useLanguage()

    return (
        <button className={clsx(
            "flex border-0 rounded-lg text-black p-[3px] select-none whitespace-nowrap cursor-pointer" +
            "transition-all duration-300 items-center justify-center dark:text-white hover:scale-105", styles
        )}
            {...rest}
        >
            <Comp href={href} className="bg-gray-200 dark:bg-neutral-900 px-2 py-1 rounded-md w-full h-full transition-[background-color] duration-300" rel="noopener noreferrer" target="_blank">
                {
                    language === "English"
                        ?
                        text?.English
                        :
                        text?.Portugues
                }
            </Comp>
        </button>
    );
}

export default Button;