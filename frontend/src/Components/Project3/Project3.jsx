import {NavLink } from "react-router-dom"

const Project3 = () => {
    return (
        <NavLink className='project-nav' to={'/sidequest_gatherings'}>
            <div>
                <div className="df-header">
                    <h3>SideQuest Gatherings (Meetup inspired)</h3>
                </div>
                <div className="project-middle">
                <div className="df-topleft">
                    <p>E-commerce platform built with JavaScript, Express, and React, allowing users to buy and sell custom-made clothing, accessories, and cosplay props. Users can list items for sale, interact with products through a shopping cart, reviews, and favorites, while instantly making their items available for others to explore..</p>
                </div>
                <div className="df-topright">
                    <ul>
                        <li><span className="span-text-main">Role: </span><p>Full Stack Developer</p></li>
                        <li><span className="span-text-main">Duration: </span><p>June 2024 - August 2024</p></li>
                        <li><span className="span-text-main">Responsibilities: </span><p>UX/Ui Design, Wireframing, Frontend/Backend Development </p></li>

                    </ul>
                </div>
                </div>
                <div >
                    <img className="project-img" src="sqgmockup.jpeg" alt="Crafty mockup image" />
                </div>
            </div>

        </NavLink>
    )
}


export default Project3;
