export type AccountInfoProps = {
    label: string;
    currentInfo: string | React.ReactNode;
    isSuccess?: boolean;
    isError?: boolean;
    errorMessage?: string;
    clearState: () => void;
    children?: React.ReactNode;
};
