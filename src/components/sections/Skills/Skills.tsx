import { MouseEvent } from "react";

import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiCsharp, SiNodedotjs } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";

import ContainerCommom from "@/components/ContainerCommom";
import Heading from "@/components/Heading";
import Text from "@/components/Text";

import { Card } from './SkillsStyled';

const Skills = () => {

    const Skills = [
        { id: "Python", Icon: FaPython },
        { id: "Java", Icon: FaJava },
        { id: "JavaScript", Icon: DiJavascript1 },
        { id: "Csharp", Icon: SiCsharp },
        { id: "Node", Icon: SiNodedotjs },
        { id: "React", Icon: FaReact },
        { id: "Css", Icon: IoLogoCss3 },
        { id: "html", Icon: AiFillHtml5 },
    ];

    const HandleHoverCard = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        console.log(e.currentTarget.id);
    }

    return (
        <ContainerCommom id="Skills">
            <div>
                <Heading className="gradient-text bg-clip-text mb-3" size="xl">Skills</Heading>
                <div className="flex flex-col flex-nowrap w-full sm:flex-row">
                    <div className="w-[100%] flex flex-col items-center justify-center sm:w-[30%]">
                        <Heading size="md">Nome da linguagem</Heading>
                        <Text size="lg">Descricao</Text>
                    </div>
                    <div className="w-[100%] grid grid-cols-1 justify-center align-center p-2 gap-6 mt-6 xs:grid-cols-2 sm:grid-cols-2 sm:p-2 sm:w-[70%] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {
                            Skills.map(Skill => {
                                return <Card
                                    key={Skill.id}
                                    Icon={Skill.Icon}
                                    id={Skill.id}
                                    onMouseEnter={HandleHoverCard}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </ContainerCommom>
    );
}

export default Skills;