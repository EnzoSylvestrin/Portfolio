import Text from "@/components/Text";
import clsx from "clsx";

import { BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';

import { IconFooter } from "./FooterStyled";

const Footer = ({ theme }: { theme: 'dark' | 'light' }) => {
    return (
        <footer className={clsx("relative h-full flex items-center justify-center", theme == 'dark' ? 'dark bg-zinc-800' : 'bg-gray-300')}>
            <div className="w-full h-[2px] border-gradient absolute left-0 top-0"></div>
            <div className="pt-4">
                <div className="flex items-center gap-4 justify-center mb-2">
                    <IconFooter
                        href="#"
                        Icon={BsLinkedin}
                        color={"#310ece"}
                    />
                    <IconFooter
                        href="#"
                        Icon={BsWhatsapp}
                        color={"#0ece2e"}
                    />
                    <IconFooter
                        href="#"
                        Icon={BsTwitter}
                        color={"#1577d3"}
                    />
                </div>
                <Text size="lg">Enzo Sylvestrin 2023 ©</Text>
            </div>
        </footer>
    );
}

export default Footer;