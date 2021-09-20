import "./styles/Footer.css"

import { useApp } from "../contexts/AppContext";

/*
export const Footer = (props) => {
    return (
        <footer className={`App-footer ${props.dropDownManuShown ? 'drop-down' : ''}`}>
            <div className="footer-mark">Website Development By XW</div>
        </footer>
    )
}*/

export const Footer = () => {
    const { dropDownManuShown } = useApp();
    return (
        <footer className={`App-footer ${dropDownManuShown ? 'drop-down' : ''}`}>
            <div className="footer-mark">Website Development By XW</div>
        </footer>
    )
}