import Text from "@/components/Text";
import clsx from "clsx";

import { BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';

import { IconFooter } from "./FooterStyled";

const Footer = ({ theme }: { theme: 'dark' | 'light' }) => {
    return (
        <footer className={clsx("relative h-full flex items-center justify-center py-6", theme === 'dark' ? 'dark bg-zinc-800' : 'bg-gray-300')}>
            <div className="w-full h-[2px] border-gradient-animate absolute make-animate left-0 top-0"></div>
            <div className="w-full pl-12 flex-col pr-14 2xl:px-[6%] flex items-center justify-between md:flex-row">
                <div className="flex items-center gap-4 justify-center mb-2">
                    <IconFooter
                        href="https://www.linkedin.com/in/enzo-sylvestrin-336b71221/"
                        Icon={BsLinkedin}
                        color={"#2362c0"}
                    />
                    <IconFooter
                        href="https://api.whatsapp.com/send/?phone=5511993346502&type=phone_number"
                        Icon={BsWhatsapp}
                        color={"#0bcc15"}
                    />
                    <IconFooter
                        href="https://twitter.com/Iluminights"
                        Icon={BsTwitter}
                        color={"#14ade9"}
                    />
                </div>
                <Text text={{ Portugues: "Enzo Sylvestrin 2023 ©", English: "Enzo Sylvestrin 2023 ©" }} size="lg" className="leading-none" />
            </div>
        </footer>
    );
}

export default Footer;