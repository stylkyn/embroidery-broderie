export interface ModalContextProps {
    close: () => void;
}

export interface ModalProviderProps {
    children?: React.ReactNode;
    close: () => void;
}
