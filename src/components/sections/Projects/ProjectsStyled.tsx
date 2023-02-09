import { FiExternalLink } from 'react-icons/fi';
import { VscRepoPull } from 'react-icons/vsc';

import Heading from '@/components/Heading';
import Text from '@/components/Text';
import { ReactNode } from 'react';

type ProjectCardProps = {
    imgSrc: string,
    title: string,
    description: string,
    Repo?: string,
    Site?: string
}

export const ProjectCards = ({ imgSrc, description, title, Repo, Site }: ProjectCardProps) => {
    return (
        <div className='w-full rounded-t-xl bg-gray-300 shadow-lg dark:bg-slate-900'>
            <img src={imgSrc} className="w-full h-48 rounded-t-xl" />
            <div className='flex flex-col items-center justify-center p-4 mb-2'>
                <Heading size='md' className='text-center mb-2' gradient={true}>{title}</Heading>
                <Text size='md' className='text-center'>{description}</Text>
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
        <a href={href} className='rounded-full p-2 flex items-center justify-center text-white transition-transform duration-300 bg-gray-800 hover:scale-110'>
            {children}
        </a>
    )
}