import { Dialog } from '@headlessui/react';
import React from 'react';

import { useModal } from '@lib/context/modalContext';
import X from '@modules/common/icons/x';

export const Title: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const { close } = useModal();

    return (
        <Dialog.Title className="flex items-center justify-between">
            <div className="text-large-semi">{children}</div>
            <div>
                <button onClick={close}>
                    <X size={20} />
                </button>
            </div>
        </Dialog.Title>
    );
};

export const Description: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    return (
        <Dialog.Description className="flex text-small-regular text-ui-fg-base items-center justify-center pt-2 pb-4 h-full">
            {children}
        </Dialog.Description>
    );
};

export const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="flex justify-center">{children}</div>;
};

export const Footer: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    return (
        <div className="flex items-center justify-end gap-x-4">{children}</div>
    );
};
