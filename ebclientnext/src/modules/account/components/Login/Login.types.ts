import { LOGIN_VIEW } from "@modules/account/templates/LoginTemplate";

export interface LoginProps {
    setCurrentView: (view: LOGIN_VIEW) => void;
}
