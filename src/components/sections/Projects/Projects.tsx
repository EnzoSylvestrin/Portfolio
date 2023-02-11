import { Carousel } from "react-carousel3";
import MediaQuery from "react-responsive";

import { TitleSection } from "@/components/CommomComponents";
import ContainerCommom from "@/components/ContainerCommom";

import MoveStats from '../../../assets/moveImg.png';
import PokeStack from '../../../assets/img-app.png';
import Sorteio from '../../../assets/Sorteio.png'

import AkameWiki from '../../../assets/Akame-wiki.png';

import { ProjectCardProps, ProjectCards } from "./ProjectsStyled";
import { Dispatch, SetStateAction, useEffect } from "react";

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
            title: "Move Stats",
            description: "Projeto finalista na FEBRACE 2022 desenvolvido para facilitar na locomoção de deficientes visuais.",
            Repo: "https://github.com/EnzoSylvestrin/Move-Stats",
            Site: "https://movestats.vercel.app"
        },
        {
            imgSrc: PokeStack.src,
            title: "PokeStack",
            description: "Pokedex criada com next e typeScript com autenticação de usuário.",
            Repo: "https://github.com/EnzoSylvestrin/PokeStack",
            Site: "https://poke-stack.vercel.app"
        },
        {
            imgSrc: AkameWiki.src,
            title: "Akame Wiki",
            description: "Site feito para aprimorar meus conhecimentos com react e consumo de APIs.",
            Repo: "https://github.com/EnzoSylvestrin/Akame-Wiki",
            Site: "https://enzosylvestrin.github.io/Akame-Wiki/"
        },
        {
            imgSrc: Sorteio.src,
            title: "Sorteio",
            description: "Site simples feito com Next para sorteio de números!",
            Repo: "https://github.com/EnzoSylvestrin/sorteio",
            Site: "https://sorteio-plum.vercel.app"
        },
        {
            imgSrc: "https://enotas.com.br/blog/wp-content/uploads/2021/02/GitHub.jpg",
            title: "Github",
            description: "Acesse meu github para ver todos meus os projetos.",
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
                <TitleSection title="Projetos" />
                <div className="flex items-center justify-center my-16">
                    {
                        BreakPoints.map((item, i) => {
                            return <MediaQuery key={i} maxWidth={BreakPoints.length - 1 == i ? 9999 : BreakPoints[i + 1].breakPoint} minWidth={item.breakPoint}>
                                <Carousel height={item.height} width={item.width} yOrigin={item.height / 10} yRadius={item.height / 6} xOrigin={item.width / 2} xRadius={item.width / 2.3} autoPlay={true} >
                                    {
                                        ProjectsCards.map((item, i) => {
                                            return <ProjectCards
                                                key={i}
                                                imgSrc={item.imgSrc}
                                                title={item.title}
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
                </div>
            </div>
        </ContainerCommom>
    );
}

export default Projects;