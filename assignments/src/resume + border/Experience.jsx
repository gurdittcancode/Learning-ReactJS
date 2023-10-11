function Experience({ resumeState }) {
  return (
    <div className="experience my-10">
      <div className="text-3xl font-bold">Experience</div>
      {resumeState.experience.map((exp, idx) => {
        return (
          <div key={idx} className="my-4">
            <div className="flex justify-between">
              <p className="font-bold">
                {exp.title}, {exp.company}
              </p>
              <p>
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
            <div className="italic">{exp.responsibilities}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
