import { IconType } from "react-icons/lib";

import Heading from "@/components/Heading";

import { LinearGradientIcon } from "../Header/HeaderStyled";
import clsx from "clsx";

type CardProps = {
    Icon: IconType,
    text: string,
}

export const Card = ({ Icon, text }: CardProps) => {
    return (
        <div className="flex flex-col items-center justify-center p-[2px] z-[1] relative Card-Gradient w-full h-full">
            <div className="bg-slate-300 flex flex-col items-center justify-center w-full h-full cursor-pointer Container-Card rounded-[6px] p-4 dark:bg-slate-900">
                <LinearGradientIcon
                    Icon={Icon}
                    id={"4"}
                    w={"100px"}
                    h={"100px"}
                    size={100}
                />
                <Heading size="md" className="mt-5">
                    {text}
                </Heading>
            </div>
        </div>
    );
}