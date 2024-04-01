import { LOGIN_VIEW } from '@modules/account/templates';

export interface RegisterProps {
    setCurrentView: (view: LOGIN_VIEW) => void;
}
