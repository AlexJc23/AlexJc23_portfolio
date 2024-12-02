import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import TechUsedJS from "./TechUsedJS";
import './Sqg.css'



const Sqg = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
      };


    return (
        <div className="project-cont">
            <div style={{borderBottom: '1px solid #00000046', paddingBottom: '50px'}} className="project-top">
                <IoIosArrowRoundBack style={{fontSize: '30px', cursor: 'pointer'}} onClick={handleBack}/>
                <h1>Side Quest Gatherings (Meetup inspired)</h1>
                <img className='project-topimg' src={"Sqg_mockup.png"}/>
                <p>SideQuest Gatherings is an online platform for organizing and attending gaming or hobby-related meetups. Whether you're into board games, role-playing games like Dungeons & Dragons, or other geek culture activities, it connects like-minded individuals to create, share, and discover events. Users can also join or create groups based on their gaming interests, fostering community collaboration and discussion.</p>
                <div className="links">
                    <a href="https://sidequestgatherings.onrender.com/" target="_blank">Live Demo</a>
                    <a href="https://github.com/AlexJc23/sideQuestGatherings" target="_blank">GitHub Repository</a>
                </div>
            </div>
            <div className="tech">
                <TechUsedJS />
            </div>
            <div style={{borderBottom: '1px solid #00000046', paddingBottom: '50px'}} className="planning">
            <div className="planning-right">
                    <img className="plan-img third-img"  src="sqg_route.png" alt=""/>
                    <img className="plan-img first-img" src="sqg_art.png" alt=""/>
                    <img className="plan-img second-img" src="Sqg_schema.png" alt=""/>
                </div>
                <div className="planning-left">
                    <p>
                    During the planning phase, I focused on creating a clear and organized foundation for the project to ensure a smooth development process. I mapped out the features, tasks, and data structures to ensure alignment and efficiency throughout the project’s lifecycle.
                    </p>
                    <br/>
                    <p><span className="span-text">GitHub:</span> Managed the project using GitHub, setting up a Scrum board to track tasks, maintain a feature list, and define project routes.</p>
                    <p>
                    <span className="span-text">Figma: </span>Designed wireframes and mockups to plan the UI/UX and create a seamless user experience before development.
                    </p>
                    <p>
                    <span className="span-text">dbdiagram.io:</span> Utilized dbdiagram.io to visualize and structure the database schema, ensuring efficient relationships and data flow.
                    </p>
                    <p>
                    <span className="span-text">Canva: </span>Created custom artwork for the site from scratch, bringing the platform’s visual identity to life.
                    </p>
                </div>

            </div>
            <div style={{borderBottom: '1px solid #00000046', paddingBottom: '50px'}} className="project-frontend">
                <p>In my frontend development, I focus on building intuitive and engaging user interfaces. Here are the key aspects of my approach:</p>
                <ul>
                    <li><span className="span-text">Tech Stack:</span> React, JavaScript, Redux, React Router, CSS, Vite</li>
                    <li><span className="span-text">State Management with Redux:</span>  Implemented a streamlined Redux store to manage global state, handling dynamic event and group data efficiently. Redux Thunk was used extensively for asynchronous actions like user authentication, event creation, and group management, ensuring fast and consistent data updates across the app.</li>
                    <li><span className="span-text">Reducers: </span> Designed powerful reducers to maintain a clean, scalable application state. The reducers were optimized to handle various state changes such as adding/removing events, creating groups, and tracking user activities without bogging down performance.</li>
                    <li>
                    <span className="span-text">React Router:</span> Created a smooth, client-side routing experience that ensured users could easily navigate between different event and group pages without page reloads, maintaining a seamless flow throughout the platform.
                    </li>
                    <li>
                    <span className="span-text">ReactDOM & Virtual DOM Optimization:</span> Used ReactDOM to render components efficiently and utilized the virtual DOM to minimize costly re-renders. This helped in boosting app performance, especially with large data sets, ensuring users enjoyed a lag-free experience when browsing events, groups, or user profiles.
                    </li>
                </ul>
                <div className="img-fan">
                    <img className="plan-img first-front" src="Sqg_front1.png" alt="frontend code snippet"/>
                    <img className="plan-img second-front" src="Sqg_front2.png" alt="frontend code snippet"/>
                    <img className="plan-img third-front" src="Sqg_front3.png" alt="frontend code snippet"/>
                </div>
                <p><span className="span-text">Challenges & Solutions</span></p>
                <ul>
                    <li>
                    <span className="span-text">Complex State Management: </span> Redux Thunks and reducers were instrumental in managing and dispatching complex state transitions, allowing for easy state tracking and real-time updates without sacrificing performance.
                    </li>
                    <li>
                    <span className="span-text">Handling Real-Time Data: </span> Took advantage of Redux’s middleware to handle API calls for events and groups dynamically. This allowed for seamless data fetching and updates, keeping the platform responsive and up-to-date with minimal delay.
                    </li>
                </ul>
                <p>By leveraging React, Redux, and React Router in combination with optimized thunks and reducers, I was able to create a seamless, fast, and user-friendly interface for SideQuest Gatherings that scales effortlessly with growing data and traffic.</p>
            </div>
            <div  className="project-backend">
                <div className="imgs-backend">
                    <img className="plan-img first-front" src="sqg_back1.png" alt="frontend code snippet"/>
                    <img className="plan-img second-front" src="sqg_back4.png" alt="frontend code snippet"/>
                    <img className="plan-img third-front" src="sqg_back3.png" alt="frontend code snippet"/>
                </div>
                <p style={{textAlign: 'center'}}>Focused on building secure, efficient, and maintainable systems using a Node.js-based stack. Key elements of my backend development include:</p>

                <ul>
                    <li><span className="span-text">Tech Stack:</span> Node.js, Express, Sequelize, PostgreSQL, JWT, Bcrypt.js</li>
                    <li>
                    <span className="span-text">Database Management:</span>  I utilized Sequelize to manage and optimize relational databases (PostgreSQL), ensuring data consistency and efficient querying across the app.
                    </li>
                    <li>
                    <span className="span-text">API Development:</span> Developed robust RESTful APIs using Express to handle essential business logic and facilitate seamless communication between the frontend and backend. This includes managing users, events, and groups, and supporting features like login, event creation, and group management.
                    </li>
                    <li>
                    <span className="span-text">Authentication & Authorization:</span> Integrated JWT (JSON Web Tokens) and Bcrypt.js for secure, stateless user authentication. The APIs support secure login and user sessions.
                    </li>
                    <li>
                    <span className="span-text">Database Migrations:</span> Managed database schema changes with Sequelize migrations, ensuring smooth transitions between different stages of development while keeping the database schema in sync with application requirements.
                    </li>
                    <li><span className="span-text">Error Handling & Logging:</span>  Implemented error handling throughout the API and used Morgan for logging, ensuring a clear view of application activity and rapid identification of issues in production.</li>
                </ul>
                <p><span className="span-text">Challenges & Solutions</span></p>
                <ul>
                    <li><span className="span-text">Database Performance:</span> To optimize query performance, I used Sequelize's built-in support for eager loading and indexing in PostgreSQL, which allowed for fast, efficient querying of events, users, and groups.</li>
                    <li>
                    <span className="span-text">Authentication:</span> For user authentication, JWT tokens were used to manage secure sessions without needing server-side session storage, ensuring scalability and responsiveness.
                    </li>
                    <li>
                    <span className="span-text">Managing Schema Changes:</span> Overcame challenges with schema changes by utilizing Sequelize migrations, which allowed for smooth database transitions without causing data inconsistencies.

                    </li>
                    <li>
                    <span className="span-text">Form Validation: </span> Ensured secure and reliable user input through robust form validation using libraries like express-validator, particularly for user registration and event creation forms.

                    </li>
                </ul>
                <p>
                By leveraging this tech stack, I create backend systems that are reliable, scalable, and secure while providing a solid foundation for the frontend experience.
                </p>
            </div>
        </div>

    )
}


export default Sqg;
