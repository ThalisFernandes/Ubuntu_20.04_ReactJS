import React from "react";
import Terminal from "react-console-emulator";
import TerminatorStyle from  './terminal.module.css';
const commands ={
    echo: {
        description: 'Echo a passed string.',
        usage: 'echo <string>',
        fn: (...args) => args.join(' ')
      },
    ls: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: (...args) => args.join('_ _')
        }
}
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
                welcomeMessage={"Bem vindo!!! \n Comandos: \n Contatos -l \n Redes_Sociais -f \n Baixar_meu_CV -u\n"}
                    promptLabel={'Thalis@pc:~$'}/> 
            </div>
            
        </>
    )
}