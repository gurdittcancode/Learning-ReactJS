import { resumeData } from "./data/resumeData.js";
import Education from "./Education.jsx";
import Experiences from "./Experiences.jsx";
import Miscallaneous from "./Miscellaneous.jsx";

function Resume() {
  return (
    <div className="Resume">
      <div className="header" style={{ textAlign: "center" }}>
        <h1>{resumeData.name.toUpperCase()}</h1>
        <p>
          {resumeData.contactInfo.email} | {resumeData.contactInfo.phone} |{" "}
          {resumeData.contactInfo.address}
        </p>
      </div>
      <p>
        <i>{resumeData.summary}</i>
      </p>
      {resumeData.education ? (
        <Education education={resumeData.education} />
      ) : null}
      {resumeData.experience ? (
        <Experiences experiences={resumeData.experience} />
      ) : null}

      <Miscallaneous
        skills={resumeData.skills}
        langs={resumeData.languages}
        hobbies={resumeData.hobbies}
      />
    </div>
  );
}

export default Resume;
