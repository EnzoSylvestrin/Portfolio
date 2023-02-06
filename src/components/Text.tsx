import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
    useDarkMode?: boolean;
    gradient?: boolean;
}

export default function Text({ size = 'md', children, asChild, className, useDarkMode = true, gradient = false }: TextProps) {
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
                gradient ? 'gradient-text bg-clip-text' : '',
                className
            )}
        >
            {children}
        </Comp>
    )
}