import { clx } from '@medusajs/ui';
import { DividerProps } from './Divider.types';

export const Divider = ({ className }: DividerProps) => (
    <div
        className={clx('h-px w-full border-b border-gray-200 mt-1', className)}
    />
);
