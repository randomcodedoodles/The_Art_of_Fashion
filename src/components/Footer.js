import "./styles/Footer.css"

import { useApp } from "../contexts/AppContext";


export const Footer = () => {
    const { dropDownManuShown } = useApp();
    return (
        <footer className={`App-footer ${dropDownManuShown ? 'drop-down' : ''}`}>
            <div className="footer-mark">Website Development By XW</div>
        </footer>
    )
}