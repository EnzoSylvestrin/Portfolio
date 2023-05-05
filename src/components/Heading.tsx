import { ReactNode } from 'react';
import { clsx } from 'clsx';

import { Slot } from '@radix-ui/react-slot';

import { useLanguage } from './Language/LanguageProvider';
import { LanguageProps } from './Text';

type HeadingProps = {
    size?: 'sm' | 'md' | 'lg' | 'xl',
    children?: ReactNode,
    align?: 'left' | 'center' | 'right',
    className?: string,
    useDarkMode?: boolean,
    gradient?: boolean,
    text?: LanguageProps
}

export default function Heading({ size = 'md', text, children, className, useDarkMode = true, gradient = false }: HeadingProps) {
    const { language } = useLanguage()

    return (
        <Slot
            className={clsx(
                {
                    'text-xl 2xl:text-xxl': size === 'sm',
                    'text-xxl 2xl:text-xlg': size === 'md',
                    'text-2xl 2xl:text-xlg': size === 'lg',
                    'text-xlg 2xl:text-5xl': size === 'xl',
                },
                useDarkMode ? 'text-stone-900 dark:text-white' : 'text-white',
                gradient ? 'gradient-text bg-clip-text' : '',
                className
            )}
        >
            {
                children != null
                    ?
                    children
                    :
                    <h2>
                        {
                            language === "English"
                                ?
                                text?.English
                                :
                                text?.Portugues
                        }
                    </h2>
            }
        </Slot>
    )
}