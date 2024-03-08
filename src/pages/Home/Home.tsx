import { BodyText, Column, DisplayText, Header, Image, Main, PrimaryButton, Row, Title } from "./styles";
import linkedin from './../../assets/linkedin.png';
import github  from './../../assets/github.png';
import image  from './../../assets/Image.png';
import placeholder  from './../../assets/placeholder.png';


function Home() {
    return (
        <>
         <Header>
            <h1>Felipe Moreno Borges</h1>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/devcapu/">
                     <img src={linkedin} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/DevCapu">
                     <img src={github} alt="" />
                    </a>
                </li>
            </ul>
        </Header>
        <Main>
            <Row>
                <Column>
                    <DisplayText>Olá, eu sou o Felipe,</DisplayText>
                    <DisplayText className="large">Desenvolvedor<br></br>Mobile</DisplayText>
                    <DisplayText>Morando em São Paulo</DisplayText>
                    <PrimaryButton>CV</PrimaryButton>
                </Column>
            
                <Image className="square" src={image} alt=""/>
            </Row>
        
            <DisplayText className="large section">sobre.</DisplayText>
            <BodyText>
                Sou graduado em Ciência da Computação e atualmente estou cursando um MBA em Desenvolvimento Mobile. Sou apaixonado por tecnologia, vejo nela a possibilidade de melhorar a vida das pessoas além de uni-las. 
            </BodyText>
            <BodyText>
                Meu foco principal está voltado para o desenvolvimento mobile, utilizando linguagens como Java, Kotlin e Swift. Minha expertise abrange algoritmos, estruturas de dados, bancos de dados e redes. Uma das minhas realizações foi liderar a migração de projetos do iOS para o Android, criando aplicativos desde o início do processo. Nos meus projetos, aplico práticas como TDD, Construção de Segurança, CI/CD, bem como um design voltado para a experiência móvel.            </BodyText>
            <BodyText>
                Também atuei como instrutor e criador de conteúdo Android, com foco em Jetpack Compose e testes no ambiente Android, influenciando positivamente milhares de estudantes. Além disso, participei do desenvolvimento e manutenção de funcionalidades escaláveis em aplicativos educacionais que abrangem codificação, idiomas, música e programação voltados para crianças. Analisei e auxiliei alunos em projetos de UX e frontend. 
            </BodyText>


            <DisplayText className="large section">trabalho.</DisplayText>

            <Title>Zup - 2023 até agora</Title>
            <BodyText>
                Sou graduado em Ciência da Computação e atualmente estou cursando um MBA em Desenvolvimento Mobile. Sou apaixonado por tecnologia, vejo nela a possibilidade de melhorar a vida das pessoas além de uni-las. 
            </BodyText>
            <hr/>

            <Title>ThoughtWorks - 2021 até 2023</Title>
            <BodyText>
                Trabalhei em colaboração com clientes, construindo aplicativos Android utilizando Kotlin/XML. Liderei a migração do iOS para a plataforma Android, desenvolvendo aplicativos desde o início. Além disso, participei ativamente de um programa de desenvolvimento global de seis semanas, o que me permitiu aprimorar minhas habilidades em análise de requisitos, arquitetura de aplicativos, desenvolvimento orientado por testes e práticas de código limpo, além de me aprofundar no desenvolvimento web frontend.
            </BodyText>
            <hr/>

            <Title>Alura - 2019 até 2021</Title>
            <BodyText>
            O Grupo Alura oferece mais de 1.200 cursos. Além disso, engloba outras áreas de aprendizado como idiomas (inglês e espanhol), música e livros sobre tecnologia. Trabalhei como instrutor e criador de conteúdo Android, onde foquei na plataforma Jetpack Compose e testes em aplicativos Android e arquitetura Android impactando milhares de estudantes.
            </BodyText>

            <DisplayText className="large section">acadêmico.</DisplayText>
            <Row>
                <Column>
                    <Image  src={placeholder} alt=""/>
                    <Title>MBA, Desenvolvimento Mobile</Title>
                    <BodyText>FIAP</BodyText>
                </Column>

                <Column>
                    <Image src={placeholder} alt=""/>
                    <Title>Bacharelado, Ciência da Computação</Title>
                    <BodyText>Centro Universitário FMU | FIAM-FAAM</BodyText>
                </Column>
            </Row>
        </Main>
        </>
    )
}

export {Home};