import { Trophy, Users, Mail, ChevronDown, CalendarClock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FeedbackForm } from 'components/feedback-form';

export default function ChessPlayerPortfolio() {
    return (
        <div>
            {/* Cabeçalho */}
            <header className=" mr-4 hidden  md:flex sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
                <div className="container flex h-14 items-center justify-between  mx-auto ">
                    <div className="mr-4 hidden md:flex ">
                        <span className="ml-2 font-bold">Davi Alves</span>
                    </div>
                    <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
                        <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                            Sobre
                        </a>
                        <a href="#services" className="text-sm font-medium transition-colors hover:text-primary">
                            Serviços
                        </a>
                        <a href="#achievements" className="text-sm font-medium transition-colors hover:text-primary">
                            Conquistas
                        </a>
                        <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                            Contato
                        </a>
                    </nav>
                </div>
            </header>

            {/* Seção Hero */}
            <section className="py-24 px-6 text-center ">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Domine o Jogo dos Reis</h1>
                <p className="text-xl text-muted-foreground mb-8">
                    Aprenda xadrez com um Mestre Internacional experiente
                </p>
                <Button size="lg" className="rounded-full">
                    Comece Sua Jornada no Xadrez
                </Button>
                <div className="mt-12">
                    <ChevronDown className="h-8 w-8 mx-auto animate-bounce" />
                </div>
            </section>

            {/* Seção Sobre Mim */}
            <section id="about" className="py-16 bg-secondary ">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/3">
                            <img
                                src="/placeholder.svg?height=300&width=300"
                                alt="Professor de Xadrez"
                                className="rounded-full mx-auto"
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="w-full md:w-2/3">
                            <p className="text-lg mb-4">
                                Com mais de 15 anos de experiência como Mestre Internacional, dediquei minha vida ao
                                belo jogo do xadrez. Minha paixão é compartilhar os segredos e as belezas do xadrez com
                                jogadores de todos os níveis.
                            </p>
                            <p className="text-lg">
                                Seja você um iniciante buscando aprender o básico ou um jogador avançado querendo
                                aprimorar suas estratégias, estou aqui para guiá-lo em sua jornada no xadrez.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção Serviços */}
            <section id="services" className="py-16">
                <div className="container  mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Meus Serviços</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-card text-card-foreground rounded-lg p-6 shadow-lg">
                            <Users className="h-12 w-12 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Aulas Individuais</h3>
                            <p>Instruções personalizadas de acordo com seu nível e objetivos.</p>
                        </div>
                        <div className="bg-card text-card-foreground rounded-lg p-6 shadow-lg">
                            <CalendarClock className="h-12 w-12 mb-4 " />
                            <h3 className="text-xl font-semibold mb-2">Aulas 24h</h3>
                            <p>Sessões interativas focadas em estratégia, tática e análise de partidas.</p>
                        </div>
                        <div className="bg-card text-card-foreground rounded-lg p-6 shadow-lg">
                            <Trophy className="h-12 w-12 mb-4 " />
                            <h3 className="text-xl font-semibold mb-2">Preparação para Torneios</h3>
                            <p>Treinamento especializado para você se destacar em ambientes competitivos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção Conquistas */}
            <section id="achievements" className="py-16 bg-secondary">
                <div className="container  mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Conquistas</h2>
                    <ul className="list-disc list-inside text-lg space-y-2">
                        <li>Título de Mestre Internacional conquistado em 2010</li>
                        <li>Pentacampeão Nacional de Xadrez</li>
                        <li>Técnico da Seleção Júnior Nacional (2015-2020)</li>
                        <li>Autor do livro 'Pensamento Estratégico no Xadrez' (2018)</li>
                        <li>Treinei mais de 1000 alunos, muitos deles se tornaram mestres</li>
                    </ul>
                </div>
            </section>

            {/* Formulário de Contato
               <section id="contact" className="py-16">
                <div className="container max-w-2xl  mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Input placeholder="Nome" />
                            <Input placeholder="Sobrenome" />
                        </div>
                        <Input type="email" placeholder="E-mail" />
                        <Textarea placeholder="Sua Mensagem" />
                        <Button type="submit" className="w-full">
                            Enviar Mensagem
                        </Button>
                    </form>
                </div>
            </section>
             */}
         
            <div className="flex w-full pt-12 justify-center">
                <FeedbackForm />
            </div>

            {/* Rodapé */}
            <footer className="py-6 bg-secondary">
                <div className="container text-center mx-auto">
                    <p>&copy; 2024 Dadn Chess. Todos os direitos reservados.</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <Mail className="h-6 w-6" />
                        <span>dadn@mestrechess.com</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
