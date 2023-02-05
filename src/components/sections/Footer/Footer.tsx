import Text from "@/components/Text";
import clsx from "clsx";

import { BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';

import { LinearGradientIcon } from "../Header/HeaderStyled";
import { IconFooter } from "./FooterStyled";

const Footer = ({ theme }: { theme: 'dark' | 'light' }) => {
    return (
        <footer className={clsx("relative h-full flex items-center justify-center", theme == 'dark' ? 'bg-zinc-800' : 'bg-gray-300')}>
            <div className="w-full h-[2px] border-gradient absolute left-0 top-0"></div>
            <div className="pt-4">
                <div className="flex items-center gap-4 justify-center">
                    <IconFooter
                        href="#"
                        Icon={BsLinkedin}
                    />
                    <IconFooter
                        href="#"
                        Icon={BsWhatsapp}
                    />
                    <IconFooter
                        href="#"
                        Icon={BsTwitter}
                    />
                </div>
                <Text useDarkMode={false} size="lg" className="mt-2 gradient-text bg-clip-text">Enzo Sylvestrin 2022 ©</Text>
            </div>
        </footer>
    );
}

export default Footer;