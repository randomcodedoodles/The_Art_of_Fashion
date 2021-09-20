import {Link, useHistory} from "react-router-dom"
import { useApp } from "../../contexts/AppContext"
import "./styles/Service.css"

export const Service = () => {
    //const history = useHistory();
    const { handleStatesAftRedirect } = useApp();

    return (
        <div className="service">
            <h1>Sed libero justo, lobortis sit amet suscipit non</h1>
            <h3>taria duo ut vis semper abhorreant</h3>
            <div className="service-content">
                <p className="first-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Obcaecati libero asperiores amet nam labore ea! 
                Cupiditate, amet omnis corporis, iure magni enim quod eius error mollitia temporibus voluptatum perspiciatis blanditiis! 
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo maxime quae quod. 
                Vero, quasi saepe. Laborum, minus. Sint maxime asperiores reprehenderit adipisci, amet vitae aliquid voluptatibus animi veritatis neque magnam. 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, consectetur provident!
                 
                </p>
                <p className="rest">
                Sint maxime asperiores reprehenderit adipisci, amet vitae aliquid voluptatibus animi veritatis neque magnam. 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Incidunt deserunt impedit eligendi, maiores autem ea temporibus, tempore alias cum error dolor nostrum expedita aut ipsam, nesciunt doloribus! 
                Velit, consectetur provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Obcaecati libero asperiores amet nam labore ea! Cupiditate, amet omnis corporis, iure magni enim quod eius error mollitia temporibus voluptatum perspiciatis blanditiis! 
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo maxime quae quod. Vero, quasi saepe. 
                </p>
                <p className="rest">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Incidunt deserunt impedit eligendi, maiores autem ea temporibus, tempore alias cum error dolor nostrum expedita aut ipsam, nesciunt doloribus! 
                Velit, consectetur provident!  
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Obcaecati libero asperiores amet nam labore ea! 
                Cupiditate, amet omnis corporis, iure magni enim quod eius error mollitia temporibus voluptatum perspiciatis blanditiis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Explicabo maxime quae quod. Vero, quasi saepe. Laborum, minus. 
                Incidunt deserunt impedit eligendi, maiores autem ea temporibus, tempore alias cum error dolor nostrum expedita aut ipsam, nesciunt doloribus! Velit, consectetur provident!
                Explicabo maxime quae quod. Vero, quasi saepe. Laborum, minus. 
                </p>
            </div>
            <Link to='/contact-us' onClick={handleStatesAftRedirect}> <button className="contact-btn"> Contact us </button> </Link>
        </div>
    )
}
//<Link to='/contact-us'> <button className="contact-btn"> Contact us </button> </Link>
//<button className="contact-btn" onClick={() => history.push('/contact-us')}>Contact us</button> //see Gallery.js