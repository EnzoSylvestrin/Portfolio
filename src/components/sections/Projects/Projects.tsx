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
                <div className="w-full p-8 pb-0 grid grid-cols-3 gap-6">
                    <ProjectCards
                        imgSrc={MoveStats.src}
                        title="Move Stats"
                        description="Projeto finalista na FEBRACE 2022 desenvolvido para facilitar na locomoção de deficientes visuais."
                    />
                    <ProjectCards
                        imgSrc={PokeStack.src}
                        title="PokeStack"
                        description="Pokedex criada com next e typeScript com autenticação de usuário."
                    />
                    <ProjectCards
                        imgSrc={AkameWiki.src}
                        title="Akame Wiki"
                        description="Site feito para aprimorar meus conhecimentos com react e consumo de APIs."
                    />
                    <ProjectCards
                        imgSrc={Sorteio.src}
                        title="Sorteio"
                        description="Site simples feito com Next para sorteio de números!"
                    />
                    <ProjectCards
                        imgSrc="https://enotas.com.br/blog/wp-content/uploads/2021/02/GitHub.jpg"
                        title="Github"
                        description="Acesse meu github para ver todos meus os projetos."
                    />
                </div>
            </div>
        </ContainerCommom>
    );
}

export default Projects;