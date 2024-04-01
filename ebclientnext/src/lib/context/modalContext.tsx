'use client';

import React, { createContext, useContext } from 'react';
import { ModalContextProps, ModalProviderProps } from './modalContext.types';

const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalProvider = ({ children, close }: ModalProviderProps) => {
    return (
        <ModalContext.Provider
            value={{
                close
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (context === null) {
        throw new Error('useModal must be used within a ModalProvider');
    }

    return context;
};
