import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export default function Heading({ size = 'md', children, asChild, className }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp
            className={clsx(
                "text-stone-900 dark:text-white",
                {
                    'text-xl': size === 'sm',
                    'text-xxl': size === 'md',
                    'text-2xl': size === 'lg',
                    'text-xlg': size === 'xl',
                },
                className
            )}
        >
            {children}
        </Comp>
    )
}