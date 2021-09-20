import rightImg from "../../Resources/shutterstock_696636415.jpg"
import "./styles/Introduction.css"

export const Introduction = () => {
    return (
        <div className="introduction">
            <div className="left-brief">
                <h3>Justo petentium te vix, scripta regione urbanitas</h3>
                <p className="brief">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo maxime quae quod. 
                Vero, quasi saepe. Laborum, minus. Sint maxime asperiores reprehenderit adipisci, amet vitae aliquid voluptatibus animi veritatis neque magnam. 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <ul>
                    <li><span>Te obcaecati libero asperiores amet nam labore ea!</span></li>
                    <li><span>Te velit, consectetur provident! Ut vis semper abhorreant.</span></li>
                    <li><span>Ut vero, quasi saepe. Laborum, minus.</span></li>
                    <li><span>Ut explicabo maxime quae quod. Vero, quasi saepe. Laborum, minus.</span></li>
                </ul>
                <button className="detail-btn">Learn more</button>
            </div>
            <div className="right-part">
                <div className="right-img">
                    <img src={rightImg} alt="office" />
                </div>
            </div>
            
        </div>
    )
}
