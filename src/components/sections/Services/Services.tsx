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
                <TitleSection title={{
                    English: "Services",
                    Portugues: "Serviços"
                }} className="mb-4" />
                <motion.div
                    className="grid grid-cols-1 gap-6 w-full px-3 content-center mt-4 sm:grid-cols-2 md:grid-cols-3 lg:px-8"
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <ServiceCard
                        icon={BsGearFill}
                        titleElement={{ Portugues: "Automação", English: "Automation" }}
                        text={{ Portugues: "Criação de bots e automação de tarefas repetitivas.", English: "Creation of bots and automation of repetitive tasks" }}
                    />
                    <ServiceCard
                        icon={RiCodeSSlashFill}
                        titleElement={{ Portugues: "Criação de sites", English: "Website creation" }}
                        text={{ Portugues: "Construção do design e funcionamento de sites.", English: "Construction of website design and functionality" }}
                    />
                    <ServiceCard
                        icon={MdPhoneAndroid}
                        titleElement={{ Portugues: "Criação de apps", English: "Apps creation" }}
                        text={{ Portugues: "Desenvolvimento de aplicativos.", English: "Development of applications." }}
                    />
                </motion.div>
            </div>
        </ContainerCommom>
    );
}

export default Services;