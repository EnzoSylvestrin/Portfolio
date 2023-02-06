import { IconType } from "react-icons";

type FooterIconProps = {
    Icon: IconType,
    href: string,
    color: string
}

export const IconFooter = ({ Icon, href, color }: FooterIconProps) => {
    return (
        <a href={href} className="transition-all duration-200 hover:scale-110" rel="noopener noreferrer" target="_blank">
            <Icon size={32} color={color} />
        </a>
    );
}