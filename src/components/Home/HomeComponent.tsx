import { Player } from '@lottiefiles/react-lottie-player';

import Typewriter from "typewriter-effect";

import Button from "../Button/Button";
import ContainerColors from '../ColorPicker/ContainerColors';

const HomeComponent = () => {
    return (
        <>
            <div className="flex items-center justify-center pt-[12vh] p-4 h-full sm:px-12" id='home'>
                <div className="flex items-center flex-col h-full w-full justify-center md:w-[50%] md:items-start">
                    <h1 className="text-xxl mb-6 text-center dark:text-white md:text-start sm:text-xlg">Seja bem vindo!<br />meu nome é Enzo</h1>
                    <ContainerColors />
                    <Typewriter
                        options={{
                            strings: ['Desenvolvedor', 'FullStack', 'Junior', 'Freenlancer', 'Gamer'],
                            autoStart: true,
                            loop: true,
                            cursorClassName: 'text-xlg bg-clip-text text-transparent gradient-text',
                            wrapperClassName: 'text-xlg bg-clip-text text-transparent gradient-text'
                        }}
                    />

                    <Button text="Encontre-me" styles="mt-8 text-lg md:text-xl" />
                </div>
                <div className="w-[50%] items-center justify-center hidden md:flex">
                    <Player
                        autoplay
                        loop
                        src="https://assets3.lottiefiles.com/packages/lf20_v9riyrep.json"
                        style={{ height: 450, width: 450 }}
                    >
                    </Player>
                </div>
            </div>

        </>
    );
}

export default HomeComponent;