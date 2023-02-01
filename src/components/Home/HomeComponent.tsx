import Button from "../Button/Button";

const HomeComponent = () => {
    return (
        <div className="flex items-center flex-col h-full justify-center pt-[12vh] min-h-[100vh]">
            <h1 className="text-xlg text-center dark:text-white">Seja bem vindo!<br />Eu sou o Enzo</h1>
            <Button text="Clique aqui" styles="mt-4" />
        </div>
    );
}

export default HomeComponent;