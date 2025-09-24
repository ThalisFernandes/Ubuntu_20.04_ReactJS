import React from "react";
import modalStyle from './modal.module.css';

export default function ConfigModal({ isOpen, onClose }) {
    if (!isOpen) return null;

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
                        <span>Configurações - Informações de Contato</span>
                    </div>
                </div>
                <div className={modalStyle.modalBody}>
                    <div className={modalStyle.contactInfo}>
                        <h2>Informações de Contato</h2>
                        
                        <div className={modalStyle.contactItem}>
                            <strong>Nome:</strong> Thalis Fernandes
                        </div>
                        
                        <div className={modalStyle.contactItem}>
                            <strong>Email:</strong> thalis.fernandes@email.com
                        </div>
                        
                        <div className={modalStyle.contactItem}>
                            <strong>LinkedIn:</strong> 
                            <a href="https://linkedin.com/in/thalis-fernandes" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               style={{ color: '#e95420', marginLeft: '10px' }}>
                                linkedin.com/in/thalis-fernandes
                            </a>
                        </div>
                        
                        <div className={modalStyle.contactItem}>
                            <strong>GitHub:</strong> 
                            <a href="https://github.com/ThalisFernandes" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               style={{ color: '#e95420', marginLeft: '10px' }}>
                                github.com/ThalisFernandes
                            </a>
                        </div>
                        
                        <div className={modalStyle.contactItem}>
                            <strong>Localização:</strong> Recife, PE - Brasil
                        </div>
                        
                        <div className={modalStyle.contactItem}>
                            <strong>Telefone:</strong> +55 (81) 9xxxx-xxxx
                        </div>
                        
                        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                            <h3 style={{ color: '#e95420', marginBottom: '15px' }}>Sobre</h3>
                            <p style={{ textAlign: 'left', lineHeight: '1.6' }}>
                                Desenvolvedor Full Stack apaixonado por tecnologia, com experiência em 
                                JavaScript, Python, React, Node.js e tecnologias de nuvem. Sempre em 
                                busca de novos desafios e oportunidades de aprendizado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}