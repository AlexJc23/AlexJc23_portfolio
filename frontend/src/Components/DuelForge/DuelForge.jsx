import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import TechUsed from "./TechUsed";
import './DuelForge.css'



const DuelForge = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
      };


    return (
        <div className="project-cont">
            <div style={{borderBottom: '1px solid #00000046', paddingBottom: '50px'}} className="project-top">
                <IoIosArrowRoundBack style={{fontSize: '30px', cursor: 'pointer'}} onClick={handleBack}/>
                <h1>DuelForge</h1>
                <img className='project-topimg' src={"createDeckmock.png"}/>
                <p>Platform built with React and Flask that allows users to create and manage custom Yu-Gi-Oh! decks while exploring a vast card collection. With community-driven events, an intuitive interface, and real-time updates, players can join tournaments, connect with others, and refine their strategies for a seamless dueling experience.</p>
                <div className="links">
                    <a href="https://duelforge.onrender.com/">Live Demo</a>
                    <a href="https://github.com/AlexJc23/DuelForge/wiki">GitHub Repository</a>
                </div>
            </div>
            <div className="tech">
                <TechUsed />
            </div>
            <div style={{borderBottom: '1px solid #00000046', paddingBottom: '50px'}} className="planning">
            <div className="planning-right">
                    <img className="plan-img third-img" src="df_wireframes.png" alt=""/>
                    <img className="plan-img first-img" src="duelforge_redux.png" alt=""/>
                    <img className="plan-img second-img" src="df_schema.png" alt=""/>
                </div>
                <div className="planning-left">
                    <p>
                    During the planning phase, I focused on laying a strong foundation for the project by organizing tasks, features, and routes, ensuring clarity and structure from the outset. This thoughtful planning allowed for a seamless development process, helping to anticipate challenges and align the vision. By prioritizing organization early on, I set the stage for efficient development and effective communication throughout the project.
                    </p>
                    <p><span className="span-text">GitHub:</span> Utilized GitHub for organizing the project using a Scrum board to track tasks, maintain a feature list, and define routes.</p>
                    <p>
                    <span className="span-text">Figma: </span>Created wireframes and mockups to visualize the UI/UX design and layout before development.
                    </p>
                    <p>
                    <span className="span-text">dbdiagram.io:</span> Designed and visualized the database schema to plan data relationships and structure.
                    </p>
                    <p>
                    <span className="span-text">Paint:</span> Used Paint to quickly sketch and plan the Redux store structure for managing state across the app.
                    </p>
                </div>

            </div>
            <div style={{borderBottom: '1px solid #00000046', paddingBottom: '50px'}} className="project-frontend">
                <p>In my frontend development, I focus on building intuitive and engaging user interfaces. Here are the key aspects of my approach:</p>
                <ul>
                    <li><span className="span-text">Tech Stack:</span> React, JavaScript, Redux, React Router, CSS, Vite</li>
                    <li><span className="span-text">State Management:</span> Used Redux for centralized state management, along with Redux Thunk to manage asynchronous actions.</li>
                    <li><span className="span-text">Routing: </span>Implemented React Router for seamless navigation between pages.</li>
                    <li>
                    <span className="span-text">User Experience:</span> Prioritized user-centric design by ensuring fast interactions, clean UI, and responsive layouts that adjust seamlessly across different devices.
                    </li>
                </ul>
                <div className="img-fan">
                    <img className="plan-img first-front" src="codeSnippFront1.png" alt="frontend code snippet"/>
                    <img className="plan-img second-front" src="codeSnippFront2.png" alt="frontend code snippet"/>
                    <img className="plan-img third-front" src="codeSnippFront4.png" alt="frontend code snippet"/>
                </div>
                <p><span className="span-text"></span>Challenges & Solutions</p>
                <ul>
                    <li>
                    <span className="span-text">Managing Complex State:</span> Managed complex application state using Redux, making it easier to scale and maintain.
                    </li>
                    <li>
                    <span className="span-text">Handling Dynamic Content:</span> Implemented strategies to handle dynamic content efficiently, ensuring that updates are reflected in real-time while maintaining a smooth user experience.
                    </li>
                </ul>
                <p>This approach helped me build functional, scalable applications that provide a smooth and efficient user experience.</p>
            </div>
            <div  className="project-backend">
                <div className="imgs-backend">
                    <img className="plan-img first-front" src="codeSnippBack1.png" alt="frontend code snippet"/>
                    <img className="plan-img second-front" src="codeSnippBack2.png" alt="frontend code snippet"/>
                    <img className="plan-img third-front" src="codeSnippBack3.png" alt="frontend code snippet"/>
                </div>
                <p>For the backend, I focus on building secure, efficient, and maintainable systems using a Python-based stack. Key elements of my backend development include:</p>

                <ul>
                    <li><span className="span-text">Tech Stack:</span> Tech Stack: Flask, SQLAlchemy, PostgreSQL, Alembic, Flask-Migrate</li>
                    <li>
                    <span className="span-text">Database Management:</span> Database Management: Utilized SQLAlchemy to manage and optimize relational databases (PostgreSQL) for data consistency and efficient querying.
                    </li>
                    <li>
                    <span className="span-text">API Development:</span> API Development: Developed robust RESTful APIs using Flask to handle business logic and facilitate seamless communication between the frontend and backend.
                    </li>
                    <li>
                    <span className="span-text">Authentication & Authorization:</span> Authentication & Authorization: Integrated Flask-Login for user authentication and Flask-CORS to ensure secure cross-origin requests.
                    </li>
                    <li>
                    <span className="span-text">Database Migrations:</span> Database Migrations: Managed database migrations with Alembic and Flask-Migrate, ensuring smooth schema changes throughout development.
                    </li>
                    <li><span className="span-text">Error Handling & Logging:</span> Error Handling & Logging: Implemented error handling and logging to track issues and ensure reliable performance across the application.</li>
                </ul>
                <p><span className="span-text">Challenges & Solutions</span> Challenges & Solutions</p>
                <ul>
                    <li><span className="span-text">Database Performance:</span> Database Performance: Addressed performance issues by optimizing queries and using indexes in PostgreSQL.</li>
                    <li>
                    <span className="span-text">Authentication:</span> Authentication: Ensured secure user sessions with Flask-Login while allowing for seamless, secure login processes.
                    </li>
                    <li>
                    <span className="span-text">Managing Schema Changes:</span> Managing Schema Changes: Overcame challenges with schema changes by using Alembic and Flask-Migrate for smooth, manageable database migrations.
                    </li>
                </ul>
                <p>
                By leveraging this tech stack, I create backend systems that are reliable, scalable, and secure while providing a solid foundation for the frontend experience.
                </p>
            </div>
        </div>

    )
}


export default DuelForge;
