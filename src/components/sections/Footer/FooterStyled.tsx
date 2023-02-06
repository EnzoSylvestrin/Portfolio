import { IconType } from "react-icons";

type FooterIconProps = {
    Icon: IconType,
    href: string,
    color: string
}

export const IconFooter = ({ Icon, href, color }: FooterIconProps) => {
    return (
        <a href={href} className="transition-all duration-200 hover:scale-110">
            <Icon size={35} color={color} />
        </a>
    );
}