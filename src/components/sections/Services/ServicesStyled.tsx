import { HTMLAttributes } from "react";

import { IconType } from "react-icons";

import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { LinearGradientIcon } from "@/components/CommomComponents";

type ServiceCardProps = HTMLAttributes<HTMLDivElement> & {
    icon: IconType,
    title: string,
    text: string,
    className?: string,
}

export const ServiceCard = ({ icon, text, title, className, ...rest }: ServiceCardProps) => {
    return (
        <div className={`flex Card-Gradient z-[1] relative transition-all duration-300 before:rounded-lg after:rounded-lg hover:scale-[1.02] ${className}`} {...rest}>
            <div className="flex w-full ml-[6px] mt-[6px] flex-col gap-3 px-4 py-6 rounded-md bg-gray-200 items-center justify-center dark:bg-zinc-900">
                <LinearGradientIcon
                    id="10"
                    Icon={icon}
                    size={60}
                />
                <Heading size="md" className="text-center" gradient={true}>{title}</Heading>
                <Text size="md" className="text-center px-2">{text}</Text>
            </div>
        </div>
    )
}