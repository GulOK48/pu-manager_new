/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { IModalContextProps, ModalContext } from './Types/api';

const Modal = (props: IModalContextProps) => {
    if (!props.show) {
        return null;
    }

    // The gray background
    const backdropStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50,
    };

    // The modal "window"
    const modalStyle: React.CSSProperties = {
        backgroundColor: '#fff',
        borderRadius: 5,
        maxWidth: 500,
        minHeight: 300,
        margin: '0 auto',
        padding: 30,
    };

    return (
        <ModalContext.Consumer>
            {value => (
                <div className="backdrop" style={backdropStyle}>
                    <div className="modal" style={modalStyle}>
                        <div className="footer">
                            <button onClick={props.onClose}>Закрыть</button>
                        </div>
                    </div>
                </div>
            )}
        </ModalContext.Consumer>
    );
};

export default Modal;
