
import { Gallery } from "./Gallery"
import { Individual } from "./Individual"
import { Introduction } from "./Introduction"
import { Service } from "./Service"
import "../styles/App-container.css"
//import "./styles/Home.css"

import { useApp } from "../../contexts/AppContext"

/*
export const Home = (props) => {
    return (
        <section className={`App-container ${props.dropDownManuShown ? 'drop-down' : ''}`}>
            <Gallery />
            <Introduction />
            <Individual />
            <Service />
            
        </section>
    )
}

//{${dropDownManuShown ? "App-container drop-down" : ""}
*/

export const Home = () => {
    const { dropDownManuShown } = useApp();
    return (
        <section className={`App-container ${dropDownManuShown ? 'drop-down' : ''}`}>
            <Gallery />
            <Introduction />
            <Individual />
            <Service />
            
        </section>
    )
}