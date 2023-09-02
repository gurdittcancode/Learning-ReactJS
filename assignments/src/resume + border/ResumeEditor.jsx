import { useState } from "react";

function ResumeEditor({ updateEdu, updateSkills }) {
  const [newSkill, setNewSkill] = useState("");
  const [newEducation, setNewEducation] = useState({
    degree: "",
    graduationYear: "",
    school: "",
  });

  function handleEduChange(event) {
    setNewEducation({
      ...newEducation,
      [event.target.name]: event.target.value,
    });
  }

  function handleEduSubmit(event) {
    event.preventDefault();
    updateEdu(newEducation);
    console.log(newEducation);
    setNewEducation({
      degree: "",
      graduationYear: "",
      school: "",
    });
  }

  function handleSkillChange(event) {
    setNewSkill(event.target.value);
  }

  function handleSkillSubmit(event) {
    event.preventDefault();
    console.log(newSkill);
    updateSkills(newSkill);
    setNewSkill("");
  }

  return (
    <div style={{ borderTop: "1px solid white", marginTop: "50px" }}>
      <h2>Add data to Resume!</h2>
      <div>
        <h3>Add Education</h3>
        <form onSubmit={handleEduSubmit}>
          <div>
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              name="degree"
              id="degree"
              value={newEducation.degree}
              onChange={handleEduChange}
            />

            <label htmlFor="school">School</label>
            <input
              type="text"
              id="school"
              name="school"
              value={newEducation.school}
              onChange={handleEduChange}
            />

            <label htmlFor="year">Graduation Year</label>
            <input
              type="number"
              name="graduationYear"
              id="year"
              value={newEducation.year}
              onChange={handleEduChange}
            />
          </div>

          <button type="submit">Add Education</button>
        </form>
      </div>

      <div>
        <h3>Add Skills</h3>
        <form onSubmit={handleSkillSubmit}>
          <label htmlFor="skills">Skill Name</label>
          <input
            type="text"
            id="skill"
            name="skill"
            value={newSkill}
            onChange={handleSkillChange}
          />

          <button type="submit">Add skill</button>
        </form>
      </div>
    </div>
  );
}

export default ResumeEditor;
