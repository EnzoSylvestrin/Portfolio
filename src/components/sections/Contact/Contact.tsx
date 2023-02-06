import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdMessage } from 'react-icons/md';

import { LinearGradientIcon } from "../Header/HeaderStyled";

import ContainerCommom from "@/components/ContainerCommom";
import Heading from "@/components/Heading";
import { Input } from "@/components/Input/Input";
import Text from "@/components/Text";
import Button from "@/components/Button/Button";

const Contact = () => {
    return (
        <ContainerCommom id="Contato">
            <div>
                <Heading size="xl" gradient={true}>Contato</Heading>
                <div className="flex items-center justify-center w-full p-12 pb-2">
                    <div className="w-[90%] flex flex-col items-start pr-10 gap-3">
                        <Heading size="md" gradient={true}>Entre em contato comigo</Heading>
                        <Text size="md">Caso queira entrar em contato comigo me mande uma mensagem, eu vou adorar.</Text>
                        <div className="flex flex-col gap-4 items-center justify-start mt-8">
                            <div className="flex gap-2 items-center justify-start w-full">
                                <LinearGradientIcon
                                    id={"6"}
                                    Icon={MdEmail}
                                    size={28}
                                    w={"28px"}
                                    h={"28px"}
                                />
                                <Text size="lg">Enzospavani@gmail.com</Text>
                            </div>
                            <div className="flex gap-2 items-center justify-start w-full">
                                <LinearGradientIcon
                                    id={"6"}
                                    Icon={MdLocationOn}
                                    size={30}
                                    w={"30px"}
                                    h={"30px"}
                                />
                                <Text size="lg">Jundiaí, São Paulo - Brasil</Text>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-5 px-3">
                        <label htmlFor='Nome' className="flex flex-col gap-3 w-full">
                            <Text size="lg">Nome: </Text>
                            <Input.Root>
                                <Input.Icon>
                                    <div>
                                        <LinearGradientIcon
                                            id={"7"}
                                            Icon={FaUserAlt}
                                            size={18}
                                            w={"18px"}
                                            h={"18px"}
                                        />
                                    </div>
                                </Input.Icon>
                                <Input.Input type={"text"} id="Nome" placeholder="Digite seu nome..." />
                            </Input.Root>
                        </label>
                        <label htmlFor='Email' className="flex flex-col gap-3 w-full">
                            <Text size="lg">Email: </Text>
                            <Input.Root>
                                <Input.Icon>
                                    <div>
                                        <LinearGradientIcon
                                            id={"7"}
                                            Icon={MdEmail}
                                            size={20}
                                            w={"20px"}
                                            h={"20px"}
                                        />
                                    </div>
                                </Input.Icon>
                                <Input.Input type={"email"} id="Email" placeholder="Digite seu email..." />
                            </Input.Root>
                        </label>
                        <label htmlFor='Mensagem' className="flex flex-col gap-3 w-full">
                            <Text size="lg">Mensagem: </Text>
                            <Input.Root>
                                <Input.Icon>
                                    <div>
                                        <LinearGradientIcon
                                            id={"7"}
                                            Icon={MdMessage}
                                            size={18}
                                            w={"18px"}
                                            h={"18px"}
                                        />
                                    </div>
                                </Input.Icon>
                                <Input.Input type={"text"} id="Mensagem" placeholder="Digite seu email..." />
                            </Input.Root>
                        </label>
                        <Button text="Enviar" styles="text-xl mt-4" />
                    </div>
                </div>
            </div>
        </ContainerCommom >
    );
}

export default Contact;