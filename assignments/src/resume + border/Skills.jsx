function Skills({resumeState}) {
  return (
    <div className="skills my-2">
      <p className="font-bold text-3xl">Skills</p>
      <p className="my-2">
        {resumeState.skills.map((skill) => {
          return `${skill}, `;
        })}
      </p>
    </div>
  );
}

export default Skills;
