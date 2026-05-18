import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Focus Digital</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              ▪ Completed a 6-month internship contributing to client web
              projects using WordPress, theme customization, and PHP hooks.
              <br></br> ▪ Collaborated cross-functionally to troubleshoot
              technical issues and deliver effective, timely solutions.<br></br>{" "}
              ▪ Managed task pipelines and project workflows using Teamwork,
              improving delivery efficiency.<br></br> ▪ Sharpened
              problem-solving, time management, and professional work ethic in a
              fast-paced agency environment.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
