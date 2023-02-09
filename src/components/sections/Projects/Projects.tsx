import { TitleSection } from "@/components/CommomComponents";
import ContainerCommom from "@/components/ContainerCommom";

import { ProjectCards } from "./ProjectsStyled";

import MoveStats from '../../../assets/moveImg.png';
import PokeStack from '../../../assets/img-app.png';
import Sorteio from '../../../assets/Sorteio.png'
import AkameWiki from '../../../assets/Akame-Wiki.png';;

const Projects = () => {
    return (
        <ContainerCommom id="Projetos">
            <div>
                <TitleSection title="Projetos" />
                <div className="w-full p-4 pb-0 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:p-2 md:grid-cols-3 lg:p-8">
                    <ProjectCards
                        imgSrc={MoveStats.src}
                        title="Move Stats"
                        description="Projeto finalista na FEBRACE 2022 desenvolvido para facilitar na locomoção de deficientes visuais."
                        Repo="https://github.com/EnzoSylvestrin/Move-Stats"
                        Site="https://movestats.vercel.app"
                    />
                    <ProjectCards
                        imgSrc={PokeStack.src}
                        title="PokeStack"
                        description="Pokedex criada com next e typeScript com autenticação de usuário."
                        Repo="https://github.com/EnzoSylvestrin/PokeStack"
                        Site="https://poke-stack.vercel.app"
                    />
                    <ProjectCards
                        imgSrc={AkameWiki.src}
                        title="Akame Wiki"
                        description="Site feito para aprimorar meus conhecimentos com react e consumo de APIs."
                        Repo="https://github.com/EnzoSylvestrin/Akame-Wiki"
                        Site="https://enzosylvestrin.github.io/Akame-Wiki/"
                    />
                    <ProjectCards
                        imgSrc={Sorteio.src}
                        title="Sorteio"
                        description="Site simples feito com Next para sorteio de números!"
                        Repo="https://github.com/EnzoSylvestrin/sorteio"
                        Site="https://sorteio-plum.vercel.app"
                    />
                    <ProjectCards
                        imgSrc="https://enotas.com.br/blog/wp-content/uploads/2021/02/GitHub.jpg"
                        title="Github"
                        description="Acesse meu github para ver todos meus os projetos."
                        Site="https://github.com/EnzoSylvestrin"
                    />
                </div>
            </div>
        </ContainerCommom>
    );
}

export default Projects;