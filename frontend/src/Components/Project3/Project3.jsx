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
                    <p>SideQuest Gatherings is a Meetup clone designed to bring like-minded individuals together for events centered around gaming, hobbies, and social gatherings. Built with Express.js on the backend and React on the frontend, the platform allows users to create, discover, and join events seamlessly. With a robust authentication system, users can manage their profiles, organize events, and engage with communities. The application ensures a smooth and dynamic user experience, leveraging RESTful APIs for data handling and state management to keep everything responsive and interactive.</p>
                </div>
                <div className="df-topright">
                    <ul className="project-list">
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
