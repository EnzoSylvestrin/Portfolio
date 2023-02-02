import Typewriter from "typewriter-effect";

import Button from "../Button/Button";

const HomeComponent = () => {
    return (
        <>
            <div className="flex items-center justify-center pt-[12vh] px-12 h-full">
                <div className="flex items-center flex-col h-full w-full justify-center md:w-[50%] md:items-start">
                    <h1 className="text-xlg mb-6 text-center dark:text-white md:text-start">Seja bem vindo!<br />meu nome é Enzo</h1>

                    <Typewriter
                        options={{
                            strings: ['Desenvolvedor', 'FullStack', 'Junior', 'Freenlancer', 'Gamer'],
                            autoStart: true,
                            loop: true,
                            cursorClassName: 'text-xlg bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400',
                            wrapperClassName: 'text-xlg bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400'
                        }}
                    />

                    <Button text="Me encontre" styles="mt-8 text-xl" />
                </div>
                <div className="w-[50%] hidden md:flex">

                </div>
            </div>

        </>
    );
}

export default HomeComponent;