import Avatar from '../../assets/Avatar.png';
import Button from '../Button/Button';
import Heading from '../Heading';
import Text from '../Text';

const About = () => {
    return (
        <div className="flex justify-center flex-col items-center px-6 pb-12">
            <Heading size='xl' className="bg-clip-text gradient-text text-center mb-4">Sobre mim</Heading>
            <div className="flex items-center justify-center w-full flex-col lg:flex-row">
                <div className='flex w-full items-center justify-center lg:w-[45%]'>
                    <img src={Avatar.src} className="w-[340px] h-[340px] my-4 rounded-[50%] shadow-lg border-gradient lg:my-0" alt="Meu avatar" />
                </div>
                <div className='flex w-[90%] flex-col items-center lg:w-[55%]'>
                    <Heading size="lg" className='mb-4'>Quem sou eu?</Heading>
                    <Text className='px-4 text-center' size='lg'>
                        Eu sou de Jundiaí SP. estou atualmente estudando infomática na escola Prof. Luiz Rosa, e começei minha carreira em TI na Bitbyte infomática, empresa com a qual ainda trabalho, sou apaixonado por automação de sistemas e atuo também como freelancer. Para saber mais sobre minhas habilidades e sobre minha carreira clique e faça o download do meu curriculo.
                    </Text>
                    <Button text='Currículo' styles="text-xl mt-6" />
                </div>
            </div>
        </div>
    );
}

export default About;