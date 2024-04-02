export interface FilterRadioGroupProps {
    title: string;
    items: {
        value: string;
        label: string;
    }[];
    value: any;
    handleChange: (...args: any[]) => void;
}
