import { IconType } from "react-icons";

import { LinearGradientIcon } from "../Header/HeaderStyled";

type FooterIconProps = {
    Icon: IconType,
    href: string
}

export const IconFooter = ({ Icon, href }: FooterIconProps) => {
    return (
        <a href={href} className="transition-all duration-200 hover:scale-110">
            <LinearGradientIcon
                id={'5'}
                Icon={Icon}
                size={40}
                w={"40px"}
                h={"40px"}
            />
        </a>
    );
}