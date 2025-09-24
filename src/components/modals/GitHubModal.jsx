import React from "react";
import modalStyle from './modal.module.css';

export default function GitHubModal({ isOpen, onClose }) {
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
                    <iframe 
                        src="https://github.com/ThalisFernandes" 
                        width="100%" 
                        height="100%"
                        frameBorder="0"
                        title="GitHub Profile"
                    />
                </div>
            </div>
        </div>
    );
}