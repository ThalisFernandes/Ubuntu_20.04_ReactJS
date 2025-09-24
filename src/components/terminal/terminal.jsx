import React from "react";
import Terminal from "react-console-emulator";
import TerminatorStyle from  './terminal.module.css';

const commands = {
    echo: {
        description: 'Echo a passed string.',
        usage: 'echo <string>',
        fn: (...args) => args.join(' ')
    },
    ls: {
        description: 'Lista arquivos e diretórios.',
        usage: 'ls [opções]',
        fn: (...args) => {
            return `total 8
drwxr-xr-x 2 thalis thalis 4096 Jan 15 10:30 Documentos
drwxr-xr-x 2 thalis thalis 4096 Jan 15 10:30 Downloads
drwxr-xr-x 2 thalis thalis 4096 Jan 15 10:30 Projetos
-rw-r--r-- 1 thalis thalis  256 Jan 15 10:30 README.md
-rw-r--r-- 1 thalis thalis  512 Jan 15 10:30 portfolio.js`;
        }
    },
    pwd: {
        description: 'Mostra o diretório atual.',
        usage: 'pwd',
        fn: () => '/home/thalis'
    },
    whoami: {
        description: 'Mostra o usuário atual.',
        usage: 'whoami',
        fn: () => 'thalis'
    },
    date: {
        description: 'Mostra a data e hora atual.',
        usage: 'date',
        fn: () => new Date().toString()
    },
    clear: {
        description: 'Limpa a tela do terminal.',
        usage: 'clear',
        fn: () => ''
    },
    contatos: {
        description: 'Mostra informações de contato.',
        usage: 'contatos [-l]',
        fn: (...args) => {
            return `📧 Email: thalis.fernandes@email.com
📱 LinkedIn: https://linkedin.com/in/thalis-fernandes
🐙 GitHub: https://github.com/ThalisFernandes
📍 Localização: Recife, PE - Brasil
📞 Telefone: +55 (81) 9xxxx-xxxx`;
        }
    },
    redes_sociais: {
        description: 'Mostra links das redes sociais.',
        usage: 'redes_sociais [-f]',
        fn: (...args) => {
            return `🔗 Redes Sociais:
• GitHub: https://github.com/ThalisFernandes
• LinkedIn: https://linkedin.com/in/thalis-fernandes
• Portfolio: Em construção...`;
        }
    },
    baixar_cv: {
        description: 'Simula o download do CV.',
        usage: 'baixar_cv [-u]',
        fn: (...args) => {
            return `📄 Baixando CV...
✅ Download concluído: thalis_fernandes_cv.pdf
📁 Arquivo salvo em: ~/Downloads/thalis_fernandes_cv.pdf`;
        }
    },
    habilidades: {
        description: 'Lista as principais habilidades técnicas.',
        usage: 'habilidades',
        fn: () => {
            return `💻 Habilidades Técnicas:

🌐 Frontend:
  • JavaScript (ES6+)
  • React.js
  • HTML5 & CSS3
  • Material-UI

⚙️ Backend:
  • Node.js
  • Express.js
  • Python
  • PHP

🗄️ Banco de Dados:
  • MySQL
  • PostgreSQL
  • MongoDB

☁️ Cloud & DevOps:
  • AWS (EC2, S3, Lambda)
  • Git & GitHub`;
        }
    },
    projetos: {
        description: 'Lista os principais projetos.',
        usage: 'projetos',
        fn: () => {
            return `🚀 Principais Projetos:

1. Portfolio Ubuntu 20.04 (React.js)
   - Interface clone do Ubuntu
   - Modais interativos
   - Terminal funcional

2. Sistema de Gerenciamento (Node.js + React)
   - API RESTful
   - Autenticação JWT
   - Dashboard administrativo

3. Aplicação de Machine Learning (Python)
   - Análise de dados
   - Modelos preditivos
   - Visualizações interativas

Para mais detalhes: github.com/ThalisFernandes`;
        }
    },
    help: {
        description: 'Mostra todos os comandos disponíveis.',
        usage: 'help',
        fn: () => {
            return `📋 Comandos Disponíveis:

Básicos:
  • ls          - Lista arquivos e diretórios
  • pwd         - Mostra diretório atual
  • whoami      - Mostra usuário atual
  • date        - Mostra data e hora
  • clear       - Limpa a tela
  • echo        - Repete texto

Informações Pessoais:
  • contatos    - Informações de contato
  • redes_sociais - Links das redes sociais
  • baixar_cv   - Download do currículo
  • habilidades - Lista habilidades técnicas
  • projetos    - Lista principais projetos

Digite 'help' para ver esta lista novamente.`;
        }
    }
};
export default function Terminator(){
    return(
        <>
            <div className={TerminatorStyle.main}>
                <div className={TerminatorStyle.hdx}>
                  <div>

                  </div>
                  <div >

                  </div>
                </div>
                <Terminal commands={commands} 
                welcomeMessage={"🐧 Terminal Ubuntu 20.04 - Portfolio Thalis Fernandes\n\n✨ Bem-vindo ao meu terminal interativo!\n\n📋 Comandos disponíveis:\n• contatos - Informações de contato\n• redes_sociais - Links das redes sociais\n• baixar_cv - Download do currículo\n• habilidades - Habilidades técnicas\n• projetos - Principais projetos\n• help - Lista completa de comandos\n\nDigite um comando para começar! 🚀\n"}
                    promptLabel={'thalis@portfolio:~$'}/> 
            </div>
            
        </>
    )
}