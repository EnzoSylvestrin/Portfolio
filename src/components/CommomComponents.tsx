import { IconBaseProps, IconType } from 'react-icons/lib';

import { LanguageProps } from './Text';
import Heading from './Heading';

type GradientIcon = IconBaseProps & {
    Icon: IconType,
    id: string,
    size: number
}

export const LinearGradientIcon = ({ Icon, id, size, className, ...rest }: GradientIcon) => {
    return (
        <svg width={`${size}px`} height={`${size}px`} className={`flex items-center justify-center ${className}`}>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--first)" />
                <stop offset="50%" stopColor="var(--second)" />
                <stop offset="100%" stopColor="var(--third)" />
            </linearGradient>
            <Icon style={{ fill: `url(#${id})` }} size={size} {...rest} />
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