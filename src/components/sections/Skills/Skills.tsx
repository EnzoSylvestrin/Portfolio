import { MouseEvent, useRef, useState } from "react";

import { motion } from 'framer';

import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiCsharp, SiNextdotjs, SiNodedotjs, SiTypescript } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { IconType } from "react-icons/lib";

import ProgressBar from "@ramonak/react-progress-bar";

import ContainerCommom from "@/components/ContainerCommom";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import { TitleSection } from "@/components/CommomComponents";
import { useLanguage } from "@/components/Language/LanguageProvider";

import { Card } from './SkillsStyled';
import dayjs from "dayjs";

const Skills = () => {

    const [progress, setProgress] = useState<number>(100);

    const { language } = useLanguage();

    const maxProgress = 100;
    const maxTime = 36;

    const Title = useRef<HTMLHeadingElement>(null);
    const Description = useRef<HTMLParagraphElement>(null);

    type SkillsProps = {
        id: string,
        icon: IconType,
        time: number, //in months
    };

    const initialDateJS = dayjs('2021-02-01');
    const initialDateTS = dayjs('2021-12-15');
    const initialDateNext = dayjs('2022-02-14');
    const initialDateHTML = dayjs('2020-08-01');
    const initialDateCSS = dayjs('2020-08-01');
    const initialDateReact = dayjs('2021-07-01');
    const initialDateNode = dayjs('2021-06-10');

    const Skills: SkillsProps[] = [
        { id: "Python", icon: FaPython, time: 6 },
        { id: "Java", icon: FaJava, time: 14 },
        { id: "JavaScript", icon: DiJavascript1, time: Math.abs(initialDateJS.diff(dayjs(new Date()), 'month')) },
        { id: "TypeScript", icon: SiTypescript, time: Math.abs(initialDateTS.diff(dayjs(new Date()), 'month')) },
        { id: "Csharp", icon: SiCsharp, time: 8 },
        { id: "Node", icon: SiNodedotjs, time: Math.abs(initialDateNode.diff(dayjs(new Date()), 'month')) },
        { id: "React e React Native", icon: FaReact, time: Math.abs(initialDateReact.diff(dayjs(new Date()), 'month')) },
        { id: "Next", icon: SiNextdotjs, time: Math.abs(initialDateNext.diff(dayjs(new Date()), 'month')) },
        { id: "CSS", icon: IoLogoCss3, time: Math.abs(initialDateCSS.diff(dayjs(new Date()), 'month')) },
        { id: "HTML", icon: AiFillHtml5, time: Math.abs(initialDateHTML.diff(dayjs(new Date()), 'month')) },
    ];

    const HandleHoverCard = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        if (Title.current != null && Description.current != null) {
            Title.current.innerHTML = e.currentTarget.id;
            let time = Skills.find(skill => skill.id === e.currentTarget.id)?.time;
            let description = `${ConvertTime(time)} ${language === "Português" ? "de experiência com essa habilidade!" : "of experience with this skill"}`;
            Description.current.innerHTML = description;
            setProgress(time ? Math.floor(time * maxProgress / maxTime) : 0);
        }
    }

    const ConvertTime = (time: number | undefined): string => {
        if (!time) return '';
        let finalStr = '';
        let ano: number = Math.floor(time / 12);
        if (ano > 0) {
            if (language === "Português") {
                finalStr = `${ano} ${ano > 1 ? 'anos' : 'ano'} ${time % 12 > 0 ? `e ${time % (12 * ano)} meses` : ''}`;
            }
            else {
                finalStr = `${ano} ${ano > 1 ? 'years' : 'year'} ${time % 12 > 0 ? `and ${time % (12 * ano)} months` : ''}`;
            }
        }
        else {
            if (language === "Português") {
                finalStr = `${time} meses`;
            }
            else {
                finalStr = `${time} months`;
            }
        }
        return finalStr;
    }

    return (
        <ContainerCommom id="Skills">
            <div>
                <TitleSection title={{
                    English: "Skills",
                    Portugues: "Skills"
                }} className="mb-3" />
                <div className="flex flex-col flex-nowrap w-full sm:flex-row">
                    <motion.div
                        className="w-[100%] flex flex-col items-center justify-center my-3 sm:my-0 sm:w-[30%]"
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Heading size="lg" gradient={true} className="text-center">
                            <h1 ref={Title}>
                                Skill
                            </h1>
                        </Heading>
                        <ProgressBar className="w-[90%] transition-all duration-300 m-3" bgColor="linear-gradient(to right, var(--first), var(--second), var(--third))" baseBgColor="var(--bgColor)" maxCompleted={maxProgress} completed={progress} />
                        <Text
                            size="lg"
                            className="text-center"
                        >
                            <p ref={Description}>
                                {
                                    language === "English"
                                        ?
                                        "Hover or click on a skill to se how much experience I have with each skill"
                                        :
                                        "Passe o mouse ou clique em cima de uma skill para ver o tempo"
                                }
                            </p>
                        </Text>
                    </motion.div>
                    <motion.div
                        className="w-full grid grid-cols-1 justify-center align-center p-2 gap-6 mt-6 xs:grid-cols-2 sm:grid-cols-2 sm:p-2 sm:w-[70%] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                        initial={{ scale: 0.90, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {
                            Skills.map(Skill => {
                                return <Card
                                    key={Skill.id}
                                    Icon={Skill.icon}
                                    id={Skill.id}
                                    onMouseEnter={HandleHoverCard}
                                />
                            })
                        }
                    </motion.div>
                </div>
            </div>
        </ContainerCommom>
    );
}

export default Skills;