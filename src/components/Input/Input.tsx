import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';

import { Slot } from '@radix-ui/react-slot';

import clsx from 'clsx';
import { LanguageProps } from '../Text';
import { useLanguage } from '../Language/LanguageProvider';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface TextInputRootProps {
    children: ReactNode;
    className?: string;
    textArea?: boolean;
}

function InputRoot({ children, className, textArea }: TextInputRootProps) {
    return (
        <div className={clsx('flex items-center Input-Gradient relative w-full z-[1] after:rounded-lg before:rounded-lg', className)}>
            <div className={clsx('flex bg-gray-300 items-center gap-2 w-full ml-1 rounded-md dark:bg-gray-800', textArea ? 'h-full' : 'h-12')}>
                {children}
            </div>
        </div>
    );
}

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

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
    PlaceHolderComponent: LanguageProps
}

function InputInput({ PlaceHolderComponent, ...rest }: TextInputInputProps) {

    const { language } = useLanguage();

    return (
        <input
            className='bg-transparent flex-1 caret-fuchsia-500 text-stone-900 2xl:text-lg outline-none placeholder:text-gray-500 dark:text-white dark:placeholder:text-gray-400'
            placeholder={
                language === "English"
                    ?
                    PlaceHolderComponent?.English
                    :
                    PlaceHolderComponent?.Portugues
            }
            {...rest}
        />
    )
}

export interface InputAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    PlaceHolderComponent: LanguageProps
}

function InputArea({ PlaceHolderComponent, ...rest }: InputAreaProps) {

    const { language } = useLanguage();

    return (
        <textarea
            className="resize-y max-h-[300px] min-h-[120px] caret-fuchsia-500 bg-transparent w-full py-[6px] placeholder:text-gray-500 text-stone-900 h-[120px] px-2 outline-0 dark:placeholder:text-gray-400 dark:text-white xs:resize-none"
            placeholder={
                language === "English"
                    ?
                    PlaceHolderComponent?.English
                    :
                    PlaceHolderComponent?.Portugues
            }
            {...rest}
        />
    )
}

export const Input = {
    Root: InputRoot,
    Icon: InputIcon,
    Input: InputInput,
    TextArea: InputArea
}