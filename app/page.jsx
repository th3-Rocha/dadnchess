'use client';

import styled from 'styled-components';
import { Trophy, Users, Mail, ChevronDown, CalendarClock, Menu, X, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
`;

const Header = styled.header`
    position: sticky;
    top: 0;
    z-index: 50;
    width: 100%;
    border-bottom: 1px solid #e5e7eb;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);

    @media (max-width: 768px) {
        display: none;
    }
`;

const HeaderContent = styled.div`
    display: flex;
    height: 3.5rem;
    align-items: center;
    justify-content: space-between;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

const NavLink = styled.a`
    font-size: 0.875rem;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
        color: #3b82f6;
    }
`;

const HeroSection = styled.section`
    padding: 6rem 1.5rem;
    text-align: center;
`;

const HeroTitle = styled.h1`
    font-size: 2.25rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
        font-size: 3rem;
    }
`;

const HeroSubtitle = styled.p`
    font-size: 1.25rem;
    color: #6b7280;
    margin-bottom: 2rem;
`;

const AboutSection = styled.section`
    padding: 4rem 0;
    background-color: #f3f4f6;
`;

const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const AboutImage = styled.img`
    border-radius: 50%;
    width: 300px;
    height: 300px;
`;

const AboutText = styled.div`
    flex: 2;
`;

const ServicesSection = styled.section`
    padding: 4rem 0;
`;

const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const ServiceCard = styled.div`
    background-color: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const TestimonialsSection = styled.section`
    padding: 5rem 0;
    background-color: #f3f4f6;
`;

const TestimonialsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const TestimonialCard = styled.div`
    background-color: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const FAQSection = styled.section`
    padding: 5rem 0;
`;

const FAQItem = styled.div`
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 1rem;
`;

const FAQButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: left;
    font-weight: 500;
`;

const Footer = styled.footer`
    padding: 1.5rem 0;
    background-color: #f3f4f6;
    text-align: center;
`;

export default function ChessPlayerPortfolio() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [faqOpen, setFaqOpen] = useState(null);

    const faqItems = [
        {
            question: 'What level of chess players do you teach?',
            answer: 'I teach chess to players of all levels, from complete beginners to advanced players looking to improve their game.'
        },
        {
            question: 'How long are your chess lessons?',
            answer: 'My standard chess lessons are 60 minutes long, but I also offer 30-minute and 90-minute sessions to suit different needs and schedules.'
        },
        {
            question: 'Do you offer online lessons?',
            answer: 'Yes, I offer both in-person and online chess lessons using video conferencing tools for maximum flexibility.'
        }
    ];

    return (
        <div>
            <Header>
                <Container>
                    <HeaderContent>
                        <div>
                            <span style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>Davi Alves</span>
                        </div>
                        <Nav>
                            <NavLink href="#about">Sobre</NavLink>
                            <NavLink href="#services">Serviços</NavLink>
                            <NavLink href="#achievements">Conquistas</NavLink>
                            <NavLink href="#contact">Contato</NavLink>
                        </Nav>
                    </HeaderContent>
                </Container>
            </Header>

            <HeroSection>
                <HeroTitle>Domine o Jogo dos Reis</HeroTitle>
                <HeroSubtitle>Aprenda xadrez com um Mestre Nacional experiente</HeroSubtitle>
                <Button size="lg" style={{ borderRadius: '9999px' }}>
                    Comece Sua Jornada no Xadrez
                </Button>
                <div style={{ marginTop: '3rem' }}>
                    <ChevronDown
                        style={{ height: '2rem', width: '2rem', margin: '0 auto', animation: 'bounce 1s infinite' }}
                    />
                </div>
            </HeroSection>

            <AboutSection id="about">
                <Container>
                    <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
                        Sobre Mim
                    </h2>
                    <AboutContent>
                        <div style={{ flex: 1 }}>
                            <AboutImage src="/images/ProfilePic.webp?height=300&width=300" alt="Professor de Xadrez" />
                        </div>
                        <AboutText>
                            <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
                                Com mais de 4 anos de experiência como Mestre Nacional, dediquei minha vida ao belo jogo
                                do xadrez. Minha paixão é compartilhar os segredos e as belezas do xadrez com jogadores
                                de todos os níveis.
                            </p>
                            <p style={{ fontSize: '1.125rem' }}>
                                Seja você um iniciante buscando aprender o básico ou um jogador avançado querendo
                                aprimorar suas estratégias, estou aqui para guiá-lo em sua jornada no xadrez.
                            </p>
                        </AboutText>
                    </AboutContent>
                </Container>
            </AboutSection>

            <ServicesSection id="services">
                <Container>
                    <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
                        Meus Serviços
                    </h2>
                    <ServicesGrid>
                        <ServiceCard>
                            <Users style={{ height: '3rem', width: '3rem', marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                                Aulas Individuais
                            </h3>
                            <p>Instruções personalizadas de acordo com seu nível e objetivos.</p>
                        </ServiceCard>
                        <ServiceCard>
                            <CalendarClock style={{ height: '3rem', width: '3rem', marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                                Disponibilade 24h
                            </h3>
                            <p>
                                Estou sempre à disposição para responder suas perguntas sobre xadrez. Não hesite em
                                entrar em contato a qualquer momento!
                            </p>
                        </ServiceCard>
                        <ServiceCard>
                            <Trophy style={{ height: '3rem', width: '3rem', marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                                Preparação para Torneios
                            </h3>
                            <p>
                                Treinamento especializado para você se destacar em ambientes competitivos. Vou
                                acompanhá-lo durante os torneios e prepará-lo, além de analisar o histórico dos
                                adversários.
                            </p>
                        </ServiceCard>
                    </ServicesGrid>
                </Container>
            </ServicesSection>

            <TestimonialsSection id="testimonials">
                <Container>
                    <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
                        What My Students Say
                    </h2>
                    <TestimonialsGrid>
                        <TestimonialCard>
                            <p style={{ marginBottom: '1rem' }}>
                                &quot;Thanks to these lessons, I've improved my rating by 300 points!&quot;
                            </p>
                            <p style={{ fontWeight: 'bold' }}>- Alex K.</p>
                        </TestimonialCard>
                        <TestimonialCard>
                            <p style={{ marginBottom: '1rem' }}>
                                &quot;The online lessons are convenient and just as effective as in-person
                                training.&quot;
                            </p>
                            <p style={{ fontWeight: 'bold' }}>- Sarah M.</p>
                        </TestimonialCard>
                    </TestimonialsGrid>
                </Container>
            </TestimonialsSection>

            <FAQSection>
                <Container>
                    <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {faqItems.map((item, index) => (
                            <FAQItem key={index}>
                                <FAQButton onClick={() => setFaqOpen(faqOpen === index ? null : index)}>
                                    <span>{item.question}</span>
                                    {faqOpen === index ? <ChevronUp /> : <ChevronDown />}
                                </FAQButton>
                                {faqOpen === index && (
                                    <p style={{ marginTop: '0.5rem', color: '#4b5563' }}>{item.answer}</p>
                                )}
                            </FAQItem>
                        ))}
                    </div>
                </Container>
            </FAQSection>

            <Footer>
                <Container>
                    <p>&copy; 2024 Dadn-Chess. Todos os direitos reservados.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                        <Mail style={{ height: '1.5rem', width: '1.5rem' }} />
                        <span>nmdavialves@gmail.com</span>
                    </div>
                </Container>
            </Footer>
        </div>
    );
}
