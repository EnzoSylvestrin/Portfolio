import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export default function Text({ size = 'md', children, asChild, className }: TextProps) {
    const Comp = asChild ? Slot : 'p';

    return (
        <Comp
            className={clsx(
                "text-stone-900 dark:text-white",
                {
                    'text-sm': size === 'sm',
                    'text-md': size === 'md',
                    'text-lg': size === 'lg',
                    'text-xl': size === 'xl',
                },
                className
            )}
        >
            {children}
        </Comp>
    )
}