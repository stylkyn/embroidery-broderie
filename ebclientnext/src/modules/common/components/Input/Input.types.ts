export type InputProps = Omit<
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    'placeholder'
> & {
    label: string;
    errors?: Record<string, unknown>;
    touched?: Record<string, unknown>;
    name: string;
    topLabel?: string;
};
