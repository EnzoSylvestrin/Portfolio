import ContainerCommom from "@/components/ContainerCommom";
import Heading from "@/components/Heading";
import Text from "@/components/Text";

import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiCsharp, SiNodedotjs } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";

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
                    <div className="w-[100%] grid grid-cols-1 justify-center align-center p-2 gap-6 mt-6 xs:grid-cols-2 sm:grid-cols-2 sm:p-2 sm:w-[70%] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <Card Icon={FaPython} />
                        <Card Icon={FaJava} />
                        <Card Icon={DiJavascript1} />
                        <Card Icon={SiCsharp} />
                        <Card Icon={SiNodedotjs} />
                        <Card Icon={FaReact} />
                        <Card Icon={IoLogoCss3} />
                        <Card Icon={AiFillHtml5} />
                        <Card Icon={AiFillHtml5} />
                        <Card Icon={AiFillHtml5} />
                    </div>
                </div>
            </div>
        </ContainerCommom>
    );
}

export default Skills;