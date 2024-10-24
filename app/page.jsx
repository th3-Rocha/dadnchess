'use client';

import { useState, useEffect } from 'react';
import {
    Trophy,
    Users,
    Mail,
    ChevronDown,
    CalendarClock,
    Menu,
    X,
    ChevronUp,
    Zap,
    Target,
    Clock,
    Award,
    Sun,
    Moon
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const texts = {
    title: 'Domine o Jogo dos Reis',
    subtitle: 'Aprenda xadrez com um Mestre Nacional experiente',
    cta: 'Comece Sua Jornada no Xadrez',
    about: {
        title: 'Quem Sou Eu',
        content: [
            'Sou Mestre Nacional com mais de 4 anos de experiência, e o xadrez é mais do que um jogo para mim, é uma paixão. Minha missão é revelar a beleza e os segredos do xadrez, ajudando jogadores de todos os níveis a desenvolverem suas habilidades.',
            'Seja você um iniciante que deseja dominar os fundamentos ou um jogador avançado em busca de novas estratégias, estou aqui para guiá-lo em sua jornada pelo xadrez.'
        ]
    },
    services: {
        title: 'Serviços Oferecidos',
        items: [
            {
                title: 'Aulas Individuais',
                description:
                    'Aulas personalizadas que se adaptam ao seu nível e às suas metas, garantindo evolução contínua.'
            },
            {
                title: 'Disponibilidade Total',
                description:
                    'Precisa de ajuda com uma jogada ou dúvida? Estou à disposição 24 horas por dia para te apoiar em sua jornada no xadrez.'
            },
            {
                title: 'Preparação para Torneios',
                description:
                    'Treinamento especializado para destacar-se em torneios competitivos, com análises de adversários e acompanhamento durante as partidas.'
            }
        ]
    },
    achievements: {
        title: 'Minhas Conquistas',
        items: [
            'Mestre Nacional desde 2020',
            '1º e 2º Lugar nos Jogos Universitários Absoluto 2022/2024',
            'Campeão Estadual Absoluto RN 2021',
            'Campeão Norte-Nordeste Blitz 2022',
            '3º Lugar no Campeonato Brasileiro Absoluto Rápido 2023',
            '1º Lugar nos Jogos Escolares da Juventude do RN 2019'
        ]
    },
    lichessStats: {
        title: 'Ratings no Lichess'
    },
    testimonials: {
        title: 'O que meus alunos dizem',
        items: [
            {
                content: 'Graças às aulas, melhorei meu rating em 300 pontos!',
                author: 'Alex K.'
            },
            {
                content: 'As aulas online são convenientes e tão eficazes quanto as presenciais.',
                author: 'Sarah M.'
            }
        ]
    },
    faq: {
        title: 'Perguntas Frequentes',
        items: [
            {
                question: 'Para que nível de jogadores você dá aulas?',
                answer: 'Ensino xadrez para todos os níveis, desde iniciantes até jogadores avançados que querem melhorar seu jogo.'
            },
            {
                question: 'Quanto tempo duram as suas aulas?',
                answer: 'Minhas aulas padrão têm duração de 60 minutos, mas também ofereço sessões de 30 ou 90 minutos para se adequarem às suas necessidades.'
            },
            {
                question: 'Você oferece aulas online?',
                answer: 'Sim, ofereço aulas tanto presenciais quanto online, usando ferramentas de videoconferência para maior flexibilidade.'
            }
        ]
    },
    footer: {
        copyright: '© 2024 Dadn-Chess. Todos os direitos reservados.',
        email: 'nmdavialves@gmail.com'
    }
};

export default function ChessPlayerPortfolio() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [faqOpen, setFaqOpen] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const achievements = texts.achievements.items.map((title) => ({ title }));

    const lichessStats = [
        { icon: Zap, label: 'Blitz Rating', value: '2450' },
        { icon: Target, label: 'Rapid Rating', value: '2380' },
        { icon: Clock, label: 'Classical Rating', value: '2520' },
        { icon: Award, label: 'Tournaments Won', value: '37' }
    ];

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white'}`}>
            <header
                className={`sticky top-0 z-50 w-full border-b ${
                    darkMode ? 'border-gray-700 bg-gray-800/80' : 'border-gray-200 bg-white/80'
                } backdrop-blur-sm`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <span className="text-lg font-bold">Davi Alves</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-6">
                            <a
                                href="#about"
                                className={`text-sm font-medium ${
                                    darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
                                }`}
                            >
                                Sobre
                            </a>
                            <a
                                href="#services"
                                className={`text-sm font-medium ${
                                    darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
                                }`}
                            >
                                Serviços
                            </a>
                            <a
                                href="#achievements"
                                className={`text-sm font-medium ${
                                    darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
                                }`}
                            >
                                Conquistas
                            </a>
                            <a
                                href="#lichess-stats"
                                className={`text-sm font-medium ${
                                    darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
                                }`}
                            >
                                Lichess Stats
                            </a>
                            <a
                                href="#faqs"
                                className={`text-sm font-medium ${
                                    darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'
                                }`}
                            >
                                Faqs
                            </a>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </button>
                            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <div className="md:hidden">
                        <div className={`space-y-1 px-2 pb-3 pt-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <a
                                href="#about"
                                className={`block px-3 py-2 text-base font-medium ${
                                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                                }`}
                            >
                                Sobre
                            </a>
                            <a
                                href="#services"
                                className={`block px-3 py-2 text-base font-medium ${
                                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                                }`}
                            >
                                Serviços
                            </a>
                            <a
                                href="#achievements"
                                className={`block px-3 py-2 text-base font-medium ${
                                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                                }`}
                            >
                                Conquistas
                            </a>
                            <a
                                href="#lichess-stats"
                                className={`block px-3 py-2 text-base font-medium ${
                                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                                }`}
                            >
                                Lichess Stats
                            </a>
                            <a
                                href="#Faqs"
                                className={`block px-3 py-2 text-base font-medium ${
                                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                                }`}
                            >
                                Faqs
                            </a>
                        </div>
                    </div>
                )}
            </header>

            <main>
                <section className="py-12 md:py-24 text-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{texts.title}</h1>
                        <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            {texts.subtitle}
                        </p>
                        <Button size="lg" className={`rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} `}  >
                            {texts.cta}
                        </Button>
                        <div className="mt-12">
                            <ChevronDown className="h-8 w-8 mx-auto animate-bounce" />
                        </div>
                    </div>
                </section>

                <section id="about" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">{texts.about.title}</h2>
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/3">
                                <img
                                    src="/images/ProfilePic.webp?height=300&width=300"
                                    alt="Professor de Xadrez"
                                    className="rounded-full w-64 h-64 mx-auto"
                                />
                            </div>
                            <div className="w-full md:w-2/3">
                                {texts.about.content.map((paragraph, index) => (
                                    <p key={index} className="text-lg mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">{texts.services.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {texts.services.items.map((service, index) => (
                                <div
                                    key={index}
                                    className={`rounded-lg shadow-md p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                                >
                                    {index === 0 && <Users className="h-12 w-12 mb-4" />}
                                    {index === 1 && <CalendarClock className="h-12 w-12 mb-4" />}
                                    {index === 2 && <Trophy className="h-12 w-12 mb-4" />}
                                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="achievements" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">{texts.achievements.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className={`rounded-lg shadow-md p-6 flex items-start ${
                                        darkMode ? 'bg-gray-700' : 'bg-white'
                                    }`}
                                >
                                    <Trophy className="h-8 w-8 mr-4 flex-shrink-0 text-yellow-500" />
                                    <p className="text-lg">{achievement.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="lichess-stats" className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">{texts.lichessStats.title}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {lichessStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className={`rounded-lg shadow-md p-6 flex flex-col items-center ${
                                        darkMode ? 'bg-gray-800' : 'bg-white'
                                    }`}
                                >
                                    <stat.icon
                                        className={`h-12 w-12 mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                                    />
                                    <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                                    <p className="text-3xl font-bold">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="testimonials" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">{texts.testimonials.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {texts.testimonials.items.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`rounded-lg shadow-md p-6 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
                                >
                                    <p className="mb-4">&quot;{testimonial.content}&quot;</p>
                                    <p className="font-bold">- {testimonial.author}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="faqs" className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">{texts.faq.title}</h2>
                        <div className="space-y-4">
                            {texts.faq.items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} pb-4`}
                                >
                                    <button
                                        className="flex justify-between items-center w-full text-left font-medium"
                                        onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                                    >
                                        <span>{item.question}</span>
                                        {faqOpen === index ? (
                                            <ChevronUp className="h-5 w-5" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5" />
                                        )}
                                    </button>
                                    {faqOpen === index && (
                                        <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {item.answer}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="container mx-auto px-4 text-center">
                    <p>{texts.footer.copyright}</p>
                    <div className="flex justify-center items-center gap-2 mt-4">
                        <Mail className="h-5 w-5" />
                        <span>{texts.footer.email}</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
