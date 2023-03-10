/// <reference types="react" />
import './page.css';
export interface PageProps {
    user?: any;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
export declare const Page: ({ user, onLogin, onLogout, onCreateAccount }: PageProps) => JSX.Element;
export default Page;
