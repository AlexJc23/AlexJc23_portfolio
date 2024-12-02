import {NavLink } from "react-router-dom"
import "./Project1.css"
const Project1 = () => {
    return (
        <NavLink className='project-nav' to={'/duelforge'}>
            <div>
                <div className="df-header">
                    <h3>DuelForge</h3>
                </div>
                <div className="project-middle">
                <div className="df-topleft">
                    <p>Platform built with React and Flask that allows users to create and manage custom Yu-Gi-Oh! decks while exploring a vast card collection. With community-driven events, an intuitive interface, and real-time updates, players can join tournaments, connect with others, and refine their strategies for a seamless dueling experience.</p>
                </div>
                <div className="df-topright">
                    <ul className="project-list">
                        <li><span className="span-text-main">Role: </span><p>Full Stack Developer</p></li>
                        <li><span className="span-text-main">Duration: </span><p>August 2024 - Now</p></li>
                        <li><span className="span-text-main">Responsibilities: </span><p>UX/Ui Design, Wireframing, Frontend/Backend Development </p></li>

                    </ul>
                </div>
                </div>
                <div >
                    <img className="project-img" src="../src/assets/gamingdf.jpeg" alt="DuelForge mockup image" />
                </div>
            </div>

        </NavLink>
    )
}


export default Project1;
