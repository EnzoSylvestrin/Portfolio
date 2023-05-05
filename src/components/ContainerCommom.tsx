import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

const ContainerCommom = ({ id, className, children }: { id: string, className?: string, children: React.ReactNode }) => {
    return (
        <Slot
            className={clsx("flex justify-center flex-col items-center px-2 2xl:px-[6%] py-12 sm:px-6", className)}
            id={id}
        >
            {children}
        </Slot>
    );
}

export default ContainerCommom;