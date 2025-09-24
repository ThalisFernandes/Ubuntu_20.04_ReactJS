import React, { useEffect } from "react";
import modalStyle from './modal.module.css';

export default function GitHubModal({ isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            // abre automaticamente o github quando o modal abrir
            window.open('https://github.com/ThalisFernandes', '_blank');
        }
    }, [isOpen]);

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
                        <span>https://github.com/ThalisFernandes</span>
                    </div>
                </div>
                <div className={modalStyle.modalBody}>
                    <div className={modalStyle.githubContent}>
                        <div className={modalStyle.githubMessage}>
                            <h2>🚀 Redirecionando para o GitHub</h2>
                            <p>Você será redirecionado para meu perfil no GitHub em uma nova aba.</p>
                            <p>Se não abrir automaticamente, clique no botão abaixo:</p>
                            <button 
                                className={modalStyle.githubButton}
                                onClick={() => window.open('https://github.com/ThalisFernandes', '_blank')}
                            >
                                🔗 Abrir GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}