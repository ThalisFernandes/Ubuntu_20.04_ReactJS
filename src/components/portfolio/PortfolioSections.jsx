import React, { useState } from 'react';
import portfolioStyle from './portfolio.module.css';

export default function PortfolioSections() {
    const [activeSection, setActiveSection] = useState('about');

    const renderAboutSection = () => (
        <div className={portfolioStyle.sectionContent}>
            <h2 className={portfolioStyle.sectionTitle}>Sobre Mim</h2>
            <div className={portfolioStyle.aboutContent}>
                <div className={portfolioStyle.profileSection}>
                    <div className={portfolioStyle.profileImage}>
                        {/* placeholder para foto de perfil */}
                        <div className={portfolioStyle.avatarPlaceholder}>TF</div>
                    </div>
                    <div className={portfolioStyle.profileInfo}>
                        <h3>Thalis Fernandes</h3>
                        <p className={portfolioStyle.role}>Desenvolvedor Full Stack</p>
                        <p className={portfolioStyle.location}>📍 Recife, PE - Brasil</p>
                    </div>
                </div>
                
                <div className={portfolioStyle.bioSection}>
                    <h4>Minha Jornada</h4>
                    <p>
                        Desenvolvedor apaixonado por tecnologia com uma trajetória única. 
                        Comecei minha jornada aos 8 anos jogando King of Fighter's 97, 
                        o que despertou meu interesse pelo mundo digital.
                    </p>
                    <p>
                        Aos 17 anos, tive meu primeiro contato com HTML e CSS, criando sites 
                        para o jogo Lineage 2. Foi quando meu primo me apresentou ao JavaScript 
                        e a "brincadeira começou a ficar séria".
                    </p>
                    <p>
                        Após diversas experiências profissionais, aos 24 anos entrei na NTDSOFT, 
                        onde aprendi de fato o que é programação, trabalhando com React.js, 
                        Node.js, MySQL e PHP.
                    </p>
                    <p>
                        Aos 26 anos, ingressei na Simbiose Ventures, onde ganhei uma nova família 
                        e aprendi Python. Participei de projetos importantes como FASTCRUD e TATO, 
                        desenvolvendo soluções inovadoras.
                    </p>
                </div>
            </div>
        </div>
    );

    const renderProjectsSection = () => (
        <div className={portfolioStyle.sectionContent}>
            <h2 className={portfolioStyle.sectionTitle}>Projetos</h2>
            <div className={portfolioStyle.projectsGrid}>
                <div className={portfolioStyle.projectCard}>
                    <div className={portfolioStyle.projectHeader}>
                        <h3>Portfolio Ubuntu 20.04</h3>
                        <span className={portfolioStyle.projectTech}>React.js</span>
                    </div>
                    <p className={portfolioStyle.projectDescription}>
                        Interface clone do Ubuntu 20.04 com modais interativos, 
                        terminal funcional e navegação intuitiva.
                    </p>
                    <div className={portfolioStyle.projectTags}>
                        <span>React</span>
                        <span>CSS Modules</span>
                        <span>JavaScript</span>
                    </div>
                </div>

                <div className={portfolioStyle.projectCard}>
                    <div className={portfolioStyle.projectHeader}>
                        <h3>FASTCRUD</h3>
                        <span className={portfolioStyle.projectTech}>Low Code/No Code</span>
                    </div>
                    <p className={portfolioStyle.projectDescription}>
                        Plataforma low code/no code desenvolvida na Simbiose Ventures 
                        para criação rápida de aplicações.
                    </p>
                    <div className={portfolioStyle.projectTags}>
                        <span>Python</span>
                        <span>React</span>
                        <span>Node.js</span>
                    </div>
                </div>

                <div className={portfolioStyle.projectCard}>
                    <div className={portfolioStyle.projectHeader}>
                        <h3>TATO</h3>
                        <span className={portfolioStyle.projectTech}>Sistema de Gestão</span>
                    </div>
                    <p className={portfolioStyle.projectDescription}>
                        Sistema de gestão para fisioterapeutas utilizando 
                        a plataforma FASTCRUD como base.
                    </p>
                    <div className={portfolioStyle.projectTags}>
                        <span>FASTCRUD</span>
                        <span>Python</span>
                        <span>React</span>
                    </div>
                </div>

                <div className={portfolioStyle.projectCard}>
                    <div className={portfolioStyle.projectHeader}>
                        <h3>Sistema de Gerenciamento</h3>
                        <span className={portfolioStyle.projectTech}>Full Stack</span>
                    </div>
                    <p className={portfolioStyle.projectDescription}>
                        API RESTful com autenticação JWT e dashboard 
                        administrativo completo.
                    </p>
                    <div className={portfolioStyle.projectTags}>
                        <span>Node.js</span>
                        <span>React</span>
                        <span>JWT</span>
                    </div>
                </div>

                <div className={portfolioStyle.projectCard}>
                    <div className={portfolioStyle.projectHeader}>
                        <h3>Criação de agentes (360 tecnologia)</h3>
                        <span className={portfolioStyle.projectTech}>AI/ML</span>
                    </div>
                    <p className={portfolioStyle.projectDescription}>
                        Desenvolvimento de agentes inteligentes utilizando 
                        tecnologias avançadas de IA e integração com OpenAI.
                    </p>
                    <div className={portfolioStyle.projectTags}>
                        <span>Python</span>
                        <span>Langchain</span>
                        <span>Langgraph</span>
                        <span>OpenAI</span>
                    </div>
                </div>

                <div className={portfolioStyle.projectCard}>
                    <div className={portfolioStyle.projectHeader}>
                        <h3>Despertar das kinesis (RPG javascript)</h3>
                        <span className={portfolioStyle.projectTech}>Game Dev</span>
                    </div>
                    <p className={portfolioStyle.projectDescription}>
                        Jogo RPG desenvolvido em JavaScript com HTML5 Canvas. 
                        <a href="https://rpg-javascript.vercel.app/" target="_blank" rel="noopener noreferrer" 
                           style={{color: '#e95420', textDecoration: 'underline'}}>Acesse aqui</a>
                    </p>
                    <div className={portfolioStyle.projectTags}>
                        <span>JavaScript</span>
                        <span>HTML5</span>
                        <span>Canvas</span>
                    </div>
                </div>

                <div className={portfolioStyle.projectCard}>
                    <div className={portfolioStyle.projectHeader}>
                        <h3>Ecclessia</h3>
                        <span className={portfolioStyle.projectTech}>Legacy Migration</span>
                    </div>
                    <p className={portfolioStyle.projectDescription}>
                        Melhoria de sistema legado em Java para Node.js, 
                        modernizando a arquitetura e tecnologias utilizadas.
                    </p>
                    <div className={portfolioStyle.projectTags}>
                        <span>NodeJS</span>
                        <span>PHP</span>
                        <span>JavaScript</span>
                        <span>MySQL</span>
                    </div>
                </div>

                <div className={portfolioStyle.projectCard}>
                    <div className={portfolioStyle.projectHeader}>
                        <h3>Shooter com Javascript</h3>
                        <span className={portfolioStyle.projectTech}>Game Dev</span>
                    </div>
                    <p className={portfolioStyle.projectDescription}>
                        Jogo de tiro desenvolvido em JavaScript puro com HTML Canvas. 
                        <a href="https://shooter-two.vercel.app/" target="_blank" rel="noopener noreferrer" 
                           style={{color: '#e95420', textDecoration: 'underline'}}>Acesse aqui</a>
                    </p>
                    <div className={portfolioStyle.projectTags}>
                        <span>JavaScript</span>
                        <span>HTML</span>
                        <span>Canvas</span>
                    </div>
                </div>

                <div className={portfolioStyle.projectCard}>
                    <div className={portfolioStyle.projectHeader}>
                        <h3>MAVI (Projeto da MV)</h3>
                        <span className={portfolioStyle.projectTech}>AI Healthcare</span>
                    </div>
                    <p className={portfolioStyle.projectDescription}>
                        Agente de inteligência artificial para auxiliar médicos 
                        em análises de pacientes e histórico médico completo.
                    </p>
                    <div className={portfolioStyle.projectTags}>
                        <span>AI/ML</span>
                        <span>Healthcare</span>
                        <span>Data Analysis</span>
                    </div>
                </div>

                <div className={portfolioStyle.projectCard}>
                    <div className={portfolioStyle.projectHeader}>
                        <h3>Lempe (Sistema de calibração técnica)</h3>
                        <span className={portfolioStyle.projectTech}>Full Stack</span>
                    </div>
                    <p className={portfolioStyle.projectDescription}>
                        Sistema completo de calibração técnica com interface 
                        moderna e autenticação segura.
                    </p>
                    <div className={portfolioStyle.projectTags}>
                        <span>ReactJS</span>
                        <span>Material UI</span>
                        <span>Django</span>
                        <span>AUTH0</span>
                        <span>JWT</span>
                        <span>MySQL</span>
                    </div>
                </div>

                <div className={portfolioStyle.projectCard}>
                    <div className={portfolioStyle.projectHeader}>
                        <h3>InfoScope (Extensão Chrome)</h3>
                        <span className={portfolioStyle.projectTech}>Security Tool</span>
                    </div>
                    <p className={portfolioStyle.projectDescription}>
                        Extensão para análise de metadata de sites e segurança da informação. 
                        <a href="https://github.com/ThalisFernandes/InfoScope" target="_blank" rel="noopener noreferrer" 
                           style={{color: '#e95420', textDecoration: 'underline'}}>Acesse aqui</a>
                    </p>
                    <div className={portfolioStyle.projectTags}>
                        <span>JavaScript</span>
                        <span>HTML</span>
                        <span>Security Analysis</span>
                        <span>Chrome Extension</span>
                    </div>
                </div>

                <div className={portfolioStyle.projectCard}>
                    <div className={portfolioStyle.projectHeader}>
                        <h3>Youpy</h3>
                        <span className={portfolioStyle.projectTech}>Desktop App</span>
                    </div>
                    <p className={portfolioStyle.projectDescription}>
                        Aplicação para download de áudio do YouTube e conversão de vídeos para MP3. 
                        <a href="https://github.com/ThalisFernandes/youpy" target="_blank" rel="noopener noreferrer" 
                           style={{color: '#e95420', textDecoration: 'underline'}}>Acesse aqui</a>
                    </p>
                    <div className={portfolioStyle.projectTags}>
                        <span>Python</span>
                        <span>Audio Processing</span>
                        <span>YouTube API</span>
                    </div>
                </div>

                <div className={portfolioStyle.projectCard}>
                    <div className={portfolioStyle.projectHeader}>
                        <h3>Derick</h3>
                        <span className={portfolioStyle.projectTech}>Automation</span>
                    </div>
                    <p className={portfolioStyle.projectDescription}>
                        Automação para busca de vagas no Indeed usando Selenium. 
                        <a href="https://github.com/ThalisFernandes/Derick-Selenium-buscar-vagas-" target="_blank" rel="noopener noreferrer" 
                           style={{color: '#e95420', textDecoration: 'underline'}}>Acesse aqui</a>
                    </p>
                    <div className={portfolioStyle.projectTags}>
                        <span>Python</span>
                        <span>Selenium</span>
                        <span>Web Scraping</span>
                        <span>Automation</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContactSection = () => (
        <div className={portfolioStyle.sectionContent}>
            <h2 className={portfolioStyle.sectionTitle}>Contato</h2>
            <div className={portfolioStyle.contactContent}>
                <div className={portfolioStyle.contactInfo}>
                    <div className={portfolioStyle.contactItem}>
                        <span className={portfolioStyle.contactIcon}>📧</span>
                        <div>
                            <strong>Email</strong>
                            <p>thalis.fernandes@email.com</p>
                        </div>
                    </div>
                    
                    <div className={portfolioStyle.contactItem}>
                        <span className={portfolioStyle.contactIcon}>💼</span>
                        <div>
                            <strong>LinkedIn</strong>
                            <a href="https://linkedin.com/in/thalis-fernandes" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                linkedin.com/in/thalis-fernandes
                            </a>
                        </div>
                    </div>
                    
                    <div className={portfolioStyle.contactItem}>
                        <span className={portfolioStyle.contactIcon}>🐙</span>
                        <div>
                            <strong>GitHub</strong>
                            <a href="https://github.com/ThalisFernandes" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                github.com/ThalisFernandes
                            </a>
                        </div>
                    </div>
                    
                    <div className={portfolioStyle.contactItem}>
                        <span className={portfolioStyle.contactIcon}>📱</span>
                        <div>
                            <strong>Telefone</strong>
                            <p>+55 (81) 9xxxx-xxxx</p>
                        </div>
                    </div>
                    
                    <div className={portfolioStyle.contactItem}>
                        <span className={portfolioStyle.contactIcon}>📍</span>
                        <div>
                            <strong>Localização</strong>
                            <p>Recife, PE - Brasil</p>
                        </div>
                    </div>
                </div>
                
                <div className={portfolioStyle.contactMessage}>
                    <h3>Vamos conversar?</h3>
                    <p>
                        Estou sempre aberto a novas oportunidades e projetos interessantes. 
                        Entre em contato comigo através dos canais acima!
                    </p>
                    <p>
                        Atualmente em busca de uma nova oportunidade para escrever 
                        mais um capítulo na minha história profissional.
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <div className={portfolioStyle.portfolioContainer}>
            <div className={portfolioStyle.navigationTabs}>
                <button 
                    className={`${portfolioStyle.navTab} ${activeSection === 'about' ? portfolioStyle.active : ''}`}
                    onClick={() => setActiveSection('about')}
                >
                    Sobre Mim
                </button>
                <button 
                    className={`${portfolioStyle.navTab} ${activeSection === 'projects' ? portfolioStyle.active : ''}`}
                    onClick={() => setActiveSection('projects')}
                >
                    Projetos
                </button>
                <button 
                    className={`${portfolioStyle.navTab} ${activeSection === 'contact' ? portfolioStyle.active : ''}`}
                    onClick={() => setActiveSection('contact')}
                >
                    Contato
                </button>
            </div>
            
            <div className={portfolioStyle.sectionContainer}>
                {activeSection === 'about' && renderAboutSection()}
                {activeSection === 'projects' && renderProjectsSection()}
                {activeSection === 'contact' && renderContactSection()}
            </div>
        </div>
    );
}