import "../styles/App-container.css"
import "./styles/AboutUs.css"
import midImg from "../../Resources/shutterstock_696636415.jpg"

import { useApp } from "../../contexts/AppContext"

export const AboutUs = () => { 

    const { dropDownManuShown } = useApp();

    return (
        <section className={`App-container ${dropDownManuShown ? 'drop-down' : ''}`}>
            <div className="about-us">
                
                <div className="beforeImg">
                    <h3>About us</h3>
                    <h6>Velit, consectetur provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. </h6>
                    <p>
                    Cupiditate, amet omnis corporis, iure magni enim quod eius error mollitia temporibus voluptatum perspiciatis blanditiis! 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo maxime quae quod. 
                    Vero, quasi saepe. Laborum, minus. Sint maxime asperiores reprehenderit adipisci, amet vitae aliquid voluptatibus animi veritatis neque magnam. 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime quae quod. <span className="about-inline">Lorem, ipsum dolor sit </span> amet consectetur adipisicing elit.
                    </p>
                    <p>
                    Cupiditate, amet omnis corporis, iure magni enim quod eius error mollitia temporibus voluptatum perspiciatis blanditiis! 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo maxime quae quod. 
                    Vero, quasi saepe. Laborum, minus. Sint maxime asperiores reprehenderit adipisci, amet vitae aliquid voluptatibus animi veritatis neque magnam. 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, consectetur provident! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="officeImg"><img src={midImg} alt="office" /></div>
                <div className="afterImg">
                    <p>
                    Cupiditate, amet omnis corporis, iure magni enim quod eius error mollitia temporibus voluptatum perspiciatis blanditiis! 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo maxime quae quod. 
                    Vero, quasi saepe. Laborum, minus. Sint maxime asperiores reprehenderit adipisci, amet vitae aliquid voluptatibus animi veritatis neque magnam. 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <h5>
                    Taria lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </h5>
                    <ul>
                        <li><span>Te obcaecati libero asperiores amet nam labore ea!</span></li>
                        <li><span>Te velit, consectetur provident! Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></li>
                        <li><span>Ut vero, quasi saepe. Laborum, minus.</span></li>
                        <li><span>Ut explicabo maxime quae quod. Vero, quasi saepe. Laborum, minus.</span></li>
                    </ul>
                    <p>
                    Cupiditate, amet omnis corporis, iure magni enim quod eius error mollitia temporibus voluptatum perspiciatis blanditiis! 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo maxime quae quod. 
                    </p>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Incidunt deserunt impedit eligendi, maiores autem ea temporibus, tempore alias cum error dolor nostrum expedita aut ipsam, nesciunt doloribus! 
                    Velit, consectetur provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Obcaecati libero asperiores amet nam labore ea! Cupiditate, amet omnis corporis, iure magni enim quod eius error mollitia temporibus voluptatum perspiciatis blanditiis! 
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo maxime quae quod. 
                    Vero, quasi saepe. Laborum, minus. 
                    </p>
                </div>
            </div>
            
        </section>
    )
}