import { useRef } from "react";

import { motion } from 'framer';

import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from 'react-icons/md';

import ContainerCommom from "@/components/ContainerCommom";
import Heading from "@/components/Heading";
import { Input } from "@/components/Input/Input";
import Text from "@/components/Text";
import Button from "@/components/Button/Button";
import { LinearGradientIcon, TitleSection } from "@/components/CommomComponents";

const Contact = () => {

    const Form = useRef<HTMLFormElement>(null)

    const HandleSubmit = () => {
        Form.current?.requestSubmit();
    }

    return (
        <ContainerCommom id="Contato">
            <div>
                <TitleSection title="Contato" />
                <div className="flex items-center flex-col justify-center w-full p-4 pb-2 md:flex-row lg:p-6">
                    <motion.div
                        className="w-full flex flex-col my-6 items-center gap-3 md:items-start md:my-0 md:pr-6"
                        initial={{ y: 200, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Heading className="text-center md:text-start" size="md" gradient={true}>Entre em contato comigo</Heading>
                        <Text className="text-center px-4 sm:px-12 md:text-start md:px-0" size="md">Caso queira entrar em contato comigo me mande uma mensagem, eu vou adorar 💖.</Text>
                        <div className="flex flex-col gap-4 items-center justify-start mt-8">
                            <div className="flex gap-2 items-center justify-start w-full">
                                <LinearGradientIcon
                                    id={"6"}
                                    Icon={MdEmail}
                                    size={28}
                                />
                                <Text className="text-md xs:text-lg" size="md">Enzospavani@gmail.com</Text>
                            </div>
                            <div className="flex gap-2 items-center justify-start w-full">
                                <LinearGradientIcon
                                    id={"6"}
                                    Icon={MdLocationOn}
                                    size={30}
                                />
                                <Text className="text-md xs:text-lg" size="md">Jundiaí, São Paulo - Brasil</Text>
                            </div>
                        </div>
                    </motion.div>
                    <motion.form
                        action="https://formsubmit.co/fecfce57d3e403900dad1688f2d9c317"
                        ref={Form}
                        method="POST"
                        className="w-full flex flex-col items-center justify-center gap-5 px-2 xs:px-6"
                        initial={{ scale: 0.90, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <input type="hidden" name="_next" value="https://portfolio-enzosylvestrin.vercel.app" />
                        <input type="hidden" name="_template" value="box" />
                        <input type="hidden" name="_autoresponse" value="Recebi sua mensagem, muito obrigado por entrar em contato! Responderei o mais rápido possível..." />
                        <label htmlFor='Nome' className="flex flex-col gap-3 w-full items-center md:items-start">
                            <Text size="lg">Nome: </Text>
                            <Input.Root>
                                <Input.Icon>
                                    <div>
                                        <LinearGradientIcon
                                            id={"7"}
                                            Icon={FaUserAlt}
                                            size={18}
                                        />
                                    </div>
                                </Input.Icon>
                                <Input.Input type={"text"} name="Nome" id="Nome" placeholder="Digite seu nome..." required />
                            </Input.Root>
                        </label>
                        <label htmlFor='Email' className="flex flex-col gap-3 w-full items-center md:items-start">
                            <Text size="lg">Email: </Text>
                            <Input.Root>
                                <Input.Icon>
                                    <div>
                                        <LinearGradientIcon
                                            id={"7"}
                                            Icon={MdEmail}
                                            size={20}
                                        />
                                    </div>
                                </Input.Icon>
                                <Input.Input type={"email"} name="Email" id="Email" placeholder="Digite seu email..." required />
                            </Input.Root>
                        </label>
                        <label htmlFor='Mensagem' className="flex flex-col gap-3 w-full items-center md:items-start">
                            <Text size="lg">Mensagem: </Text>
                            <Input.Root textArea={true}>
                                <Input.TextArea id="Mensagem" name="Mensagem" placeholder="Escreva a mensagem." required />
                            </Input.Root>
                        </label>
                        <Button text="Enviar" styles="text-xl mt-4" onClick={HandleSubmit} />
                    </motion.form>
                </div>
            </div>
        </ContainerCommom >
    );
}

export default Contact;