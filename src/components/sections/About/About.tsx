import Avatar from '../../../assets/Avatar.png';

import { motion } from 'framer';

import Button from '../../Button/Button';
import Heading from '../../Heading';
import Text from '../../Text';

import ContainerCommom from '@/components/ContainerCommom';
import { TitleSection } from '@/components/CommomComponents';

const About = () => {
    return (
        <ContainerCommom id="Sobre">
            <div>
                <TitleSection title="Sobre mim" />
                <div className="flex items-center justify-center w-full flex-col lg:flex-row">
                    <motion.div
                        className='flex w-full items-center justify-center lg:w-[45%]'
                        initial={{ x: 110, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <img src={Avatar.src} className="w-[270px] h-[270px] select-none my-4 rounded-[50%] shadow-lg border-gradient sm:w-[340px] sm:h-[340px] lg:my-0" alt="Meu avatar" />
                    </motion.div>
                    <motion.div
                        className='flex w-[90%] flex-col items-center lg:w-[55%]'
                        initial={{ y: 110, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Heading size="lg" className='mb-4'>Quem sou eu?</Heading>
                        <Text className='px-0 text-center sm:px-4' size='lg'>
                            Eu sou de Jundiaí SP. estou atualmente estudando infomática na escola Prof. Luiz Rosa, e começei minha carreira em TI na Bitbyte infomática, empresa com a qual ainda trabalho, sou apaixonado por automação de sistemas e atuo também como freelancer. Para saber mais sobre minhas habilidades e sobre minha carreira clique e faça o download do meu curriculo.
                        </Text>
                        <Button href={'/Curriculo-Enzo.pdf'} text='Currículo' styles="text-xl mt-6" />
                    </motion.div>
                </div>
            </div>
        </ContainerCommom>
    );
}

export default About;