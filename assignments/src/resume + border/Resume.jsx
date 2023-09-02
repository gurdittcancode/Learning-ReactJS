import { useState } from "react";
import { resumeData } from "./data/resumeData.js";
import Education from "./Education.jsx";
import Experiences from "./Experiences.jsx";
import Miscallaneous from "./Miscellaneous.jsx";
import ResumeEditor from "./ResumeEditor.jsx";

function Resume() {
  const [education, setEducation] = useState(resumeData.education);
  const [experience, setExperience] = useState(resumeData.experience);
  const [skills, setSkills] = useState(resumeData.skills);
  const [languages, setLanguages] = useState(resumeData.languages);
  const [hobbies, setHobbies] = useState(resumeData.hobbies);

  function updateEdu(newEd) {
    setEducation([newEd, ...education]);
  }

  function updateSkills(newSkill) {
    setSkills([...skills, newSkill]);
  }

  return (
    <>
      <div className="Resume">
        <button onClick={() => window.print()}>Print this bitch</button>
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
        {education ? <Education education={education} /> : null}
        {experience ? <Experiences experiences={experience} /> : null}

        <Miscallaneous skills={skills} langs={languages} hobbies={hobbies} />
      </div>
      <div>
        <ResumeEditor updateEdu={updateEdu} updateSkills={updateSkills} />
      </div>
    </>
  );
}

export default Resume;
