import { BsGearFill } from "react-icons/bs";
import { RiCodeSSlashFill } from "react-icons/ri";

import { MdPhoneAndroid } from "react-icons/md";
import { ServiceCard } from "./ServicesStyled";

import { motion } from 'framer';

import ContainerCommom from "@/components/ContainerCommom";
import { TitleSection } from "@/components/CommomComponents";

const Services = () => {
    return (
        <ContainerCommom id="Servicos">
            <div>
                <TitleSection title="Serviços" className="mb-4" />
                <motion.div
                    className="grid grid-cols-1 gap-6 w-full px-3 content-center mt-4 sm:grid-cols-2 md:grid-cols-3 lg:px-8"
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <ServiceCard
                        icon={BsGearFill}
                        title="Automação"
                        text="Criação de bots e automação de tarefas repetitivas."
                    />
                    <ServiceCard
                        icon={RiCodeSSlashFill}
                        title="Criação de sites"
                        text="Construção do design e funcionamento de sites."
                    />
                    <ServiceCard
                        icon={MdPhoneAndroid}
                        title="Criação de aplicativos"
                        text="Desenvolvimento de aplicativos."
                    />
                </motion.div>
            </div>
        </ContainerCommom>
    );
}

export default Services;