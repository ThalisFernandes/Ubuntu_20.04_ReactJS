import React, { useState } from "react";
import modalStyle from './modal.module.css';

const files = [
    { name: "Javascript.html", type: "JS", content: `# Meus Conhecimentos Técnicos

## Conceitos Fundamentais:
• Async / Await
• Promise
• Threads
• Concorrência
• Orientação a Objetos
• Algoritmos & Estruturas de Dados
• Algoritmos de busca
• HTTP requests / JSON / AJAX

## JavaScript:
• Linguagem de programação moderna
• ES6+ features
• Programação funcional e orientada a objetos
• Manipulação do DOM
• Event handling

## ReactJS:
• Biblioteca para interfaces de usuário
• Componentes funcionais e de classe
• Hooks (useState, useEffect, etc.)
• Context API
• Roteamento com React Router

## NodeJS:
• Express - Framework web
• Router - Gerenciamento de rotas
• Sockets - Comunicação em tempo real
• APIs RESTful
• Middleware

## jQuery:
• Seletores avançados
• Manipulação de elementos
• Eventos e animações
• AJAX requests` },
    { name: "Python.html", type: "PY", content: `# Linguagens de Programação

## Python:
• Linguagem de programação versátil
• Sintaxe limpa e legível
• Programação orientada a objetos
• Estruturas de dados nativas
• List comprehensions
• Decorators e generators

## Frameworks Python:
• Django - Framework web completo
• Flask - Microframework web
• FastAPI - Framework moderno para APIs
• Desenvolvimento de APIs RESTful
• Template engines

## ORMs:
• SQLAlchemy - ORM poderoso para Python
• Django ORM - ORM integrado ao Django
• Mapeamento objeto-relacional
• Migrations e schema management

## Outras Linguagens:
• C - Programação de baixo nível
• Java - Programação orientada a objetos
• PHP - Desenvolvimento web server-side` },
    { name: "BancoDeDados.html", type: "DB", content: `# Bancos de Dados

## Bancos Relacionais:
• MySQL - Sistema de gerenciamento popular
• Oracle - Banco enterprise robusto
• PostgreSQL - Banco open source avançado
• Modelagem de dados relacionais
• SQL queries complexas
• Índices e otimização
• Transações e ACID

## Bancos NoSQL:
• MongoDB - Banco de documentos
• Redis (Cache) - Armazenamento em memória
• Estruturas de dados flexíveis
• Escalabilidade horizontal

## ORMs:
• TypeORM - ORM para TypeScript/JavaScript
• SQLAlchemy - ORM para Python
• Mapeamento objeto-relacional
• Migrations automáticas
• Query builders

## Conceitos Avançados:
• Design de schema
• Normalização de dados
• Performance tuning
• Backup e recovery` },
    { name: "AI/ML.html", type: "AI", content: `# Inteligência Artificial & Linguagens

## AI/ML:
• Inteligência Artificial
• Machine Learning
• Deep Learning
• Análise de dados
• Algoritmos de aprendizado
• Redes neurais
• Processamento de linguagem natural

## Linguagens de Programação:
• C - Linguagem de baixo nível
• JavaScript - Desenvolvimento web
• Python - Ciência de dados e IA
• PHP - Desenvolvimento web server-side
• Java - Programação orientada a objetos

## Ferramentas de IA:
• TensorFlow
• PyTorch
• Scikit-learn
• Pandas e NumPy
• Jupyter Notebooks` },
    { name: "BancoDeDados.html", type: "DB", content: `# Bancos de Dados

## Bancos Relacionais:
• MySQL - Sistema de gerenciamento popular
• Oracle - Banco enterprise robusto
• PostgreSQL - Banco open source avançado
• Modelagem de dados relacionais
• SQL queries complexas
• Índices e otimização
• Transações e ACID

## Bancos NoSQL:
• MongoDB - Banco de documentos
• Redis (Cache) - Armazenamento em memória
• Estruturas de dados flexíveis
• Escalabilidade horizontal

## ORMs:
• TypeORM - ORM para TypeScript/JavaScript
• SQLAlchemy - ORM para Python
• Mapeamento objeto-relacional
• Migrations automáticas
• Query builders

## Conceitos Avançados:
• Design de schema
• Normalização de dados
• Performance tuning
• Backup e recovery` },
    { name: "AWS.html", type: "AWS", content: `# Tecnologias Web & Cloud

## HTML5:
• Handlebars - Template engine
• Tags semânticas
• SEO e Acessibilidade
• Estruturação moderna de conteúdo
• APIs HTML5 nativas

## CSS:
• Seletores e Pseudo-Seletores
• TailWind - Framework CSS utility-first
• SASS - Preprocessador CSS
• SCSS - Sintaxe melhorada do SASS
• Responsive design
• Flexbox e Grid

## Frameworks:
• Django - Framework Python web
• Flask - Microframework Python
• ReactJS - Biblioteca JavaScript
• whatsapp-web.js - Automação WhatsApp

## Testes Automatizados:
• Selenium - Automação de navegador
• Cypress - Testes end-to-end modernos
• Testes de integração
• Testes unitários

## AWS (Amazon Web Services):
• EC2 - Computação em nuvem
• S3 - Armazenamento de objetos
• Lambda - Computação serverless
• RDS - Banco de dados gerenciado
• Arquitetura em nuvem` }
];

export default function FileExplorerModal({ isOpen, onClose }) {
    const [selectedFile, setSelectedFile] = useState(null);

    if (!isOpen) return null;

    const handleFileClick = (file) => {
        setSelectedFile(file);
    };

    const handleBackToFiles = () => {
        setSelectedFile(null);
    };

    return (
        <div className={modalStyle.modalOverlay} onClick={onClose}>
            <div className={modalStyle.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={modalStyle.modalHeader}>
                    <div className={modalStyle.windowControls}>
                        <div className={modalStyle.closeBtn} onClick={onClose}></div>
                        <div className={modalStyle.minimizeBtn}></div>
                        <div className={modalStyle.maximizeBtn}></div>
                    </div>
                    <div className={modalStyle.addressBar}>
                        <span>{selectedFile ? selectedFile.name : "Arquivos - Habilidades Técnicas"}</span>
                    </div>
                </div>
                <div className={modalStyle.modalBody}>
                    {selectedFile ? (
                        <div className={modalStyle.fileExplorer}>
                            <button 
                                onClick={handleBackToFiles}
                                style={{
                                    marginBottom: '20px',
                                    padding: '8px 16px',
                                    backgroundColor: '#e95420',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                ← Voltar aos arquivos
                            </button>
                            <div style={{ padding: '20px', lineHeight: '1.6' }}>
                                <h2 style={{ color: '#e95420', marginBottom: '20px' }}>
                                    {selectedFile.name}
                                </h2>
                                <p style={{ fontSize: '16px', color: '#333' }}>
                                    {selectedFile.content}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className={modalStyle.fileExplorer}>
                            <h3 style={{ marginBottom: '20px', color: '#333' }}>
                                Minhas Habilidades Técnicas
                            </h3>
                            <div className={modalStyle.fileList}>
                                {files.map((file, index) => (
                                    <div 
                                        key={index} 
                                        className={modalStyle.fileItem}
                                        onClick={() => handleFileClick(file)}
                                    >
                                        <div className={modalStyle.fileIcon}>
                                            {file.type}
                                        </div>
                                        <div className={modalStyle.fileName}>
                                            {file.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}