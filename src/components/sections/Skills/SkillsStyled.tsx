import { IconType } from "react-icons/lib";

import { LinearGradientIcon } from "../Header/HeaderStyled";

type CardProps = {
    Icon: IconType,
}

export const Card = ({ Icon }: CardProps) => {
    return (
        <div className="flex w-[130px] h-[130px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center p-[2px] z-[1] relative Card-Gradient rounded-full shadow-lg transition-transform duration-200 hover:scale-105">
            <div className="bg-slate-300 flex flex-col items-center w-full justify-center h-full cursor-pointer Container-Card rounded-full dark:bg-slate-900">
                <LinearGradientIcon
                    Icon={Icon}
                    id={"4"}
                    w={"80px"}
                    h={"82px"}
                    size={80}
                />
            </div>
        </div>
    );
}