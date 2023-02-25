import { Dispatch, SetStateAction, useEffect } from "react";

import { Carousel } from "react-carousel3";
import MediaQuery from "react-responsive";

import { motion } from 'framer';

import { TitleSection } from "@/components/CommomComponents";
import ContainerCommom from "@/components/ContainerCommom";

import MoveStats from '../../../assets/moveImg.png';
import PokeStack from '../../../assets/img-app.png';
import Sorteio from '../../../assets/Sorteio.png';
import AkameWiki from '../../../assets/Akame-wiki.png';

import { ProjectCardProps, ProjectCards } from "./ProjectsStyled";

type breakPointsProps = {
    breakPoint: number,
    width: number,
    height: number
}

const Projects = ({ loading }: { loading?: Dispatch<SetStateAction<boolean>> }) => {

    const BreakPoints: breakPointsProps[] = [
        { breakPoint: 0, width: 500, height: 330 },
        { breakPoint: 400, width: 700, height: 350 },
        { breakPoint: 768, width: 600, height: 380 },
        { breakPoint: 1000, width: 900, height: 460 },
    ]

    const ProjectsCards: ProjectCardProps[] = [
        {
            imgSrc: MoveStats.src,
            titleComponent: { Portugues: "Move Stats", English: "Move Stats" },
            description: { Portugues: "Projeto finalista na FEBRACE 2022 desenvolvido para facilitar na locomoção de deficientes visuais.", English: "FEBRACE 2022 finalist project developed to facilitate transportation for visually impaired individuals." },
            Repo: "https://github.com/EnzoSylvestrin/Move-Stats",
            Site: "https://movestats.vercel.app"
        },
        {
            imgSrc: PokeStack.src,
            titleComponent: { Portugues: "PokeStack", English: "PokeStack" },
            description: { Portugues: "Pokedex criada com Next e TypeScript com autenticação de usuário.", English: "Pokedex made with Next and TypeScript contains user authentication" },
            Repo: "https://github.com/EnzoSylvestrin/PokeStack",
            Site: "https://poke-stack.vercel.app"
        },
        {
            imgSrc: AkameWiki.src,
            titleComponent: { Portugues: "Akame Wiki", English: "Akame Wiki" },
            description: { Portugues: "Site feito para aprimorar meus conhecimentos com react e consumo de APIs.", English: "Website created to enhance my skills with React and API consumption." },
            Repo: "https://github.com/EnzoSylvestrin/Akame-Wiki",
            Site: "https://enzosylvestrin.github.io/Akame-Wiki/"
        },
        {
            imgSrc: Sorteio.src,
            titleComponent: { Portugues: "Sorteio", English: "Draw" },
            description: { Portugues: "Site simples feito com Next para sorteio de números!", English: "Simple website made with Next for number drawing!" },
            Repo: "https://github.com/EnzoSylvestrin/sorteio",
            Site: "https://sorteio-plum.vercel.app"
        },
        {
            imgSrc: "https://enotas.com.br/blog/wp-content/uploads/2021/02/GitHub.jpg",
            titleComponent: { Portugues: "Github", English: "Github" },
            description: { Portugues: "Acesse meu github para ver todos meus os projetos.", English: "Visit my Github to see all of my projects" },
            Site: "https://github.com/EnzoSylvestrin"
        }
    ]

    useEffect(() => {
        if (loading != null) {
            loading(false);
        }
    }, [])

    return (
        <ContainerCommom id="Projetos">
            <div>
                <TitleSection title={{
                    English: "Projects",
                    Portugues: "Projetos"
                }} />
                <motion.div
                    className="flex items-center justify-center my-16"
                    initial={{ scale: 0.90, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    {
                        BreakPoints.map((item, i) => {
                            return <MediaQuery key={i} maxWidth={BreakPoints.length - 1 == i ? 9999 : BreakPoints[i + 1].breakPoint} minWidth={item.breakPoint}>
                                <Carousel height={item.height} width={item.width} yOrigin={item.height / 10} yRadius={item.height / 6} xOrigin={item.width / 2} xRadius={item.width / 2.3} autoPlay={true}>
                                    {
                                        ProjectsCards.map((item, i) => {
                                            return <ProjectCards
                                                key={i}
                                                imgSrc={item.imgSrc}
                                                titleComponent={item.titleComponent}
                                                description={item.description}
                                                Repo={item.Repo}
                                                Site={item.Site}

                                            />
                                        })
                                    }
                                </Carousel>
                            </MediaQuery>
                        })
                    }
                </motion.div>
            </div>
        </ContainerCommom>
    );
}

export default Projects;