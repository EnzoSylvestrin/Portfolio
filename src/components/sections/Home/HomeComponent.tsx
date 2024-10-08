import LanguageComponent from '@/components/Language/LanguageComponent';
import { useLanguage } from '@/contexts/LanguageProvider';

import { motion } from 'framer';

import Typewriter from "typewriter-effect";

import Button from "../../Button/Button";
import ContainerColors from '../../ColorPicker/ContainerColors';
import Heading from '../../Heading';

import dynamic from 'next/dynamic';

const LottiePlayer = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), { ssr: false });

const HomeComponent = () => {

    const { language } = useLanguage();

    return (
        <>
            <div className="h-screen w-full flex items-center justify-center pt-[12vh] p-0 xs:p-4 sm:px-12 2xl:px-[6%] relative" id='home'>
                <motion.div
                    className="flex items-center mt-12 flex-col h-full w-full justify-center md:w-[50%] md:items-start"
                    initial={{ x: -350, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <LanguageComponent />
                    <Heading size='md' className="text-center md:text-start sm:text-xlg 2xl:mt-3">
                        <h1>
                            {
                                language === "English"
                                    ?
                                    "Welcome!"
                                    :
                                    "Seja bem vindo!"
                            }
                        </h1>
                    </Heading>
                    <Heading size='md' className="mb-6 text-center md:text-start sm:text-xlg">
                        <h2>
                            {
                                language === "English"
                                    ?
                                    "My name is Enzo"
                                    :
                                    "Meu nome é Enzo"
                            }
                        </h2>
                    </Heading>
                    <Typewriter
                        options={{
                            strings: [language === "English" ? 'Developer' : 'Desenvolvedor', 'FullStack', 'Pleno', 'Freenlancer', 'Gamer'],
                            autoStart: true,
                            loop: true,
                            cursorClassName: 'text-xlg bg-clip-text gradient-text',
                            wrapperClassName: 'text-xlg bg-clip-text gradient-text',
                        }}
                    />

                    <Button href="https://www.linkedin.com/in/enzo-sylvestrin-336b71221/" text={{ Portugues: "Encontre-me", English: "Find me" }} styles="mt-8 text-lg md:text-xl" />
                </motion.div>
                <motion.div
                    className="w-[50%] items-center justify-center hidden md:flex"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                >
                     <LottiePlayer
                        autoplay
                        loop
                        src="https://assets3.lottiefiles.com/packages/lf20_v9riyrep.json"
                        style={{ height: 420, width: 420 }}
                        className='2xl:!w-[600px] 2xl:!h-[600px]'
                    />
                </motion.div>
                <ContainerColors />
            </div>

        </>
    );
}

export default HomeComponent;