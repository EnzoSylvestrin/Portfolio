import { HTMLAttributes } from "react";

import { IconType } from "react-icons";

import { motion } from 'framer';

import Heading from "@/components/Heading";
import Text, { LanguageProps } from "@/components/Text";
import { LinearGradientIcon } from "@/components/CommomComponents";

type ServiceCardProps = HTMLAttributes<HTMLDivElement> & {
    icon: IconType,
    titleElement: LanguageProps,
    text: LanguageProps,
    x?: number,
    y?: number,
    className?: string,
}

export const ServiceCard = ({ icon, text, titleElement, x, y, className, ...rest }: ServiceCardProps) => {
    return (
        <motion.div
            className={`flex Card-Gradient z-[1] relative transition-all duration-300 before:rounded-lg after:rounded-lg hover:scale-[1.02] ${className}`}
            initial={{ x: x, y: y, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            {...rest}
        >
            <div className="flex w-full ml-[6px] mt-[6px] flex-col gap-3 px-4 py-6 rounded-md bg-gray-200 items-center justify-center dark:bg-zinc-900">
                <LinearGradientIcon
                    id="10"
                    Icon={icon}
                    size={60}
                />
                <Heading text={titleElement} size="md" className="text-center" gradient={true} />
                <Text text={text} size="md" className="text-center px-2" />
            </div>
        </motion.div>
    )
}