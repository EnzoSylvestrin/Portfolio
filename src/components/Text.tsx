import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { useLanguage } from './Language/LanguageProvider';

export type TextProps = {
    size?: 'sm' | 'md' | 'lg' | 'xl',
    children?: ReactNode,
    align?: 'left' | 'center' | 'right',
    className?: string,
    useDarkMode?: boolean,
    gradient?: boolean,
    text?: LanguageProps | string
}

export type LanguageProps = {
    English: string,
    Portugues: string,
}

export default function Text({ size = 'md', text, children, className, useDarkMode = true, gradient = false }: TextProps) {
    const { language } = useLanguage()

    return (
        <Slot
            className={clsx(
                "text-stone-900",
                {
                    'text-sm 2xl:text-lg': size === 'sm',
                    'text-md 2xl:text-xl': size === 'md',
                    'text-lg 2xl:text-xxl': size === 'lg',
                    'text-xl 2xl:text-2xl': size === 'xl',
                },
                useDarkMode ? 'dark:text-gray-200' : '',
                gradient ? 'gradient-text bg-clip-text' : '',
                className,
            )}
        >
            {
                children != null
                    ?
                    children
                    :
                    <p>
                        {
                            typeof text !== 'string'
                                ?
                                language === "English"
                                    ?
                                    text?.English
                                    :
                                    text?.Portugues
                                :
                                text
                        }
                    </p>
            }
        </Slot>
    )
}