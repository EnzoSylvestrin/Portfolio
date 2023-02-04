import { IconType } from "react-icons/lib";

import Heading from "@/components/Heading";

type CardProps = {
    Icon: IconType,
    text: string,
}

export const Card = ({ Icon, text }: CardProps) => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <Icon />
            <Heading size="lg">{text}</Heading>
        </div>
    );
}