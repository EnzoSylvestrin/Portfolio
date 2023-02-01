import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

import Button from "../Button/Button";

const HomeComponent = () => {
    return (
        <div className="flex items-center flex-col h-full justify-center pt-[12vh] min-h-[100vh]">
            <h1 className="text-xlg text-center dark:text-white">Seja bem vindo!<br />Eu sou o Enzo</h1>
            <Button text="Clique aqui" styles="mt-4" />
            <MouseParallaxContainer className="w-full flex items-center justify-center" globalFactorX={0.1} globalFactorY={0.1}>
                <MouseParallaxChild factorX={0.3} factorY={0.5}>
                    <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" height={'200px'} width={'200px'} alt="" />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.7} factorY={0.8}>
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" height={'200px'} width={'200px'} alt="" />
                </MouseParallaxChild>
            </MouseParallaxContainer>
        </div>
    );
}

export default HomeComponent;