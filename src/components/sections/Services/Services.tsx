import { BsGearFill } from "react-icons/bs";
import { RiCodeSSlashFill } from "react-icons/ri";

import { MdPhoneAndroid } from "react-icons/md";
import { ServiceCard } from "./ServicesStyled";

import ContainerCommom from "@/components/ContainerCommom";
import Heading from "@/components/Heading";

const Services = () => {
    return (
        <ContainerCommom id="Servicos">
            <div>
                <Heading size='xl' gradient={true} className="text-center mb-4">Serviços</Heading>
                <div className="grid grid-cols-1 gap-6 w-full px-3 content-center mt-4 sm:grid-cols-2 md:grid-cols-3 lg:px-8">
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
                </div>
            </div>
        </ContainerCommom>
    );
}

export default Services;