import Avatar from '../../../assets/Avatar.png';

import { motion } from 'framer';

import Button from '../../Button/Button';
import Heading from '../../Heading';
import Text from '../../Text';

import ContainerCommom from '@/components/ContainerCommom';
import { TitleSection } from '@/components/CommomComponents';

import { useLanguage } from '@/contexts/LanguageProvider';

const About = () => {

    const { language } = useLanguage();

    return (
        <ContainerCommom id="Sobre">
            <div>
                <TitleSection
                    title={{
                        English: "About me",
                        Portugues: "Sobre mim"
                    }}
                    className='mb-2'
                />
                <div className="flex items-center justify-center w-full flex-col lg:flex-row">
                    <motion.div
                        className='flex w-full items-center justify-center lg:w-[45%]'
                        initial={{ x: 110, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <img src={Avatar.src} className="w-[270px] h-[270px] select-none my-4 rounded-[50%] shadow-lg border-gradient sm:w-[340px] sm:h-[340px] lg:my-0" alt="Meu avatar" />
                    </motion.div>
                    <motion.div
                        className='flex w-[90%] flex-col items-center lg:w-[55%]'
                        initial={{ y: 110, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Heading
                            size="lg"
                            className='mb-4'
                            text={{
                                English: 'Who am I?',
                                Portugues: 'Quem sou eu?'
                            }}
                        />
                        <Text
                            className='px-0 text-center sm:px-4'
                            size='lg'
                            text={{
                                English: `I'm from Jundiaí, SP. Currently, I'm a computer science student at UNIP. 
                                I have experience in the area, I am passionate about automation system and I also work 
                                as a freelancer. To learn more about my career and skills, click and download my resume.`,
                                Portugues: `Eu sou de Jundiaí SP. atualmente sou estudante de ciência da computação
                                na UNIP, Tenho experiência na área, sou apaixonado por automação de sistemas e atuo também
                                como freelancer. Para saber mais sobre minhas habilidades e sobre minha carreira
                                clique e faça o download do meu curriculo.`
                            }}
                        />
                        <Button href={language === 'Português' ? '/Curriculo-Enzo.pdf' : '/enzo_resume.pdf'} text={{ Portugues: "Currículo", English: "Resume" }} styles="text-xl mt-6" />
                    </motion.div>
                </div>
            </div>
        </ContainerCommom>
    );
}

export default About;