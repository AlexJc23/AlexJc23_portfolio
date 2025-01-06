import "./Resume.css";


import resumePDF from "../../assets/resume_alex_carl.pdf";

const Resume = () => {
    return (
        <div className="resume-container">
            <iframe
                src={resumePDF}
                width="100%"
                height="1000px"
                title="Resume"
            />
        </div>
    );
};

export default Resume;
