import ContainerCommom from "@/components/ContainerCommom";
import Heading from "@/components/Heading";
import Text from "@/components/Text";

import { FaJava, FaPython } from "react-icons/fa";
import { SiJavascript, SiCsharp, SiNextdotjs } from "react-icons/si";

import { Card } from './SkillsStyled';

const Skills = () => {
    return (
        <ContainerCommom id="Skills">
            <div>
                <Heading className="gradient-text bg-clip-text" size="xl">Skills</Heading>
                <div className="flex flex-col flex-nowrap w-full sm:flex-row">
                    <div className="w-[100%] flex flex-col items-center justify-center sm:w-[30%]">
                        <Heading size="md">Nome da linguagem</Heading>
                        <Text size="lg">Descricao</Text>
                    </div>
                    <div className="w-[100%] grid grid-cols-1 p-2 content-center gap-6 mt-6 xs:p-2 sm:grid-cols-2 sm:p-2 sm:w-[70%] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <Card Icon={FaPython} text="Python" />
                        <Card Icon={FaJava} text="Java" />
                        <Card Icon={SiJavascript} text="javaScript" />
                        <Card Icon={SiCsharp} text="Csharp" />
                        <Card Icon={SiNextdotjs} text="Next" />
                        <Card Icon={SiNextdotjs} text="Next" />
                        <Card Icon={SiNextdotjs} text="Next" />

                    </div>
                </div>
            </div>
        </ContainerCommom>
    );
}

export default Skills;