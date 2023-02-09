import { HTMLAttributes } from "react";
import { IconType } from "react-icons/lib";

import { LinearGradientIcon } from "@/components/CommomComponents";

type CardProps = HTMLAttributes<HTMLDivElement> & {
    Icon: IconType,
}

export const Card = ({ Icon, ...rest }: CardProps) => {
    return (
        <div
            className="flex w-[130px] h-[130px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center p-[2px] z-[1] relative Card-Gradient rounded-full shadow-lg transition-transform duration-200 after:rounded-full before:rounded-full hover:scale-105"
            {...rest}
        >
            <div className="bg-slate-300 flex flex-col items-center w-full justify-center h-full cursor-pointer Container-Card rounded-full dark:bg-slate-900">
                <LinearGradientIcon
                    Icon={Icon}
                    id={"4"}
                    size={80}
                />
            </div>
        </div>
    );
}