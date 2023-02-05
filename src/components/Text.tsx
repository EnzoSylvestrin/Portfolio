import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
    useDarkMode?: boolean;
}

export default function Text({ size = 'md', children, asChild, className, useDarkMode = true }: TextProps) {
    const Comp = asChild ? Slot : 'p';

    return (
        <Comp
            className={clsx(
                "text-stone-900",
                {
                    'text-sm': size === 'sm',
                    'text-md': size === 'md',
                    'text-lg': size === 'lg',
                    'text-xl': size === 'xl',
                },
                useDarkMode ? 'dark:text-white' : '',
                className
            )}
        >
            {children}
        </Comp>
    )
}