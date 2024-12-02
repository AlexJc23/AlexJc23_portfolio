import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import './Crafty.css'
import TechUsed from "../DuelForge/TechUsed";



const Crafty = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
      };


    return (
        <div className="project-cont">
            <div style={{borderBottom: '1px solid #00000046', paddingBottom: '50px'}} className="project-top">
                <IoIosArrowRoundBack style={{fontSize: '30px', cursor: 'pointer'}} onClick={handleBack}/>
                <h1>Crafty (Etsy inspired)</h1>
                <img className='project-topimg' src={"craftymockup.jpeg"}/>
                <p>An innovative marketplace designed to bring together passionate creators and enthusiasts in the cosplay community. It offers a dynamic platform where users can buy and sell custom-designed cosplay costumes, props, and accessories tailored to fit their favorite characters and themes.</p>
                <div className="links">
                    <a href="https://crafty-reze.onrender.com/" target="_blank">Live Demo</a>
                    <a href="https://github.com/Deerk1ng/crafty-python-project/wiki" target="_blank">GitHub Repository</a>
                </div>
            </div>
            <div className="tech">
                <TechUsed />
            </div>
            <div style={{borderBottom: '1px solid #00000046', paddingBottom: '50px'}} className="planning">
            <div className="planning-right">
                    <img className="plan-img third-img" src="crafty_wireframe.png" alt=""/>
                    <img className="plan-img first-img" src="crafty_redux.png" alt=""/>
                    <img className="plan-img second-img" src="crafty_schema.png" alt=""/>
                </div>
                <div className="planning-left">
                    <p>
                    During the planning phase of Crafty, we laid a solid foundation for our group project by organizing tasks, features, and routes to ensure clarity and collaboration from the start. This structured approach allowed us to anticipate challenges, align on a shared vision, and streamline the development process. By prioritizing organization early on, we set the stage for efficient teamwork and smooth execution throughout the project.
                    </p>
                    <p><span className="span-text">GitHub:</span> Leveraged GitHub as a collaborative tool, utilizing a Scrum board to track team tasks, maintain a feature list, and define API routes.</p>
                    <p>
                    <span className="span-text">Figma: </span>Designed wireframes and mockups to visualize the user interface and user experience, ensuring a consistent and user-friendly layout.
                    </p>
                    <p>
                    <span className="span-text">dbdiagram.io:</span> Mapped out the database schema, planning the structure and relationships necessary for robust data handling in our Flask backend.
                    </p>
                    <p>
                    <span className="span-text">Paint:</span> Created quick sketches to outline the Redux store structure for managing state effectively across the React frontend.
                    </p>
                </div>

            </div>
            <div style={{borderBottom: '1px solid #00000046', paddingBottom: '50px'}} className="project-frontend">
                <p>For Crafty, I worked with my team to develop a visually appealing and functional interface that caters to the cosplay community. By focusing on performance, interactivity, and user-centric design, we created a platform that facilitates easy buying, selling, and browsing of custom-crafted items.</p>
                <ul>
                    <li><span className="span-text">Component-Based Design:</span> Developed reusable and modular React components for features like product cards, user profiles, and shopping carts, streamlining development and ensuring consistency across the app.</li>
                    <li><span className="span-text">Product Listings: </span> Developed a visually appealing product grid that allowed users to browse items easily.</li>
                    <li><span className="span-text">Integration with Backend:  </span>Connected the frontend to a Flask backend, enabling dynamic loading of products and user-specific data.</li>
                    <li>
                    <span className="span-text">User Authentication: </span> Implemented protected routes and conditional rendering to create a personalized experience for logged-in users.
                    </li>
                </ul>
                <div className="img-fan">
                    <img className="plan-img first-front" src="frontend_crafty2.png" alt="frontend code snippet"/>
                    <img className="plan-img second-front" src="frontend_crafty1.png" alt="frontend code snippet"/>
                    <img className="plan-img third-front" src="frontend_crafty3.png" alt="frontend code snippet"/>
                </div>
                <p><span className="span-text"></span>Challenges & Solutions</p>
                <p style={{fontWeight: '700'}}>Handling State Across the App:</p>
                <ul>
                    <li style={{marginLeft: '30px'}}>
                    <span  className="span-text">Challenge: </span> Managing state for features like shopping carts, user sessions, and product data.
                    </li>
                    <li style={{marginLeft: '30px'}}>
                    <span className="span-text">Solution: </span> Used Redux to centralize state and simplify data flow between components, ensuring smooth functionality across the app.
                    </li>
                </ul>
                <p style={{fontWeight: '700'}}>Collaborative Development:</p>
                <ul>
                    <li style={{marginLeft: '30px'}}>
                    <span  className="span-text">Challenge: </span> Coordinating frontend work among team members who vary in different time zones.
                    </li>
                    <li style={{marginLeft: '30px'}}>
                    <span className="span-text">Solution: </span> Regular code reviews and task assignments through GitHub helped maintain consistency and avoid conflicts.
                    </li>
                </ul>
            </div>
            <div  className="project-backend">
                <div className="imgs-backend">
                    <img className="plan-img first-front" src="backend_crafty2.png" alt="frontend code snippet"/>
                    <img className="plan-img second-front" src="backend_crafty3.png" alt="frontend code snippet"/>
                    <img className="plan-img third-front" src="backend_crafty1.png" alt="frontend code snippet"/>
                </div>
                <p>Our team built a backend designed to scale with the growing needs of a bustling online marketplace. We focused on crafting a solid architecture that ensures quick, secure, and seamless interactions for both buyers and sellers.</p>

                <ul>
                    <li><span className="span-text">Tech Stack:</span> Leveraged Flask for the web framework, SQLAlchemy for ORM, PostgreSQL as the database, Alembic for migrations, and Flask-Migrate for version control.</li>
                    <li>
                    <span className="span-text">Relational Database Design: </span> Crafted an efficient schema with SQLAlchemy to represent users, products, orders, and reviews, ensuring data consistency and easy retrieval.
                    </li>
                    <li>
                    <span className="span-text">API Development:</span> Built secure RESTful APIs to manage CRUD operations for products, orders, and user profiles, facilitating seamless interaction with the frontend.
                    </li>
                    <li>
                    <span className="span-text">Authentication & Authorization:</span> Implemented user login/logout and session management using Flask-Login and secured cross-origin requests with Flask-CORS.
                    </li>
                    <li>
                    <span className="span-text">Error Handling & Logging: </span> Designed robust error-handling middleware to catch and log issues, enhancing debugging and overall application reliability.
                    </li>
                </ul>
                <p><span className="span-text">Challenges & Solutions</span></p>
                <p><span className="span-text">Database Efficiency: </span></p>
                <ul style={{marginLeft: '20px'}}>
                    <li><span className="span-text">Challenge: </span> Ensuring the application could handle complex queries without slowing down.</li>
                    <li>
                    <span className="span-text">Solution: </span> Optimized database queries by indexing frequently accessed fields and carefully structuring relationships to minimize redundant data.
                    </li>
                </ul>
                <p><span className="span-text">Managing Schema Evolution: </span></p>
                <ul style={{marginLeft: '20px'}}>
                    <li><span className="span-text">Challenge: </span> Updating the database schema without disrupting existing data or features.</li>
                    <li>
                    <span className="span-text">Solution: </span> Used Alembic migrations to apply incremental schema updates safely during development.
                    </li>
                </ul>
            </div>
        </div>

    )
}


export default Crafty;
