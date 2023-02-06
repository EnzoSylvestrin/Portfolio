import { InputHTMLAttributes, ReactNode } from 'react';

import { Slot } from '@radix-ui/react-slot';

import clsx from 'clsx';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface TextInputRootProps {
    children: ReactNode;
    className?: string;
}

function InputRoot({ children, className }: TextInputRootProps) {
    return (
        <div className={clsx('flex items-center Input-Gradient relative w-full z-[1]', className)}>
            <div className='flex bg-gray-300 items-center gap-2 w-full h-12 ml-1 rounded-md dark:bg-gray-800'>
                {children}
            </div>
        </div>
    );
}

InputRoot.displayName = 'TextInput.Root';

export interface TextIconProps {
    children: ReactNode;
}

function InputIcon({ children }: TextInputProps) {
    return (
        <Slot className='ml-3 w-[18px] h-[18px] text-gray-400'>
            {children}
        </Slot>
    )
}

InputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function InputInput(props: TextInputInputProps) {
    return (
        <input
            className='bg-transparent flex-1 caret-fuchsia-500 text-stone-900 text-xs outline-none placeholder:text-gray-500 dark:text-white dark:placeholder:text-gray-400'
            {...props}
        />
    )
}

InputInput.displayName = 'TextInput.Input'

export const Input = {
    Root: InputRoot,
    Icon: InputIcon,
    Input: InputInput
}