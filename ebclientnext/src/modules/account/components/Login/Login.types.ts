import { LOGIN_VIEW } from '@modules/account/templates';

export interface LoginProps {
    setCurrentView: (view: LOGIN_VIEW) => void;
}
