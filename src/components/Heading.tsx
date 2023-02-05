import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export type HeadingProps = {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
    useDarkMode?: boolean;
}

export default function Heading({ size = 'md', children, asChild, className, useDarkMode = true }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp
            className={clsx(
                {
                    'text-xl': size === 'sm',
                    'text-xxl': size === 'md',
                    'text-2xl': size === 'lg',
                    'text-xlg': size === 'xl',
                },
                useDarkMode ? 'text-stone-900 dark:text-white' : 'text-white',
                className
            )}
        >
            {children}
        </Comp>
    )
}