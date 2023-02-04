import { Player } from '@lottiefiles/react-lottie-player';

import Typewriter from "typewriter-effect";

import Button from "../Button/Button";
import ContainerColors from '../ColorPicker/ContainerColors';
import Heading from '../Heading';

const HomeComponent = () => {
    return (
        <>
            <div className="h-screen w-full flex items-center justify-center pt-[12vh] p-4 sm:px-12 relative" id='home'>
                <div className="flex items-center flex-col h-full w-full justify-center md:w-[50%] md:items-start">
                    <Heading size='md' className="mb-6 text-center md:text-start sm:text-xlg">
                        <h1>
                            Seja bem vindo!<br />
                            meu nome é Enzo<br />
                        </h1>
                    </Heading>
                    <ContainerColors />
                    <Typewriter
                        options={{
                            strings: ['Desenvolvedor', 'FullStack', 'Junior', 'Freenlancer', 'Gamer'],
                            autoStart: true,
                            loop: true,
                            cursorClassName: 'text-xlg bg-clip-text gradient-text',
                            wrapperClassName: 'text-xlg bg-clip-text gradient-text'
                        }}
                    />

                    <Button text="Encontre-me" styles="mt-8 text-lg md:text-xl" />
                </div>
                <div className="w-[50%] items-center justify-center hidden md:flex">
                    <Player
                        autoplay
                        loop
                        src="https://assets3.lottiefiles.com/packages/lf20_v9riyrep.json"
                        style={{ height: 420, width: 420 }}
                    >
                    </Player>
                </div>
            </div>

        </>
    );
}

export default HomeComponent;