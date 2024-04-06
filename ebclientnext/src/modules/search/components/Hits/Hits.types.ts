import { UseHitsProps } from 'react-instantsearch-hooks-web';

export type HitsProps<THit> = React.ComponentProps<'div'> &
    UseHitsProps & {
        hitComponent: (props: { hit: THit }) => JSX.Element;
    };
