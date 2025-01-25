import { LOGIN_VIEW } from "@modules/account/templates/LoginTemplate";

export interface RegisterProps {
    setCurrentView: (view: LOGIN_VIEW) => void;
}
