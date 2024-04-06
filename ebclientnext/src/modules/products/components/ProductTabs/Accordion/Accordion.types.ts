import * as AccordionPrimitive from '@radix-ui/react-accordion';

export type AccordionProps =
    | (AccordionPrimitive.AccordionSingleProps &
          React.RefAttributes<HTMLDivElement>)
    | (AccordionPrimitive.AccordionMultipleProps &
          React.RefAttributes<HTMLDivElement>);

export type AccordionItemProps = AccordionPrimitive.AccordionItemProps & {
    title: string;
    subtitle?: string;
    description?: string;
    required?: boolean;
    tooltip?: string;
    forceMountContent?: true;
    headingSize?: 'small' | 'medium' | 'large';
    customTrigger?: React.ReactNode;
    complete?: boolean;
    active?: boolean;
    triggerable?: boolean;
    children: React.ReactNode;
};
