import { HTMLAttributes, ReactNode } from 'react';

import { FiExternalLink } from 'react-icons/fi';
import { VscRepoPull } from 'react-icons/vsc';

import Heading from '@/components/Heading';
import Text, { LanguageProps } from '@/components/Text';

export type ProjectCardProps = HTMLAttributes<HTMLDivElement> & {
    imgSrc: string,
    titleComponent: LanguageProps,
    description: LanguageProps,
    Repo?: string,
    Site?: string
}

export const ProjectCards = ({ imgSrc, description, titleComponent, Repo, Site, ...rest }: ProjectCardProps) => {
    return (
        <div className='w-auto rounded-t-xl bg-gray-300 shadow-lg dark:bg-slate-900' {...rest}>
            <a href={Site ? Site : Repo} target="_blank" rel="noopener noreferrer">
                <img src={imgSrc} className="w-full h-24 rounded-t-xl object-cover sm:h-32 md:h-48" alt='Imagem do Projeto' />
            </a>
            <div className='flex flex-col items-center justify-center p-4 mb-2'>
                <Heading text={titleComponent} size='md' className='text-center mb-2' gradient={true} />
                <Text text={description} size='md' className='text-center break-words w-52 sm:w-72' />
                <div className='flex gap-4 items-center justify-center mt-3'>
                    {
                        Repo
                            ?
                            <ContainerIcon href={Repo}>
                                <VscRepoPull size={21} />
                            </ContainerIcon>
                            :
                            ''
                    }
                    {
                        Site
                            ?
                            <ContainerIcon href={Site}>
                                <FiExternalLink size={21} />
                            </ContainerIcon>
                            :
                            ''
                    }
                </div>
            </div>
        </div>
    );
}

export const ContainerIcon = ({ children, href }: { children: ReactNode, href?: string }) => {
    return (
        <a href={href} className='rounded-full p-2 flex items-center justify-center text-white transition-transform duration-300 bg-gray-800 hover:scale-110' target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}