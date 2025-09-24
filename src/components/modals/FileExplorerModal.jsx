import React, { useState } from "react";
import modalStyle from './modal.module.css';

const files = [
    { name: "Javascript.html", type: "JS", content: "Conhecimentos em JavaScript, ReactJS, NodeJS e frameworks relacionados." },
    { name: "Python.html", type: "PY", content: "Experiência com Python, Django, Flask, Machine Learning e Data Science." },
    { name: "AI/ML.html", type: "AI", content: "Inteligência Artificial, Machine Learning, Deep Learning e análise de dados." },
    { name: "BancoDeDados.html", type: "DB", content: "MySQL, PostgreSQL, MongoDB, Redis e design de banco de dados." },
    { name: "AWS.html", type: "AWS", content: "Amazon Web Services, EC2, S3, Lambda, RDS e arquitetura em nuvem." }
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