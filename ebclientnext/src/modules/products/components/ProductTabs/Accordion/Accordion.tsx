import * as AccordionPrimitive from '@radix-ui/react-accordion';
import React from 'react';
import { AccordionItemProps, AccordionProps } from './Accordion.types';
import { Item } from './Accordion.components';

export const Accordion: React.FC<AccordionProps> & {
    Item: React.FC<AccordionItemProps>;
} = ({ children, ...props }) => {
    return (
        /* @ts-expect-error */
        <AccordionPrimitive.Root {...props}>{children}</AccordionPrimitive.Root>
    );
};

Accordion.Item = Item;
