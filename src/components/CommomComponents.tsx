import { useEffect, useState } from 'react';

import { IconBaseProps, IconType } from 'react-icons/lib';

import { LanguageProps } from './Text';
import Heading from './Heading';

type GradientIcon = IconBaseProps & {
    Icon: IconType,
    id: string,
    size: number,
    reescale?: boolean,
}

export const LinearGradientIcon = ({ Icon, id, size, reescale = false, className, ...rest }: GradientIcon) => {

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        function updateScreenWidth() {
            setScreenWidth(window.innerWidth);
        }

        updateScreenWidth();

        window.addEventListener('resize', updateScreenWidth);

        return () => window.removeEventListener('resize', updateScreenWidth);
    }, []);

    const RealSize = screenWidth >= 1536 ? reescale ? size * 1.1 : size : size;

    return (
        <svg width={`${RealSize}px`} height={`${RealSize}px`} className={`flex items-center justify-center ${className}`}>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--first)" />
                <stop offset="50%" stopColor="var(--second)" />
                <stop offset="100%" stopColor="var(--third)" />
            </linearGradient>
            <Icon style={{ fill: `url(#${id})` }} size={RealSize} {...rest} />
        </svg>
    );
}

export const TitleSection = ({ title, className = "" }: { title: LanguageProps, className?: string }) => {
    return (
        <Heading text={{
            English: title.English,
            Portugues: title.Portugues
        }}
            size="xl"
            gradient={true}
            className={`text-center ${className}`}
        />
    );
}